import {
  Helmet,
  __toESM,
  require_jsx_dev_runtime,
  useLocation
} from "./chunk-a0eztsys.js";

// src/shared/utils/site.ts
var DEFAULT_SITE_URL = "https://mrsadri.github.io/Portfolio";
var resolveSiteUrl = () => typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL || DEFAULT_SITE_URL;
var getSiteUrl = () => resolveSiteUrl();
var site_default = getSiteUrl;

// src/shared/seo/utils.ts
var SITE_NAME = "Masih Sadri — Senior Product Designer";
var ensureArray = (value) => {
  if (value == null) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};
var normalisePath = (path) => {
  if (!path) {
    return "";
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return path.startsWith("/") ? path : `/${path}`;
};
var resolveCanonicalUrl = (canonicalPath) => {
  const siteUrl = resolveSiteUrl().replace(/\/$/, "");
  const path = normalisePath(canonicalPath);
  return `${siteUrl}${path}`;
};
var resolveRobotsContent = (directives, shouldNoIndex) => {
  if (directives?.custom) {
    return directives.custom;
  }
  const indexValue = directives?.index === false || shouldNoIndex ? "noindex" : directives?.index === true ? "index" : "index";
  const followValue = directives?.follow === false ? "nofollow" : directives?.follow === true ? "follow" : "follow";
  return `${indexValue}, ${followValue}`;
};
var normaliseOpenGraphImages = (metadata) => {
  const imagesFromLegacy = metadata.openGraph?.image;
  const imagesFromMeta = metadata.openGraph?.images;
  const merged = [...ensureArray(imagesFromLegacy), ...ensureArray(imagesFromMeta)];
  return merged.filter((image) => Boolean(image) && typeof image.url === "string" && image.url.trim().length > 0);
};
var toStructuredDataArray = (data) => {
  if (!data) {
    return [];
  }
  return Array.isArray(data) ? data : [data];
};
var getSiteName = () => SITE_NAME;

// src/shared/seo/Seo.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Seo = ({
  title,
  description,
  canonicalPath,
  openGraph,
  structuredData,
  robots,
  noindex,
  children
}) => {
  const location = useLocation();
  const canonicalUrl = resolveCanonicalUrl(canonicalPath ?? `${location.pathname}${location.search}`);
  const ogType = openGraph?.type ?? "website";
  const ogImages = normaliseOpenGraphImages({ openGraph });
  const jsonLd = toStructuredDataArray(structuredData);
  const robotsContent = resolveRobotsContent(robots, Boolean(noindex));
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Helmet, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("title", {
        children: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "description",
        content: description
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:site_name",
        content: getSiteName()
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:title",
        content: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:description",
        content: description
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:type",
        content: ogType
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:url",
        content: canonicalUrl
      }, undefined, false, undefined, this),
      ogImages.map((image, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:image",
        content: image.url
      }, `${image.url}-${index}`, false, undefined, this)),
      ogImages.map((image, index) => image.alt ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:image:alt",
        content: image.alt
      }, `${image.url}-alt-${index}`, false, undefined, this) : null),
      ogImages.map((image, index) => image.width ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:image:width",
        content: String(image.width)
      }, `${image.url}-width-${index}`, false, undefined, this) : null),
      ogImages.map((image, index) => image.height ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:image:height",
        content: String(image.height)
      }, `${image.url}-height-${index}`, false, undefined, this) : null),
      ogImages.map((image, index) => image.type ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        property: "og:image:type",
        content: image.type
      }, `${image.url}-type-${index}`, false, undefined, this) : null),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "twitter:card",
        content: ogImages.length > 0 ? "summary_large_image" : "summary"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "twitter:title",
        content: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "twitter:description",
        content: description
      }, undefined, false, undefined, this),
      ogImages[0] ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "twitter:image",
        content: ogImages[0].url
      }, undefined, false, undefined, this) : null,
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("link", {
        rel: "canonical",
        href: canonicalUrl
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "robots",
        content: robotsContent
      }, undefined, false, undefined, this),
      jsonLd.map((entry) => {
        const json = JSON.stringify(entry);
        return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("script", {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: json }
        }, json, false, undefined, this);
      }),
      children
    ]
  }, undefined, true, undefined, this);
};
var Seo_default = Seo;
export { site_default, Seo_default };

