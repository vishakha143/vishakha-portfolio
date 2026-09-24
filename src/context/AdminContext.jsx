/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { defaultProjects } from "@/data/projects";

const STORAGE_KEY = "portfolio_projects_v3";

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used within AdminProvider");
  return context;
};

const loadProjects = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // fall through to defaults
  }
  return defaultProjects;
};

const slugify = (text) =>
  text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export const AdminProvider = ({ children }) => {
  const [projects, setProjects] = useState(loadProjects);

  const saveProjects = (updated) => {
    setProjects(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // storage unavailable; changes last for this session only
    }
  };

  const addProject = (newProject) => {
    const base = slugify(newProject.title) || "project";
    const taken = new Set(projects.map((p) => p.slug));
    let slug = base;
    for (let n = 2; taken.has(slug); n += 1) slug = `${base}-${n}`;
    const project = { ...newProject, id: Date.now(), slug };
    saveProjects([...projects, project]);
    return project;
  };

  const resetProjects = () => {
    setProjects(defaultProjects);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const updateProject = (id, updatedData) => {
    saveProjects(projects.map((p) => (p.id === id ? { ...p, ...updatedData } : p)));
  };

  const deleteProject = (id) => {
    saveProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <AdminContext.Provider value={{ projects, addProject, updateProject, deleteProject, resetProjects }}>
      {children}
    </AdminContext.Provider>
  );
};
