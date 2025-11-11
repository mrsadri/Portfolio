import {
  Helmet,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLocation
} from "./chunk-yty9pdhr.js";

// src/shared/components/Seo.tsx
var import_react = __toESM(require_react(), 1);

// src/shared/utils/site.ts
var DEFAULT_SITE_URL = "https://mrsadri.github.io/Portfolio";
var resolveSiteUrl = () => typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL || DEFAULT_SITE_URL;
var getSiteUrl = () => resolveSiteUrl();
var site_default = getSiteUrl;

// src/shared/components/Seo.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SITE_NAME = "Masih Sadri — Senior Product Designer";
var normalisePath = (path) => {
  if (!path) {
    return "";
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return path.startsWith("/") ? path : `/${path}`;
};
var toJsonLd = (data) => {
  if (!data) {
    return;
  }
  return Array.isArray(data) ? data : [data];
};
var Seo = ({
  title,
  description,
  canonicalPath,
  openGraph,
  structuredData,
  noindex,
  children
}) => {
  const location = useLocation();
  const siteUrl = import_react.useMemo(() => resolveSiteUrl().replace(/\/$/, ""), []);
  const path = canonicalPath ?? location.pathname + location.search;
  const canonicalUrl = `${siteUrl}${normalisePath(path)}`;
  const ogType = openGraph?.type ?? "website";
  const ogImageUrl = openGraph?.image?.url;
  const ogImageAlt = openGraph?.image?.alt;
  const jsonLd = toJsonLd(structuredData);
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
        content: SITE_NAME
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
      ogImageUrl ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
            property: "og:image",
            content: ogImageUrl
          }, undefined, false, undefined, this),
          ogImageAlt && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
            property: "og:image:alt",
            content: ogImageAlt
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this) : null,
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "twitter:title",
        content: title
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "twitter:description",
        content: description
      }, undefined, false, undefined, this),
      ogImageUrl ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "twitter:image",
        content: ogImageUrl
      }, undefined, false, undefined, this) : null,
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("link", {
        rel: "canonical",
        href: canonicalUrl
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "robots",
        content: noindex ? "noindex, nofollow" : "index, follow"
      }, undefined, false, undefined, this),
      jsonLd?.map((entry, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(entry) }
      }, index, false, undefined, this)),
      children
    ]
  }, undefined, true, undefined, this);
};
var Seo_default = Seo;

export { site_default, Seo_default };

