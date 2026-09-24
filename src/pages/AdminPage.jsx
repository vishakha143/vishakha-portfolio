import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CircleAlert,
  CircleCheck,
  Eye,
  EyeOff,
  ImagePlus,
  LoaderCircle,
  Pencil,
  Plus,
  RotateCcw,
  Trash2,
  X,
} from "lucide-react";
import { useAdmin } from "@/context/AdminContext";
import { ACCEPTED_TYPES, cloudinaryConfigured, optimizeImage, uploadImage, validateImage } from "@/lib/cloudinary";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const inputClass =
  "w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted/50 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const isHttpUrl = (value) => {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

const validate = (f) => {
  const errors = {};
  if (!f.title.trim()) errors.title = "Title is required.";
  if (!f.kind.trim()) errors.kind = "Category is required.";
  if (!f.description.trim()) errors.description = "Description is required.";
  ["demoUrl", "codeUrl"].forEach((key) => {
    if (f[key].trim() && !isHttpUrl(f[key].trim())) errors[key] = "Enter a full URL starting with https://";
  });
  return errors;
};

const toForm = (project, nextNumber) => ({
  number: project?.number ?? nextNumber,
  kind: project?.kind ?? "",
  title: project?.title ?? "",
  subtitle: project?.subtitle ?? "",
  description: project?.description ?? "",
  featuresText: (project?.features ?? []).join("\n"),
  tags: project?.tags ?? [],
  demoUrl: project?.demoUrl ?? "",
  codeUrl: project?.codeUrl ?? "",
  image: project?.image ?? "",
});

const fromForm = (f) => ({
  number: f.number.trim(),
  kind: f.kind.trim().toUpperCase(),
  title: f.title.trim(),
  subtitle: f.subtitle.trim(),
  description: f.description.trim(),
  features: f.featuresText.split("\n").map((l) => l.trim()).filter(Boolean),
  tags: f.tags,
  demoUrl: f.demoUrl.trim() || null,
  codeUrl: f.codeUrl.trim() || null,
  image: f.image,
});

const Field = ({ id, label, error, hint, children }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
      {label}
    </label>
    {children}
    {hint && !error && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-danger">
        {error}
      </p>
    )}
  </div>
);

const TagInput = ({ id, value, onChange }) => {
  const [draft, setDraft] = useState("");

  const commit = (raw) => {
    const next = raw.split(",").map((t) => t.trim()).filter(Boolean);
    if (!next.length) return;
    const merged = [...value];
    next.forEach((t) => {
      if (!merged.some((m) => m.toLowerCase() === t.toLowerCase())) merged.push(t);
    });
    onChange(merged);
    setDraft("");
  };

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-background/50 p-2 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
      {value.map((tag) => (
        <span key={tag} className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs">
          {tag}
          <button
            type="button"
            aria-label={`Remove ${tag}`}
            onClick={() => onChange(value.filter((t) => t !== tag))}
            className="rounded-full text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="h-3 w-3" aria-hidden="true" />
          </button>
        </span>
      ))}
      <input
        id={id}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            commit(draft);
          } else if (e.key === "Backspace" && !draft && value.length) {
            onChange(value.slice(0, -1));
          }
        }}
        onBlur={() => commit(draft)}
        placeholder={value.length ? "" : "React, Node.js…"}
        className="min-w-[8rem] flex-1 bg-transparent px-1 py-1 text-sm outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
};

