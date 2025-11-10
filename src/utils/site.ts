const DEFAULT_SITE_URL = "https://mrsadri.github.io/Portfolio";

export const getSiteUrl = () =>
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) || DEFAULT_SITE_URL;

export default getSiteUrl;

