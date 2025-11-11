const DEFAULT_SITE_URL = "https://mrsadri.github.io/Portfolio";

export const resolveSiteUrl = () =>
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  DEFAULT_SITE_URL;

const getSiteUrl = () => resolveSiteUrl();

export default getSiteUrl;


