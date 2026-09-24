import { Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { useAdmin } from "@/context/AdminContext";

const RESUME_URL = "https://drive.google.com/file/d/16su0EnGDX2EtFG8SCqNhSQJzonOEfEqD/view";
const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);
const shortcut = isMac ? "⌘ K" : "Ctrl K";

export const CommandPalette = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { projects } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const triggerRef = useRef(null);
  const listRef = useRef(null);

  const commands = useMemo(() => {
    const goSection = (id) => () => navigate({ pathname: "/", hash: `#${id}` });
    const open = (url) => () => window.open(url, "_blank", "noopener,noreferrer");
    return [
      { label: "View projects", category: "Navigate", action: () => navigate("/projects") },
      ...projects
        .filter((p) => p.slug)
        .map((p) => ({ label: `Open ${p.title}`, category: "Case study", action: () => navigate(`/projects/${p.slug}`) })),
      { label: "Open AI Lab", category: "Navigate", action: goSection("ai-lab") },
      { label: "About", category: "Navigate", action: goSection("about") },
      { label: "Skills", category: "Navigate", action: goSection("skills") },
      { label: "Contact", category: "Navigate", action: goSection("contact") },
      { label: "Download resume", category: "Link", action: open(RESUME_URL) },
      { label: "GitHub", category: "Link", action: open("https://github.com/vishakha143") },
      { label: "LinkedIn", category: "Link", action: open("https://www.linkedin.com/in/vishakha-kumari-857b89251/") },
      { label: "LeetCode", category: "Link", action: open("https://leetcode.com/u/v-14ishakha/") },
      { label: isDark ? "Switch to light theme" : "Switch to dark theme", category: "Action", action: toggleTheme },
    ];
  }, [navigate, projects, isDark, toggleTheme]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q) || c.category.toLowerCase().includes(q));
  }, [commands, search]);

  const close = () => {
    setIsOpen(false);
    setSearch("");
    setSelectedIndex(0);
    triggerRef.current?.focus();
  };

  const run = (cmd) => {
    if (!cmd) return;
    setIsOpen(false);
    setSearch("");
    setSelectedIndex(0);
    cmd.action();
  };

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch("");
        setSelectedIndex(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    const onEscape = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        setSearch("");
        setSelectedIndex(0);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex, filtered]);

  const onInputKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
        break;
      case "Enter":
        e.preventDefault();
        run(filtered[selectedIndex]);
        break;
      case "Tab":
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open command palette"
        aria-haspopup="dialog"
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-white/[0.02] hover:bg-white/[0.05] transition text-sm text-muted-foreground cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        <span className="hidden text-xs lg:inline">{shortcut}</span>
      </button>

      {isOpen && createPortal(
        <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-20">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={close} aria-hidden="true" />
          <div role="dialog" aria-modal="true" aria-label="Command palette" className="relative w-full max-w-xl">
            <div className="glass-strong rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <input
                  ref={inputRef}
                  autoFocus
                  type="text"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="palette-list"
                  aria-activedescendant={filtered[selectedIndex] ? `palette-opt-${selectedIndex}` : undefined}
                  aria-label="Search commands"
                  placeholder="Search Vishakha OS..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={onInputKeyDown}
                  className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground text-sm"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">Esc</kbd>
              </div>

              <div id="palette-list" ref={listRef} role="listbox" aria-label="Commands" className="mt-3 max-h-72 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="px-4 py-6 text-center text-sm text-muted-foreground">No results found</p>
                ) : (
                  filtered.map((cmd, idx) => (
                    <div
                      key={cmd.label}
                      id={`palette-opt-${idx}`}
                      role="option"
                      aria-selected={idx === selectedIndex}
                      onClick={() => run(cmd)}
                      onMouseMove={() => setSelectedIndex(idx)}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-left text-sm transition ${
                        idx === selectedIndex ? "bg-primary/15 text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <span>{cmd.label}</span>
                      <span className="text-xs opacity-60">{cmd.category}</span>
                    </div>
                  ))
                )}
              </div>

              <p className="mt-3 border-t border-border pt-2 text-xs text-muted-foreground">
                ↑ ↓ to navigate · Enter to select · Esc to close
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
