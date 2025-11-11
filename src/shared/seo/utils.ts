import type { OpenGraphImage, PageMetadata, RobotsDirectives, StructuredData } from "./types";
import { resolveSiteUrl } from "../utils/site";

const SITE_NAME = "Masih Sadri — Senior Product Designer";

const ensureArray = <T,>(value: T | readonly T[] | undefined): ReadonlyArray<T> => {
  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return value as ReadonlyArray<T>;
  }

  return [value as T];
};

const normalisePath = (path?: string) => {
  if (!path) {
    return "";
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export const resolveCanonicalUrl = (canonicalPath?: string) => {
  const siteUrl = resolveSiteUrl().replace(/\/$/, "");
  const path = normalisePath(canonicalPath);

  return `${siteUrl}${path}`;
};

export const resolveRobotsContent = (
  directives: RobotsDirectives | undefined,
  shouldNoIndex: boolean,
) => {
  if (directives?.custom) {
    return directives.custom;
  }

  const indexValue =
    directives?.index === false || shouldNoIndex ? "noindex" : directives?.index === true ? "index" : "index";
  const followValue =
    directives?.follow === false ? "nofollow" : directives?.follow === true ? "follow" : "follow";

  return `${indexValue}, ${followValue}`;
};

export const normaliseOpenGraphImages = (
  metadata: Pick<PageMetadata, "openGraph"> & Partial<PageMetadata>,
) => {
  const imagesFromLegacy = metadata.openGraph?.image;
  const imagesFromMeta = metadata.openGraph?.images;

  const merged = [...ensureArray(imagesFromLegacy), ...ensureArray(imagesFromMeta)];

  return merged.filter(
    (image): image is OpenGraphImage =>
      Boolean(image) && typeof image.url === "string" && image.url.trim().length > 0,
  );
};

export const toStructuredDataArray = (data?: StructuredData) => {
  if (!data) {
    return [];
  }

  return Array.isArray(data) ? data : [data];
};

export const getSiteName = () => SITE_NAME;