//# debugId=6B2746526673AEAD64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1Nlby50c3giLCAiLi4vc3JjL3NoYXJlZC91dGlscy9zaXRlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0LWFzeW5jXCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyByZXNvbHZlU2l0ZVVybCB9IGZyb20gXCIuLi91dGlscy9zaXRlXCI7XG5cbnR5cGUgSnNvbkxkID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCByZWFkb25seSBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPltdO1xuXG50eXBlIFNlb1Byb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYW5vbmljYWxQYXRoPzogc3RyaW5nO1xuICBvcGVuR3JhcGg/OiB7XG4gICAgdHlwZT86IFwid2Vic2l0ZVwiIHwgXCJhcnRpY2xlXCIgfCBcInByb2ZpbGVcIjtcbiAgICBpbWFnZT86IHtcbiAgICAgIHVybDogc3RyaW5nO1xuICAgICAgYWx0Pzogc3RyaW5nO1xuICAgIH07XG4gIH07XG4gIHN0cnVjdHVyZWREYXRhPzogSnNvbkxkO1xuICBub2luZGV4PzogYm9vbGVhbjtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG59O1xuXG5jb25zdCBTSVRFX05BTUUgPSBcIk1hc2loIFNhZHJpIOKAlCBTZW5pb3IgUHJvZHVjdCBEZXNpZ25lclwiO1xuXG5jb25zdCBub3JtYWxpc2VQYXRoID0gKHBhdGg6IHN0cmluZykgPT4ge1xuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBpZiAocGF0aC5zdGFydHNXaXRoKFwiaHR0cDovL1wiKSB8fCBwYXRoLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSkge1xuICAgIHJldHVybiBwYXRoO1xuICB9XG4gIHJldHVybiBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gcGF0aCA6IGAvJHtwYXRofWA7XG59O1xuXG5jb25zdCB0b0pzb25MZCA9IChkYXRhPzogSnNvbkxkKSA9PiB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG59O1xuXG5jb25zdCBTZW8gPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNhbm9uaWNhbFBhdGgsXG4gIG9wZW5HcmFwaCxcbiAgc3RydWN0dXJlZERhdGEsXG4gIG5vaW5kZXgsXG4gIGNoaWxkcmVuLFxufTogU2VvUHJvcHMpID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBzaXRlVXJsID0gdXNlTWVtbygoKSA9PiByZXNvbHZlU2l0ZVVybCgpLnJlcGxhY2UoL1xcLyQvLCBcIlwiKSwgW10pO1xuXG4gIGNvbnN0IHBhdGggPSBjYW5vbmljYWxQYXRoID8/IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCBjYW5vbmljYWxVcmwgPSBgJHtzaXRlVXJsfSR7bm9ybWFsaXNlUGF0aChwYXRoKX1gO1xuXG4gIGNvbnN0IG9nVHlwZSA9IG9wZW5HcmFwaD8udHlwZSA/PyBcIndlYnNpdGVcIjtcbiAgY29uc3Qgb2dJbWFnZVVybCA9IG9wZW5HcmFwaD8uaW1hZ2U/LnVybDtcbiAgY29uc3Qgb2dJbWFnZUFsdCA9IG9wZW5HcmFwaD8uaW1hZ2U/LmFsdDtcblxuICBjb25zdCBqc29uTGQgPSB0b0pzb25MZChzdHJ1Y3R1cmVkRGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SGVsbWV0PlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e1NJVEVfTkFNRX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e29nVHlwZX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17Y2Fub25pY2FsVXJsfSAvPlxuXG4gICAgICB7b2dJbWFnZVVybCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17b2dJbWFnZVVybH0gLz5cbiAgICAgICAgICB7b2dJbWFnZUFsdCAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmFsdFwiIGNvbnRlbnQ9e29nSW1hZ2VBbHR9IC8+fVxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICB7b2dJbWFnZVVybCA/IDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17b2dJbWFnZVVybH0gLz4gOiBudWxsfVxuXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtjYW5vbmljYWxVcmx9IC8+XG5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PXtub2luZGV4ID8gXCJub2luZGV4LCBub2ZvbGxvd1wiIDogXCJpbmRleCwgZm9sbG93XCJ9IC8+XG5cbiAgICAgIHtqc29uTGQ/Lm1hcCgoZW50cnksIGluZGV4KSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBKU09OLnN0cmluZ2lmeShlbnRyeSkgfX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuXG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9IZWxtZXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZW87XG5cblxuIiwKICAgICJjb25zdCBERUZBVUxUX1NJVEVfVVJMID0gXCJodHRwczovL21yc2FkcmkuZ2l0aHViLmlvL1BvcnRmb2xpb1wiO1xuXG5leHBvcnQgY29uc3QgcmVzb2x2ZVNpdGVVcmwgPSAoKSA9PlxuICAodHlwZW9mIGltcG9ydC5tZXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGltcG9ydC5tZXRhLmVudj8uVklURV9TSVRFX1VSTCkgfHxcbiAgREVGQVVMVF9TSVRFX1VSTDtcblxuZXhwb3J0IGNvbnN0IGdldFNpdGVVcmwgPSAoKSA9PiByZXNvbHZlU2l0ZVVybCgpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTaXRlVXJsO1xuXG5cbiIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUNBOzs7QUNEQSxJQUFNLG1CQUFtQjtBQUVsQixJQUFNLGlCQUFpQixNQUMzQixPQUFPLGdCQUFnQixlQUFlLFlBQVksS0FBSyxpQkFDeEQ7QUFFSyxJQUFNLGFBQWEsTUFBTSxlQUFlO0FBRS9DLElBQWU7Ozs7QURnQmYsSUFBTSxZQUFZO0FBRWxCLElBQU0sZ0JBQWdCLENBQUMsU0FBaUI7QUFBQSxFQUN0QyxJQUFJLENBQUMsTUFBTTtBQUFBLElBQ1QsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLElBQUksS0FBSyxXQUFXLFNBQVMsS0FBSyxLQUFLLFdBQVcsVUFBVSxHQUFHO0FBQUEsSUFDN0QsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE9BQU8sS0FBSyxXQUFXLEdBQUcsSUFBSSxPQUFPLElBQUk7QUFBQTtBQUczQyxJQUFNLFdBQVcsQ0FBQyxTQUFrQjtBQUFBLEVBQ2xDLElBQUksQ0FBQyxNQUFNO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE9BQU8sTUFBTSxRQUFRLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSTtBQUFBO0FBRzNDLElBQU0sTUFBTTtBQUFBLEVBQ1Y7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxNQUNjO0FBQUEsRUFDZCxNQUFNLFdBQVcsWUFBWTtBQUFBLEVBQzdCLE1BQU0sVUFBVSxxQkFBUSxNQUFNLGVBQWUsRUFBRSxRQUFRLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFBLEVBRXJFLE1BQU0sT0FBTyxpQkFBaUIsU0FBUyxXQUFXLFNBQVM7QUFBQSxFQUMzRCxNQUFNLGVBQWUsR0FBRyxVQUFVLGNBQWMsSUFBSTtBQUFBLEVBRXBELE1BQU0sU0FBUyxXQUFXLFFBQVE7QUFBQSxFQUNsQyxNQUFNLGFBQWEsV0FBVyxPQUFPO0FBQUEsRUFDckMsTUFBTSxhQUFhLFdBQVcsT0FBTztBQUFBLEVBRXJDLE1BQU0sU0FBUyxTQUFTLGNBQWM7QUFBQSxFQUV0Qyx1QkFDRSx1QkFtQ0UsUUFuQ0Y7QUFBQSxjQW1DRTtBQUFBLHNCQWxDQSx1QkFBZ0IsU0FBaEI7QUFBQSxrQkFBUTtBQUFBLFNBQVIsaUNBQWdCO0FBQUEsc0JBQ2hCLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLE1BQUs7QUFBQSxRQUFjLFNBQVM7QUFBQSxTQUFsQyxpQ0FBK0M7QUFBQSxzQkFDL0MsdUJBQUMsUUFBRDtBQUFBLFFBQU0sVUFBUztBQUFBLFFBQWUsU0FBUztBQUFBLFNBQXZDLGlDQUFrRDtBQUFBLHNCQUNsRCx1QkFBQyxRQUFEO0FBQUEsUUFBTSxVQUFTO0FBQUEsUUFBVyxTQUFTO0FBQUEsU0FBbkMsaUNBQTBDO0FBQUEsc0JBQzFDLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLFVBQVM7QUFBQSxRQUFpQixTQUFTO0FBQUEsU0FBekMsaUNBQXNEO0FBQUEsc0JBQ3RELHVCQUFDLFFBQUQ7QUFBQSxRQUFNLFVBQVM7QUFBQSxRQUFVLFNBQVM7QUFBQSxTQUFsQyxpQ0FBMEM7QUFBQSxzQkFDMUMsdUJBQUMsUUFBRDtBQUFBLFFBQU0sVUFBUztBQUFBLFFBQVMsU0FBUztBQUFBLFNBQWpDLGlDQUErQztBQUFBLE1BRTlDLDZCQUNDO0FBQUEsa0JBR0U7QUFBQSwwQkFGQSx1QkFBQyxRQUFEO0FBQUEsWUFBTSxVQUFTO0FBQUEsWUFBVyxTQUFTO0FBQUEsYUFBbkMsaUNBQStDO0FBQUEsVUFDOUMsOEJBQWMsdUJBQUMsUUFBRDtBQUFBLFlBQU0sVUFBUztBQUFBLFlBQWUsU0FBUztBQUFBLGFBQXZDLGlDQUFtRDtBQUFBO0FBQUEsU0FGcEUsZ0NBR0UsSUFDQTtBQUFBLHNCQUVKLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLE1BQUs7QUFBQSxRQUFlLFNBQVE7QUFBQSxTQUFsQyxpQ0FBd0Q7QUFBQSxzQkFDeEQsdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQWdCLFNBQVM7QUFBQSxTQUFwQyxpQ0FBMkM7QUFBQSxzQkFDM0MsdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQXNCLFNBQVM7QUFBQSxTQUExQyxpQ0FBdUQ7QUFBQSxNQUN0RCw2QkFBYSx1QkFBQyxRQUFEO0FBQUEsUUFBTSxNQUFLO0FBQUEsUUFBZ0IsU0FBUztBQUFBLFNBQXBDLGlDQUFnRCxJQUFLO0FBQUEsc0JBRW5FLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLEtBQUk7QUFBQSxRQUFZLE1BQU07QUFBQSxTQUE1QixpQ0FBMEM7QUFBQSxzQkFFMUMsdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQVMsU0FBUyxVQUFVLHNCQUFzQjtBQUFBLFNBQTdELGlDQUE4RTtBQUFBLE1BRTdFLFFBQVEsSUFBSSxDQUFDLE9BQU8sMEJBQ25CLHVCQUFDLFVBQUQ7QUFBQSxRQUdFLE1BQUs7QUFBQSxRQUNMLHlCQUF5QixFQUFFLFFBQVEsS0FBSyxVQUFVLEtBQUssRUFBRTtBQUFBLFNBRnBELE9BRlAsc0JBS0EsQ0FDRDtBQUFBLE1BRUE7QUFBQTtBQUFBLEtBbENILGdDQW1DRTtBQUFBO0FBSU4sSUFBZTsiLAogICJkZWJ1Z0lkIjogIjZCMjc0NjUyNjY3M0FFQUQ2NDc1NkUyMTY0NzU2RTIxIiwKICAibmFtZXMiOiBbXQp9
