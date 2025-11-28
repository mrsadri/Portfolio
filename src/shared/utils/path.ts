/**
 * Utility functions for path resolution, especially for GitHub Pages deployments.
 * 
 * GitHub Pages Behavior:
 * - When deployed to a project site (e.g., username.github.io/repo-name/),
 *   the base path is /repo-name/
 * - When deployed to a user/organization site (e.g., username.github.io/),
 *   the base path is /
 */

const normaliseBasename = (value?: string | null): string => {
  if (!value) {
    return "/";
  }

  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") {
    return "/";
  }

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
};

const getEnvBasename = (): string => {
  if (typeof import.meta === "undefined") {
    return "/";
  }

  const env = import.meta.env ?? {};
  const explicitBasename =
    typeof env.VITE_ROUTER_BASENAME === "string" ? env.VITE_ROUTER_BASENAME : undefined;
  const baseUrl = explicitBasename ?? env.BASE_URL;

  return normaliseBasename(baseUrl);
};

/**
 * Detects the base path for the current deployment.
 * 
 * This function:
 * 1. First checks for explicit environment variable configuration
 * 2. Falls back to detecting GitHub Pages base path from the URL
 * 3. Returns "/" for local development or non-GitHub Pages deployments
 * 
 * @returns The base path (e.g., "/Portfolio" for GitHub Pages project sites, "/" otherwise)
 */
export const getBasePath = (): string => {
  const envBasename = getEnvBasename();
  if (envBasename !== "/") {
    return envBasename;
  }

  if (typeof window === "undefined") {
    return "/";
  }

  const { hostname, pathname } = window.location;
  if (!hostname.endsWith("github.io")) {
    return "/";
  }

  const [maybeRepo] = pathname.split("/").filter(Boolean);

  return maybeRepo ? normaliseBasename(maybeRepo) : "/";
};

/**
 * Resolves a path relative to the base path.
 * 
 * @param path - The path to resolve (e.g., "/Masih-Sadri-Resume.pdf")
 * @returns The resolved path with base path prepended if needed
 * 
 * @example
 * // On GitHub Pages (base path: /Portfolio)
 * resolvePath("/Masih-Sadri-Resume.pdf") // Returns "/Portfolio/Masih-Sadri-Resume.pdf"
 * 
 * // Locally (base path: /)
 * resolvePath("/Masih-Sadri-Resume.pdf") // Returns "/Masih-Sadri-Resume.pdf"
 */
export const resolvePath = (path: string): string => {
  const basePath = getBasePath();
  if (basePath === "/") {
    return path;
  }

  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  // Combine base path with the path
  return `${basePath}${normalizedPath}`;
};

