import { lazy, Suspense, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import App from "./App.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { CaseStudyPage } from "./pages/CaseStudyPage.jsx";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./sections/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { AdminProvider } from "./context/AdminContext";

// The admin page is only compiled into dev builds, so its login gate and code
// never ship to visitors of the deployed site.
const AdminPage = import.meta.env.DEV
  ? lazy(() => import("./pages/AdminPage.jsx").then((m) => ({ default: m.AdminPage })))
  : null;

function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}

function NotFound() {
  return (
    <div className="container mx-auto px-6 py-40 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">Page not found</h1>
      <p className="mt-4 text-muted-foreground">That page doesn't exist.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
        Back to home
      </Link>
    </div>
  );
}

export function Root() {
  return (
    <ThemeProvider>
      <AdminProvider>
        <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <ScrollToHash />
          <Navbar />
          <main id="main">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<CaseStudyPage />} />
              {AdminPage && (
                <Route
                  path="/admin"
                  element={
                    <Suspense fallback={null}>
                      <AdminPage />
                    </Suspense>
                  }
                />
              )}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AdminProvider>
    </ThemeProvider>
  );
}