const ImageUploader = ({ value, onChange, onBusyChange }) => {
  const inputRef = useRef(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const busy = progress !== null;

  const handleFile = async (file) => {
    if (!file) return;
    setError("");
    const problem = validateImage(file);
    if (problem) {
      setError(problem);
      return;
    }
    setProgress(0);
    onBusyChange(true);
    try {
      const { url } = await uploadImage(file, { onProgress: setProgress });
      onChange(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setProgress(null);
      onBusyChange(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  if (!cloudinaryConfigured) {
    return (
      <div className="space-y-3">
        {value && <img src={optimizeImage(value, 400)} alt="Current project" className="h-32 w-52 rounded-lg border border-border object-cover" />}
        <p role="status" className="rounded-lg border border-dashed border-border p-3 text-xs leading-5 text-muted-foreground">
          Image upload is off. Add <code>VITE_CLOUDINARY_CLOUD_NAME</code>, <code>CLOUDINARY_API_KEY</code> and{" "}
          <code>CLOUDINARY_API_SECRET</code> to <code>.env.local</code> and restart the dev server.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {value && !busy && (
        <div className="flex flex-wrap items-start gap-4">
          <img src={optimizeImage(value, 400)} alt="Project preview" className="h-32 w-52 rounded-lg border border-border object-cover" />
          <div className="flex gap-2">
            <button type="button" onClick={() => inputRef.current?.click()} className={btnGhost}>
              <ImagePlus className="h-4 w-4" aria-hidden="true" /> Replace
            </button>
            <button type="button" onClick={() => onChange("")} className={btnGhost}>
              <Trash2 className="h-4 w-4" aria-hidden="true" /> Remove
            </button>
          </div>
        </div>
      )}

      {(!value || busy) && (
        <button
          type="button"
          disabled={busy}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            handleFile(e.dataTransfer.files?.[0]);
          }}
          className={`flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-8 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            dragging ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
          }`}
        >
          {busy ? (
            <>
              <LoaderCircle className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
              <span>Uploading… {progress}%</span>
              <span className="h-1.5 w-48 overflow-hidden rounded-full bg-border" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Upload progress">
                <span className="block h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
              </span>
            </>
          ) : (
            <>
              <ImagePlus className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              <span>Drop an image here or click to upload</span>
              <span className="text-xs text-muted-foreground">JPG, PNG, WebP or AVIF, up to 10 MB</span>
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_TYPES.join(",")}
        className="sr-only"
        tabIndex={-1}
        aria-label="Upload project image"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      {error && (
        <p role="alert" className="flex items-center gap-1.5 text-xs text-danger">
          <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
};

const ProjectForm = ({ initial, nextNumber, onSave, onCancel }) => {
  const [form, setForm] = useState(() => toForm(initial, nextNumber));
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const isNew = !initial;
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const aria = (key) => ({ "aria-invalid": Boolean(errors[key]), "aria-describedby": errors[key] ? `${key}-error` : undefined });

  const submit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    onSave(fromForm(form));
  };

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-2xl border border-primary/30 bg-white/[0.03] p-6">
      <h2 className="text-xl font-semibold">{isNew ? "Add project" : `Edit ${initial.title}`}</h2>

      <div className="grid gap-4 sm:grid-cols-[6rem_1fr]">
        <Field id="number" label="No.">
          <input id="number" value={form.number} onChange={set("number")} maxLength={3} className={inputClass} />
        </Field>
        <Field id="kind" label="Category" error={errors.kind} hint="Shown as a label, e.g. AI-INTEGRATED, SAAS.">
          <input id="kind" value={form.kind} onChange={set("kind")} {...aria("kind")} className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="title" label="Title" error={errors.title}>
          <input id="title" value={form.title} onChange={set("title")} {...aria("title")} className={inputClass} />
        </Field>
        <Field id="subtitle" label="Subtitle">
          <input id="subtitle" value={form.subtitle} onChange={set("subtitle")} className={inputClass} />
        </Field>
      </div>

      <Field id="description" label="Description" error={errors.description}>
        <textarea id="description" rows={4} value={form.description} onChange={set("description")} {...aria("description")} className={`${inputClass} resize-y`} />
      </Field>

      <div>
        <p className="mb-1.5 text-sm font-medium">Project image</p>
        <ImageUploader value={form.image} onChange={(url) => setForm((f) => ({ ...f, image: url }))} onBusyChange={setUploading} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="demoUrl" label="Live demo URL" error={errors.demoUrl} hint="Leave empty to hide the button.">
          <input id="demoUrl" type="url" inputMode="url" value={form.demoUrl} onChange={set("demoUrl")} {...aria("demoUrl")} className={inputClass} />
        </Field>
        <Field id="codeUrl" label="Source code URL" error={errors.codeUrl} hint="Leave empty to hide the button.">
          <input id="codeUrl" type="url" inputMode="url" value={form.codeUrl} onChange={set("codeUrl")} {...aria("codeUrl")} className={inputClass} />
        </Field>
      </div>

      <Field id="features" label="Key features" hint="One per line.">
        <textarea id="features" rows={3} value={form.featuresText} onChange={set("featuresText")} className={`${inputClass} resize-y`} />
      </Field>

      <Field id="tags" label="Tech tags" hint="Press Enter or comma to add.">
        <TagInput id="tags" value={form.tags} onChange={(tags) => setForm((f) => ({ ...f, tags }))} />
      </Field>

      <div className="flex justify-end gap-3 border-t border-border pt-4">
        <button type="button" onClick={onCancel} className={btnGhost}>
          Cancel
        </button>
        <button type="submit" disabled={uploading} className={btnPrimary}>
          {uploading ? "Uploading image…" : isNew ? "Add project" : "Save changes"}
        </button>
      </div>
    </form>
  );
};

const LoginGate = ({ onAuth }) => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!ADMIN_PASSWORD) {
      setError("Set VITE_ADMIN_PASSWORD in .env.local to enable admin login.");
    } else if (password === ADMIN_PASSWORD) {
      onAuth();
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4 rounded-2xl border border-border bg-white/[0.02] p-8">
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="text-sm text-muted-foreground">Local development only.</p>
        <Field id="admin-password" label="Password" error={error}>
          <div className="relative">
            <input
              id="admin-password"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              autoComplete="current-password"
              className={`${inputClass} pr-10`}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {show ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>
        </Field>
        <button type="submit" className={`${btnPrimary} w-full`}>
          Sign in
        </button>
        <Link to="/" className="block text-center text-sm text-primary hover:underline">
          Back to portfolio
        </Link>
      </form>
    </div>
  );
};

export const AdminPage = () => {
  const { projects, addProject, updateProject, deleteProject, resetProjects } = useAdmin();
  const [authed, setAuthed] = useState(false);
  const [editing, setEditing] = useState(null); // project id | "new" | null
  const [confirming, setConfirming] = useState(null); // project id | "reset" | null
  const [status, setStatus] = useState(null);
  const timer = useRef(null);

  const notify = (type, text) => {
    clearTimeout(timer.current);
    setStatus({ type, text });
    timer.current = setTimeout(() => setStatus(null), 4000);
  };

  if (!authed) return <LoginGate onAuth={() => setAuthed(true)} />;

  const nextNumber = String(projects.length + 1).padStart(2, "0");
  const editingProject = typeof editing === "number" ? projects.find((p) => p.id === editing) : null;

  const handleSave = (data) => {
    if (editing === "new") {
      addProject(data);
      notify("success", `Added ${data.title}.`);
    } else {
      updateProject(editing, data);
      notify("success", `Saved ${data.title}.`);
    }
    setEditing(null);
  };

  return (
    <div className="min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Local dev only. Changes are saved in this browser and are not visible to site visitors.
            </p>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => setEditing("new")} disabled={editing !== null} className={btnPrimary}>
              <Plus className="h-4 w-4" aria-hidden="true" /> Add project
            </button>
            <button type="button" onClick={() => setAuthed(false)} className={btnGhost}>
              Sign out
            </button>
          </div>
        </header>

        {status && (
          <p
            role="status"
            className={`mb-6 flex items-center gap-2 rounded-lg border px-4 py-3 text-sm ${
              status.type === "success" ? "border-primary/30 bg-primary/10" : "border-danger/30 bg-danger/10"
            }`}
          >
            {status.type === "success" ? <CircleCheck className="h-4 w-4 text-primary" aria-hidden="true" /> : <CircleAlert className="h-4 w-4 text-danger" aria-hidden="true" />}
            {status.text}
          </p>
        )}

        <div className="space-y-4">
          {editing === "new" && <ProjectForm nextNumber={nextNumber} onSave={handleSave} onCancel={() => setEditing(null)} />}

          {projects.map((project) =>
            editing === project.id ? (
              <ProjectForm key={project.id} initial={editingProject} nextNumber={nextNumber} onSave={handleSave} onCancel={() => setEditing(null)} />
            ) : (
              <article key={project.id} className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-white/[0.02] p-4">
                <div className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background/50">
                  {project.image ? (
                    <img src={optimizeImage(project.image, 300)} alt="" className="h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
                  ) : (
                    <ImagePlus className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">
                    {project.number} · {project.kind}
                  </p>
                  <h2 className="truncate text-lg font-semibold">{project.title}</h2>
                  <p className="text-xs text-muted-foreground">
                    {[project.demoUrl ? "Demo link" : "No demo link", project.codeUrl ? "Source link" : "No source link", project.image ? "Image" : "No image"].join(" · ")}
                  </p>
                </div>

                <div className="flex gap-2">
                  {confirming === project.id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          deleteProject(project.id);
                          setConfirming(null);
                          notify("success", `Deleted ${project.title}.`);
                        }}
                        className="inline-flex items-center gap-2 rounded-lg bg-danger px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-danger"
                      >
                        Confirm delete
                      </button>
                      <button type="button" onClick={() => setConfirming(null)} className={btnGhost}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button type="button" onClick={() => setEditing(project.id)} disabled={editing !== null} className={btnGhost} aria-label={`Edit ${project.title}`}>
                        <Pencil className="h-4 w-4" aria-hidden="true" /> Edit
                      </button>
                      <button type="button" onClick={() => setConfirming(project.id)} disabled={editing !== null} className={btnGhost} aria-label={`Delete ${project.title}`}>
                        <Trash2 className="h-4 w-4" aria-hidden="true" /> Delete
                      </button>
                    </>
                  )}
                </div>
              </article>
            )
          )}

          {projects.length === 0 && editing === null && (
            <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">No projects yet.</p>
          )}
        </div>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <Link to="/" className="text-sm text-primary hover:underline">
            ← Back to portfolio
          </Link>
          {confirming === "reset" ? (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Discard all local changes?</span>
              <button
                type="button"
                onClick={() => {
                  resetProjects();
                  setConfirming(null);
                  setEditing(null);
                  notify("success", "Restored the default projects.");
                }}
                className="rounded-lg bg-danger px-3 py-1.5 text-white"
              >
                Yes, reset
              </button>
              <button type="button" onClick={() => setConfirming(null)} className={btnGhost}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setConfirming("reset")} className={btnGhost}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset to defaults
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};
