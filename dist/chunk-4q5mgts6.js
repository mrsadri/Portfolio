import {
  Helmet,
  __toESM,
  require_jsx_dev_runtime,
  useLocation
} from "./chunk-pzn0e5q4.js";

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

//# debugId=122BEC12A15522A764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3NoYXJlZC91dGlscy9zaXRlLnRzIiwgIi4uL3NyYy9zaGFyZWQvc2VvL3V0aWxzLnRzIiwgIi4uL3NyYy9zaGFyZWQvc2VvL1Nlby50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiY29uc3QgREVGQVVMVF9TSVRFX1VSTCA9IFwiaHR0cHM6Ly9tcnNhZHJpLmdpdGh1Yi5pby9Qb3J0Zm9saW9cIjtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVTaXRlVXJsID0gKCkgPT5cbiAgKHR5cGVvZiBpbXBvcnQubWV0YSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpbXBvcnQubWV0YS5lbnY/LlZJVEVfU0lURV9VUkwpIHx8XG4gIERFRkFVTFRfU0lURV9VUkw7XG5cbmNvbnN0IGdldFNpdGVVcmwgPSAoKSA9PiByZXNvbHZlU2l0ZVVybCgpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTaXRlVXJsO1xuXG5cbiIsCiAgICAiaW1wb3J0IHR5cGUgeyBPcGVuR3JhcGhJbWFnZSwgUGFnZU1ldGFkYXRhLCBSb2JvdHNEaXJlY3RpdmVzLCBTdHJ1Y3R1cmVkRGF0YSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyByZXNvbHZlU2l0ZVVybCB9IGZyb20gXCIuLi91dGlscy9zaXRlXCI7XG5cbmNvbnN0IFNJVEVfTkFNRSA9IFwiTWFzaWggU2Fkcmkg4oCUIFNlbmlvciBQcm9kdWN0IERlc2lnbmVyXCI7XG5cbmNvbnN0IGVuc3VyZUFycmF5ID0gPFQsPih2YWx1ZTogVCB8IHJlYWRvbmx5IFRbXSB8IHVuZGVmaW5lZCk6IFJlYWRvbmx5QXJyYXk8VD4gPT4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZSBhcyBSZWFkb25seUFycmF5PFQ+O1xuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZSBhcyBUXTtcbn07XG5cbmNvbnN0IG5vcm1hbGlzZVBhdGggPSAocGF0aD86IHN0cmluZykgPT4ge1xuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGlmIChwYXRoLnN0YXJ0c1dpdGgoXCJodHRwOi8vXCIpIHx8IHBhdGguc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICByZXR1cm4gcGF0aC5zdGFydHNXaXRoKFwiL1wiKSA/IHBhdGggOiBgLyR7cGF0aH1gO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVDYW5vbmljYWxVcmwgPSAoY2Fub25pY2FsUGF0aD86IHN0cmluZykgPT4ge1xuICBjb25zdCBzaXRlVXJsID0gcmVzb2x2ZVNpdGVVcmwoKS5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gIGNvbnN0IHBhdGggPSBub3JtYWxpc2VQYXRoKGNhbm9uaWNhbFBhdGgpO1xuXG4gIHJldHVybiBgJHtzaXRlVXJsfSR7cGF0aH1gO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc29sdmVSb2JvdHNDb250ZW50ID0gKFxuICBkaXJlY3RpdmVzOiBSb2JvdHNEaXJlY3RpdmVzIHwgdW5kZWZpbmVkLFxuICBzaG91bGROb0luZGV4OiBib29sZWFuLFxuKSA9PiB7XG4gIGlmIChkaXJlY3RpdmVzPy5jdXN0b20pIHtcbiAgICByZXR1cm4gZGlyZWN0aXZlcy5jdXN0b207XG4gIH1cblxuICBjb25zdCBpbmRleFZhbHVlID1cbiAgICBkaXJlY3RpdmVzPy5pbmRleCA9PT0gZmFsc2UgfHwgc2hvdWxkTm9JbmRleCA/IFwibm9pbmRleFwiIDogZGlyZWN0aXZlcz8uaW5kZXggPT09IHRydWUgPyBcImluZGV4XCIgOiBcImluZGV4XCI7XG4gIGNvbnN0IGZvbGxvd1ZhbHVlID1cbiAgICBkaXJlY3RpdmVzPy5mb2xsb3cgPT09IGZhbHNlID8gXCJub2ZvbGxvd1wiIDogZGlyZWN0aXZlcz8uZm9sbG93ID09PSB0cnVlID8gXCJmb2xsb3dcIiA6IFwiZm9sbG93XCI7XG5cbiAgcmV0dXJuIGAke2luZGV4VmFsdWV9LCAke2ZvbGxvd1ZhbHVlfWA7XG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXNlT3BlbkdyYXBoSW1hZ2VzID0gKFxuICBtZXRhZGF0YTogUGljazxQYWdlTWV0YWRhdGEsIFwib3BlbkdyYXBoXCI+ICYgUGFydGlhbDxQYWdlTWV0YWRhdGE+LFxuKSA9PiB7XG4gIGNvbnN0IGltYWdlc0Zyb21MZWdhY3kgPSBtZXRhZGF0YS5vcGVuR3JhcGg/LmltYWdlO1xuICBjb25zdCBpbWFnZXNGcm9tTWV0YSA9IG1ldGFkYXRhLm9wZW5HcmFwaD8uaW1hZ2VzO1xuXG4gIGNvbnN0IG1lcmdlZCA9IFsuLi5lbnN1cmVBcnJheShpbWFnZXNGcm9tTGVnYWN5KSwgLi4uZW5zdXJlQXJyYXkoaW1hZ2VzRnJvbU1ldGEpXTtcblxuICByZXR1cm4gbWVyZ2VkLmZpbHRlcihcbiAgICAoaW1hZ2UpOiBpbWFnZSBpcyBPcGVuR3JhcGhJbWFnZSA9PlxuICAgICAgQm9vbGVhbihpbWFnZSkgJiYgdHlwZW9mIGltYWdlLnVybCA9PT0gXCJzdHJpbmdcIiAmJiBpbWFnZS51cmwudHJpbSgpLmxlbmd0aCA+IDAsXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9TdHJ1Y3R1cmVkRGF0YUFycmF5ID0gKGRhdGE/OiBTdHJ1Y3R1cmVkRGF0YSkgPT4ge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2l0ZU5hbWUgPSAoKSA9PiBTSVRFX05BTUU7XG5cblxuIiwKICAgICJpbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0LWFzeW5jXCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBnZXRTaXRlTmFtZSwgbm9ybWFsaXNlT3BlbkdyYXBoSW1hZ2VzLCByZXNvbHZlQ2Fub25pY2FsVXJsLCByZXNvbHZlUm9ib3RzQ29udGVudCwgdG9TdHJ1Y3R1cmVkRGF0YUFycmF5IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB0eXBlIHsgUGFnZU1ldGFkYXRhIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxudHlwZSBTZW9Qcm9wcyA9IFBhZ2VNZXRhZGF0YTtcblxuY29uc3QgU2VvID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYW5vbmljYWxQYXRoLFxuICBvcGVuR3JhcGgsXG4gIHN0cnVjdHVyZWREYXRhLFxuICByb2JvdHMsXG4gIG5vaW5kZXgsXG4gIGNoaWxkcmVuLFxufTogU2VvUHJvcHMpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIGNvbnN0IGNhbm9uaWNhbFVybCA9IHJlc29sdmVDYW5vbmljYWxVcmwoY2Fub25pY2FsUGF0aCA/PyBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH1gKTtcbiAgY29uc3Qgb2dUeXBlID0gb3BlbkdyYXBoPy50eXBlID8/IFwid2Vic2l0ZVwiO1xuICBjb25zdCBvZ0ltYWdlcyA9IG5vcm1hbGlzZU9wZW5HcmFwaEltYWdlcyh7IG9wZW5HcmFwaCB9KTtcbiAgY29uc3QganNvbkxkID0gdG9TdHJ1Y3R1cmVkRGF0YUFycmF5KHN0cnVjdHVyZWREYXRhKTtcbiAgY29uc3Qgcm9ib3RzQ29udGVudCA9IHJlc29sdmVSb2JvdHNDb250ZW50KHJvYm90cywgQm9vbGVhbihub2luZGV4KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17Z2V0U2l0ZU5hbWUoKX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e29nVHlwZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17Y2Fub25pY2FsVXJsfSAvPlxuXG4gICAgICB7b2dJbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbiAgICAgICAgPG1ldGEga2V5PXtgJHtpbWFnZS51cmx9LSR7aW5kZXh9YH0gcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlLnVybH0gLz5cbiAgICAgICkpfVxuICAgICAge29nSW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PlxuICAgICAgICBpbWFnZS5hbHQgPyAoXG4gICAgICAgICAgPG1ldGEga2V5PXtgJHtpbWFnZS51cmx9LWFsdC0ke2luZGV4fWB9IHByb3BlcnR5PVwib2c6aW1hZ2U6YWx0XCIgY29udGVudD17aW1hZ2UuYWx0fSAvPlxuICAgICAgICApIDogbnVsbCxcbiAgICAgICl9XG4gICAgICB7b2dJbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+XG4gICAgICAgIGltYWdlLndpZHRoID8gKFxuICAgICAgICAgIDxtZXRhIGtleT17YCR7aW1hZ2UudXJsfS13aWR0aC0ke2luZGV4fWB9IHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PXtTdHJpbmcoaW1hZ2Uud2lkdGgpfSAvPlxuICAgICAgICApIDogbnVsbCxcbiAgICAgICl9XG4gICAgICB7b2dJbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+XG4gICAgICAgIGltYWdlLmhlaWdodCA/IChcbiAgICAgICAgICA8bWV0YSBrZXk9e2Ake2ltYWdlLnVybH0taGVpZ2h0LSR7aW5kZXh9YH0gcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PXtTdHJpbmcoaW1hZ2UuaGVpZ2h0KX0gLz5cbiAgICAgICAgKSA6IG51bGwsXG4gICAgICApfVxuICAgICAge29nSW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PlxuICAgICAgICBpbWFnZS50eXBlID8gKFxuICAgICAgICAgIDxtZXRhIGtleT17YCR7aW1hZ2UudXJsfS10eXBlLSR7aW5kZXh9YH0gcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD17aW1hZ2UudHlwZX0gLz5cbiAgICAgICAgKSA6IG51bGwsXG4gICAgICApfVxuXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD17b2dJbWFnZXMubGVuZ3RoID4gMCA/IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIDogXCJzdW1tYXJ5XCJ9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIHtvZ0ltYWdlc1swXSA/IDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17b2dJbWFnZXNbMF0udXJsfSAvPiA6IG51bGx9XG5cbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Nhbm9uaWNhbFVybH0gLz5cblxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9e3JvYm90c0NvbnRlbnR9IC8+XG5cbiAgICAgIHtqc29uTGQubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoZW50cnkpO1xuICAgICAgICByZXR1cm4gPHNjcmlwdCBrZXk9e2pzb259IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBqc29uIH19IC8+O1xuICAgICAgfSl9XG5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0hlbG1ldD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbztcblxuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBLElBQU0sbUJBQW1CO0FBRWxCLElBQU0saUJBQWlCLE1BQzNCLE9BQU8sZ0JBQWdCLGVBQWUsWUFBWSxLQUFLLGlCQUN4RDtBQUVGLElBQU0sYUFBYSxNQUFNLGVBQWU7QUFFeEMsSUFBZTs7O0FDTGYsSUFBTSxZQUFZO0FBRWxCLElBQU0sY0FBYyxDQUFLLFVBQTBEO0FBQUEsRUFDakYsSUFBSSxTQUFTLE1BQU07QUFBQSxJQUNqQixPQUFPLENBQUM7QUFBQSxFQUNWO0FBQUEsRUFFQSxJQUFJLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFBQSxJQUN4QixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsT0FBTyxDQUFDLEtBQVU7QUFBQTtBQUdwQixJQUFNLGdCQUFnQixDQUFDLFNBQWtCO0FBQUEsRUFDdkMsSUFBSSxDQUFDLE1BQU07QUFBQSxJQUNULE9BQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxJQUFJLEtBQUssV0FBVyxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsR0FBRztBQUFBLElBQzdELE9BQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxPQUFPLEtBQUssV0FBVyxHQUFHLElBQUksT0FBTyxJQUFJO0FBQUE7QUFHcEMsSUFBTSxzQkFBc0IsQ0FBQyxrQkFBMkI7QUFBQSxFQUM3RCxNQUFNLFVBQVUsZUFBZSxFQUFFLFFBQVEsT0FBTyxFQUFFO0FBQUEsRUFDbEQsTUFBTSxPQUFPLGNBQWMsYUFBYTtBQUFBLEVBRXhDLE9BQU8sR0FBRyxVQUFVO0FBQUE7QUFHZixJQUFNLHVCQUF1QixDQUNsQyxZQUNBLGtCQUNHO0FBQUEsRUFDSCxJQUFJLFlBQVksUUFBUTtBQUFBLElBQ3RCLE9BQU8sV0FBVztBQUFBLEVBQ3BCO0FBQUEsRUFFQSxNQUFNLGFBQ0osWUFBWSxVQUFVLFNBQVMsZ0JBQWdCLFlB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O0FBQUEsU0FBcEYsR0FBRyxNQUFNLGFBQWEsU0FBakMsc0JBQWtHLElBQ2hHLElBQ047QUFBQSxNQUNDLFNBQVMsSUFBSSxDQUFDLE9BQU8sVUFDcEIsTUFBTSx5QkFDSix1QkFBQyxRQUFEO0FBQUEsUUFBMkMsVUFBUztBQUFBLFFBQWtCLFNBQVMsT0FBTyxNQUFNLE1BQU07QUFBQSxTQUF2RixHQUFHLE1BQU0sY0FBYyxTQUFsQyxzQkFBcUcsSUFDbkcsSUFDTjtBQUFBLE1BQ0MsU0FBUyxJQUFJLENBQUMsT0FBTyxVQUNwQixNQUFNLHVCQUNKLHVCQUFDLFFBQUQ7QUFBQSxRQUF5QyxVQUFTO0FBQUEsUUFBZ0IsU0FBUyxNQUFNO0FBQUEsU0FBdEUsR0FBRyxNQUFNLFlBQVksU0FBaEMsc0JBQXVGLElBQ3JGLElBQ047QUFBQSxzQkFFQSx1QkFBQyxRQUFEO0FBQUEsUUFBTSxNQUFLO0FBQUEsUUFBZSxTQUFTLFNBQVMsU0FBUyxJQUFJLHdCQUF3QjtBQUFBLFNBQWpGLGlDQUE0RjtBQUFBLHNCQUM1Rix1QkFBQyxRQUFEO0FBQUEsUUFBTSxNQUFLO0FBQUEsUUFBZ0IsU0FBUztBQUFBLFNBQXBDLGlDQUEyQztBQUFBLHNCQUMzQyx1QkFBQyxRQUFEO0FBQUEsUUFBTSxNQUFLO0FBQUEsUUFBc0IsU0FBUztBQUFBLFNBQTFDLGlDQUF1RDtBQUFBLE1BQ3RELFNBQVMscUJBQUssdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQWdCLFNBQVMsU0FBUyxHQUFHO0FBQUEsU0FBaEQsaUNBQXFELElBQUs7QUFBQSxzQkFFekUsdUJBQUMsUUFBRDtBQUFBLFFBQU0sS0FBSTtBQUFBLFFBQVksTUFBTTtBQUFBLFNBQTVCLGlDQUEwQztBQUFBLHNCQUUxQyx1QkFBQyxRQUFEO0FBQUEsUUFBTSxNQUFLO0FBQUEsUUFBUyxTQUFTO0FBQUEsU0FBN0IsaUNBQTRDO0FBQUEsTUFFM0MsT0FBTyxJQUFJLENBQUMsVUFBVTtBQUFBLFFBQ3JCLE1BQU0sT0FBTyxLQUFLLFVBQVUsS0FBSztBQUFBLFFBQ2pDLHVCQUFPLHVCQUFDLFVBQUQ7QUFBQSxVQUFtQixNQUFLO0FBQUEsVUFBc0IseUJBQXlCLEVBQUUsUUFBUSxLQUFLO0FBQUEsV0FBekUsTUFBYixzQkFBeUY7QUFBQSxPQUNqRztBQUFBLE1BRUE7QUFBQTtBQUFBLEtBaERILGdDQWlERTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjEyMkJFQzEyQTE1NTIyQTc2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