//# debugId=BA93CC05300AA72C64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3NoYXJlZC91dGlscy9zaXRlLnRzIiwgIi4uL3NyYy9zaGFyZWQvc2VvL3V0aWxzLnRzIiwgIi4uL3NyYy9zaGFyZWQvc2VvL1Nlby50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiY29uc3QgREVGQVVMVF9TSVRFX1VSTCA9IFwiaHR0cHM6Ly9tcnNhZHJpLmdpdGh1Yi5pby9Qb3J0Zm9saW9cIjtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVTaXRlVXJsID0gKCkgPT5cbiAgKHR5cGVvZiBpbXBvcnQubWV0YSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpbXBvcnQubWV0YS5lbnY/LlZJVEVfU0lURV9VUkwpIHx8XG4gIERFRkFVTFRfU0lURV9VUkw7XG5cbmV4cG9ydCBjb25zdCBnZXRTaXRlVXJsID0gKCkgPT4gcmVzb2x2ZVNpdGVVcmwoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2l0ZVVybDtcblxuXG4iLAogICAgImltcG9ydCB0eXBlIHsgT3BlbkdyYXBoSW1hZ2UsIFBhZ2VNZXRhZGF0YSwgUm9ib3RzRGlyZWN0aXZlcywgU3RydWN0dXJlZERhdGEgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZVNpdGVVcmwgfSBmcm9tIFwiLi4vdXRpbHMvc2l0ZVwiO1xuXG5jb25zdCBTSVRFX05BTUUgPSBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiO1xuXG5jb25zdCBlbnN1cmVBcnJheSA9IDxULD4odmFsdWU6IFQgfCByZWFkb25seSBUW10gfCB1bmRlZmluZWQpOiBSZWFkb25seUFycmF5PFQ+ID0+IHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUgYXMgUmVhZG9ubHlBcnJheTxUPjtcbiAgfVxuXG4gIHJldHVybiBbdmFsdWUgYXMgVF07XG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXNlUGF0aCA9IChwYXRoPzogc3RyaW5nKSA9PiB7XG4gIGlmICghcGF0aCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgaWYgKHBhdGguc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgcGF0aC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHJldHVybiBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gcGF0aCA6IGAvJHtwYXRofWA7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZUNhbm9uaWNhbFVybCA9IChjYW5vbmljYWxQYXRoPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNpdGVVcmwgPSByZXNvbHZlU2l0ZVVybCgpLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgY29uc3QgcGF0aCA9IG5vcm1hbGlzZVBhdGgoY2Fub25pY2FsUGF0aCk7XG5cbiAgcmV0dXJuIGAke3NpdGVVcmx9JHtwYXRofWA7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZVJvYm90c0NvbnRlbnQgPSAoXG4gIGRpcmVjdGl2ZXM6IFJvYm90c0RpcmVjdGl2ZXMgfCB1bmRlZmluZWQsXG4gIHNob3VsZE5vSW5kZXg6IGJvb2xlYW4sXG4pID0+IHtcbiAgaWYgKGRpcmVjdGl2ZXM/LmN1c3RvbSkge1xuICAgIHJldHVybiBkaXJlY3RpdmVzLmN1c3RvbTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4VmFsdWUgPVxuICAgIGRpcmVjdGl2ZXM/LmluZGV4ID09PSBmYWxzZSB8fCBzaG91bGROb0luZGV4ID8gXCJub2luZGV4XCIgOiBkaXJlY3RpdmVzPy5pbmRleCA9PT0gdHJ1ZSA/IFwiaW5kZXhcIiA6IFwiaW5kZXhcIjtcbiAgY29uc3QgZm9sbG93VmFsdWUgPVxuICAgIGRpcmVjdGl2ZXM/LmZvbGxvdyA9PT0gZmFsc2UgPyBcIm5vZm9sbG93XCIgOiBkaXJlY3RpdmVzPy5mb2xsb3cgPT09IHRydWUgPyBcImZvbGxvd1wiIDogXCJmb2xsb3dcIjtcblxuICByZXR1cm4gYCR7aW5kZXhWYWx1ZX0sICR7Zm9sbG93VmFsdWV9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBub3JtYWxpc2VPcGVuR3JhcGhJbWFnZXMgPSAoXG4gIG1ldGFkYXRhOiBQaWNrPFBhZ2VNZXRhZGF0YSwgXCJvcGVuR3JhcGhcIj4gJiBQYXJ0aWFsPFBhZ2VNZXRhZGF0YT4sXG4pID0+IHtcbiAgY29uc3QgaW1hZ2VzRnJvbUxlZ2FjeSA9IG1ldGFkYXRhLm9wZW5HcmFwaD8uaW1hZ2U7XG4gIGNvbnN0IGltYWdlc0Zyb21NZXRhID0gbWV0YWRhdGEub3BlbkdyYXBoPy5pbWFnZXM7XG5cbiAgY29uc3QgbWVyZ2VkID0gWy4uLmVuc3VyZUFycmF5KGltYWdlc0Zyb21MZWdhY3kpLCAuLi5lbnN1cmVBcnJheShpbWFnZXNGcm9tTWV0YSldO1xuXG4gIHJldHVybiBtZXJnZWQuZmlsdGVyKFxuICAgIChpbWFnZSk6IGltYWdlIGlzIE9wZW5HcmFwaEltYWdlID0+XG4gICAgICBCb29sZWFuKGltYWdlKSAmJiB0eXBlb2YgaW1hZ2UudXJsID09PSBcInN0cmluZ1wiICYmIGltYWdlLnVybC50cmltKCkubGVuZ3RoID4gMCxcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0b1N0cnVjdHVyZWREYXRhQXJyYXkgPSAoZGF0YT86IFN0cnVjdHVyZWREYXRhKSA9PiB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaXRlTmFtZSA9ICgpID0+IFNJVEVfTkFNRTtcblxuXG4iLAogICAgImltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXQtYXN5bmNcIjtcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGdldFNpdGVOYW1lLCBub3JtYWxpc2VPcGVuR3JhcGhJbWFnZXMsIHJlc29sdmVDYW5vbmljYWxVcmwsIHJlc29sdmVSb2JvdHNDb250ZW50LCB0b1N0cnVjdHVyZWREYXRhQXJyYXkgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHR5cGUgeyBQYWdlTWV0YWRhdGEgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG50eXBlIFNlb1Byb3BzID0gUGFnZU1ldGFkYXRhO1xuXG5jb25zdCBTZW8gPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNhbm9uaWNhbFBhdGgsXG4gIG9wZW5HcmFwaCxcbiAgc3RydWN0dXJlZERhdGEsXG4gIHJvYm90cyxcbiAgbm9pbmRleCxcbiAgY2hpbGRyZW4sXG59OiBTZW9Qcm9wcykgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgY29uc3QgY2Fub25pY2FsVXJsID0gcmVzb2x2ZUNhbm9uaWNhbFVybChjYW5vbmljYWxQYXRoID8/IGAke2xvY2F0aW9uLnBhdGhuYW1lfSR7bG9jYXRpb24uc2VhcmNofWApO1xuICBjb25zdCBvZ1R5cGUgPSBvcGVuR3JhcGg/LnR5cGUgPz8gXCJ3ZWJzaXRlXCI7XG4gIGNvbnN0IG9nSW1hZ2VzID0gbm9ybWFsaXNlT3BlbkdyYXBoSW1hZ2VzKHsgb3BlbkdyYXBoIH0pO1xuICBjb25zdCBqc29uTGQgPSB0b1N0cnVjdHVyZWREYXRhQXJyYXkoc3RydWN0dXJlZERhdGEpO1xuICBjb25zdCByb2JvdHNDb250ZW50ID0gcmVzb2x2ZVJvYm90c0NvbnRlbnQocm9ib3RzLCBCb29sZWFuKG5vaW5kZXgpKTtcblxuICByZXR1cm4gKFxuICAgIDxIZWxtZXQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cblxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtnZXRTaXRlTmFtZSgpfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD17b2dUeXBlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtjYW5vbmljYWxVcmx9IC8+XG5cbiAgICAgIHtvZ0ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICA8bWV0YSBrZXk9e2Ake2ltYWdlLnVybH0tJHtpbmRleH1gfSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2UudXJsfSAvPlxuICAgICAgKSl9XG4gICAgICB7b2dJbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+XG4gICAgICAgIGltYWdlLmFsdCA/IChcbiAgICAgICAgICA8bWV0YSBrZXk9e2Ake2ltYWdlLnVybH0tYWx0LSR7aW5kZXh9YH0gcHJvcGVydHk9XCJvZzppbWFnZTphbHRcIiBjb250ZW50PXtpbWFnZS5hbHR9IC8+XG4gICAgICAgICkgOiBudWxsLFxuICAgICAgKX1cbiAgICAgIHtvZ0ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT5cbiAgICAgICAgaW1hZ2Uud2lkdGggPyAoXG4gICAgICAgICAgPG1ldGEga2V5PXtgJHtpbWFnZS51cmx9LXdpZHRoLSR7aW5kZXh9YH0gcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9e1N0cmluZyhpbWFnZS53aWR0aCl9IC8+XG4gICAgICAgICkgOiBudWxsLFxuICAgICAgKX1cbiAgICAgIHtvZ0ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT5cbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID8gKFxuICAgICAgICAgIDxtZXRhIGtleT17YCR7aW1hZ2UudXJsfS1oZWlnaHQtJHtpbmRleH1gfSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9e1N0cmluZyhpbWFnZS5oZWlnaHQpfSAvPlxuICAgICAgICApIDogbnVsbCxcbiAgICAgICl9XG4gICAgICB7b2dJbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+XG4gICAgICAgIGltYWdlLnR5cGUgPyAoXG4gICAgICAgICAgPG1ldGEga2V5PXtgJHtpbWFnZS51cmx9LXR5cGUtJHtpbmRleH1gfSBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBjb250ZW50PXtpbWFnZS50eXBlfSAvPlxuICAgICAgICApIDogbnVsbCxcbiAgICAgICl9XG5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PXtvZ0ltYWdlcy5sZW5ndGggPiAwID8gXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgOiBcInN1bW1hcnlcIn0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAge29nSW1hZ2VzWzBdID8gPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtvZ0ltYWdlc1swXS51cmx9IC8+IDogbnVsbH1cblxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17Y2Fub25pY2FsVXJsfSAvPlxuXG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD17cm9ib3RzQ29udGVudH0gLz5cblxuICAgICAge2pzb25MZC5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShlbnRyeSk7XG4gICAgICAgIHJldHVybiA8c2NyaXB0IGtleT17anNvbn0gdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGpzb24gfX0gLz47XG4gICAgICB9KX1cblxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVsbWV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VvO1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7O0FBQUEsSUFBTSxtQkFBbUI7QUFFbEIsSUFBTSxpQkFBaUIsTUFDM0IsT0FBTyxnQkFBZ0IsZUFBZSxZQUFZLEtBQUssaUJBQ3hEO0FBRUssSUFBTSxhQUFhLE1BQU0sZUFBZTtBQUUvQyxJQUFlOzs7QUNMZixJQUFNLFlBQVk7QUFFbEIsSUFBTSxjQUFjLENBQUssVUFBMEQ7QUFBQSxFQUNqRixJQUFJLFNBQVMsTUFBTTtBQUFBLElBQ2pCLE9BQU8sQ0FBQztBQUFBLEVBQ1Y7QUFBQSxFQUVBLElBQUksTUFBTSxRQUFRLEtBQUssR0FBRztBQUFBLElBQ3hCLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxPQUFPLENBQUMsS0FBVTtBQUFBO0FBR2IsSUFBTSxnQkFBZ0IsQ0FBQyxTQUFrQjtBQUFBLEVBQzlDLElBQUksQ0FBQyxNQUFNO0FBQUEsSUFDVCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsSUFBSSxLQUFLLFdBQVcsU0FBUyxLQUFLLEtBQUssV0FBVyxVQUFVLEdBQUc7QUFBQSxJQUM3RCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxLQUFLLFdBQVcsR0FBRyxJQUFJLE9BQU8sSUFBSTtBQUFBO0FBR3BDLElBQU0sc0JBQXNCLENBQUMsa0JBQTJCO0FBQUEsRUFDN0QsTUFBTSxVQUFVLGVBQWUsRUFBRSxRQUFRLE9BQU8sRUFBRTtBQUFBLEVBQ2xELE1BQU0sT0FBTyxjQUFjLGFBQWE7QUFBQSxFQUV4QyxPQUFPLEdBQUcsVUFBVTtBQUFBO0FBR2YsSUFBTSx1QkFBdUIsQ0FDbEMsWUFDQSxrQkFDRztBQUFBLEVBQ0gsSUFBSSxZQUFZLFFBQVE7QUFBQSxJQUN0QixPQUFPLFdBQVc7QUFBQSxFQUNwQjtBQUFBLEVBRUEsTUFBTSxhQUNKLFlBQVksVUFBVSxT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QUFPLE1BQU0sS0FBSztBQUFBLFNBQXBGLEdBQUcsTUFBTSxhQUFhLFNBQWpDLHNCQUFrRyxJQUNoRyxJQUNOO0FBQUEsTUFDQyxTQUFTLElBQUksQ0FBQyxPQUFPLFVBQ3BCLE1BQU0seUJBQ0osdUJBQUMsUUFBRDtBQUFBLFFBQTJDLFVBQVM7QUFBQSxRQUFrQixTQUFTLE9BQU8sTUFBTSxNQUFNO0FBQUEsU0FBdkYsR0FBRyxNQUFNLGNBQWMsU0FBbEMsc0JBQXFHLElBQ25HLElBQ047QUFBQSxNQUNDLFNBQVMsSUFBSSxDQUFDLE9BQU8sVUFDcEIsTUFBTSx1QkFDSix1QkFBQyxRQUFEO0FBQUEsUUFBeUMsVUFBUztBQUFBLFFBQWdCLFNBQVMsTUFBTTtBQUFBLFNBQXRFLEdBQUcsTUFBTSxZQUFZLFNBQWhDLHNCQUF1RixJQUNyRixJQUNOO0FBQUEsc0JBRUEsdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQWUsU0FBUyxTQUFTLFNBQVMsSUFBSSx3QkFBd0I7QUFBQSxTQUFqRixpQ0FBNEY7QUFBQSxzQkFDNUYsdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQWdCLFNBQVM7QUFBQSxTQUFwQyxpQ0FBMkM7QUFBQSxzQkFDM0MsdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQXNCLFNBQVM7QUFBQSxTQUExQyxpQ0FBdUQ7QUFBQSxNQUN0RCxTQUFTLHFCQUFLLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLE1BQUs7QUFBQSxRQUFnQixTQUFTLFNBQVMsR0FBRztBQUFBLFNBQWhELGlDQUFxRCxJQUFLO0FBQUEsc0JBRXpFLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLEtBQUk7QUFBQSxRQUFZLE1BQU07QUFBQSxTQUE1QixpQ0FBMEM7QUFBQSxzQkFFMUMsdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQVMsU0FBUztBQUFBLFNBQTdCLGlDQUE0QztBQUFBLE1BRTNDLE9BQU8sSUFBSSxDQUFDLFVBQVU7QUFBQSxRQUNyQixNQUFNLE9BQU8sS0FBSyxVQUFVLEtBQUs7QUFBQSxRQUNqQyx1QkFBTyx1QkFBQyxVQUFEO0FBQUEsVUFBbUIsTUFBSztBQUFBLFVBQXNCLHlCQUF5QixFQUFFLFFBQVEsS0FBSztBQUFBLFdBQXpFLE1BQWIsc0JBQXlGO0FBQUEsT0FDakc7QUFBQSxNQUVBO0FBQUE7QUFBQSxLQWhESCxnQ0FpREU7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICJCQTkzQ0MwNTMwMEFBNzJDNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
