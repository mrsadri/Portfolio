import {
  Helmet,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLocation
} from "./chunk-dkmh5se1.js";

// src/components/Seo.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SITE_NAME = "Masih Sadri — Senior Product Designer";
var DEFAULT_CANONICAL = "https://mrsadri.github.io/Portfolio";
var resolveSiteUrl = () => typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL || DEFAULT_CANONICAL;
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

export { Seo_default };

//# debugId=FA0BEB7907FEAE4764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvbXBvbmVudHMvU2VvLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldC1hc3luY1wiO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG50eXBlIEpzb25MZCA9IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgcmVhZG9ubHkgUmVjb3JkPHN0cmluZywgdW5rbm93bj5bXTtcblxudHlwZSBTZW9Qcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY2Fub25pY2FsUGF0aD86IHN0cmluZztcbiAgb3BlbkdyYXBoPzoge1xuICAgIHR5cGU/OiBcIndlYnNpdGVcIiB8IFwiYXJ0aWNsZVwiIHwgXCJwcm9maWxlXCI7XG4gICAgaW1hZ2U/OiB7XG4gICAgICB1cmw6IHN0cmluZztcbiAgICAgIGFsdD86IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBzdHJ1Y3R1cmVkRGF0YT86IEpzb25MZDtcbiAgbm9pbmRleD86IGJvb2xlYW47XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufTtcblxuY29uc3QgU0lURV9OQU1FID0gXCJNYXNpaCBTYWRyaSDigJQgU2VuaW9yIFByb2R1Y3QgRGVzaWduZXJcIjtcbmNvbnN0IERFRkFVTFRfQ0FOT05JQ0FMID0gXCJodHRwczovL21yc2FkcmkuZ2l0aHViLmlvL1BvcnRmb2xpb1wiO1xuXG5jb25zdCByZXNvbHZlU2l0ZVVybCA9ICgpID0+XG4gICh0eXBlb2YgaW1wb3J0Lm1ldGEgIT09IFwidW5kZWZpbmVkXCIgJiYgaW1wb3J0Lm1ldGEuZW52Py5WSVRFX1NJVEVfVVJMKSB8fCBERUZBVUxUX0NBTk9OSUNBTDtcblxuY29uc3Qgbm9ybWFsaXNlUGF0aCA9IChwYXRoOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFwYXRoKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgaWYgKHBhdGguc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgcGF0aC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuICByZXR1cm4gcGF0aC5zdGFydHNXaXRoKFwiL1wiKSA/IHBhdGggOiBgLyR7cGF0aH1gO1xufTtcblxuY29uc3QgdG9Kc29uTGQgPSAoZGF0YT86IEpzb25MZCkgPT4ge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xufTtcblxuY29uc3QgU2VvID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYW5vbmljYWxQYXRoLFxuICBvcGVuR3JhcGgsXG4gIHN0cnVjdHVyZWREYXRhLFxuICBub2luZGV4LFxuICBjaGlsZHJlbixcbn06IFNlb1Byb3BzKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3Qgc2l0ZVVybCA9IHVzZU1lbW8oKCkgPT4gcmVzb2x2ZVNpdGVVcmwoKS5yZXBsYWNlKC9cXC8kLywgXCJcIiksIFtdKTtcblxuICBjb25zdCBwYXRoID0gY2Fub25pY2FsUGF0aCA/PyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgY2Fub25pY2FsVXJsID0gYCR7c2l0ZVVybH0ke25vcm1hbGlzZVBhdGgocGF0aCl9YDtcblxuICBjb25zdCBvZ1R5cGUgPSBvcGVuR3JhcGg/LnR5cGUgPz8gXCJ3ZWJzaXRlXCI7XG4gIGNvbnN0IG9nSW1hZ2VVcmwgPSBvcGVuR3JhcGg/LmltYWdlPy51cmw7XG4gIGNvbnN0IG9nSW1hZ2VBbHQgPSBvcGVuR3JhcGg/LmltYWdlPy5hbHQ7XG5cbiAgY29uc3QganNvbkxkID0gdG9Kc29uTGQoc3RydWN0dXJlZERhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPEhlbG1ldD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtTSVRFX05BTUV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PXtvZ1R5cGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2Nhbm9uaWNhbFVybH0gLz5cblxuICAgICAge29nSW1hZ2VVcmwgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IC8+XG4gICAgICAgICAge29nSW1hZ2VBbHQgJiYgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTphbHRcIiBjb250ZW50PXtvZ0ltYWdlQWx0fSAvPn1cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAge29nSW1hZ2VVcmwgPyA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IC8+IDogbnVsbH1cblxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17Y2Fub25pY2FsVXJsfSAvPlxuXG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD17bm9pbmRleCA/IFwibm9pbmRleCwgbm9mb2xsb3dcIiA6IFwiaW5kZXgsIGZvbGxvd1wifSAvPlxuXG4gICAgICB7anNvbkxkPy5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogSlNPTi5zdHJpbmdpZnkoZW50cnkpIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cblxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVsbWV0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VvO1xuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFDQTs7QUFzQkEsSUFBTSxZQUFZO0FBQ2xCLElBQU0sb0JBQW9CO0FBRTFCLElBQU0saUJBQWlCLE1BQ3BCLE9BQU8sZ0JBQWdCLGVBQWUsWUFBWSxLQUFLLGlCQUFrQjtBQUU1RSxJQUFNLGdCQUFnQixDQUFDLFNBQWlCO0FBQUEsRUFDdEMsSUFBSSxDQUFDLE1BQU07QUFBQSxJQUNULE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxJQUFJLEtBQUssV0FBVyxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsR0FBRztBQUFBLElBQzdELE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxPQUFPLEtBQUssV0FBVyxHQUFHLElBQUksT0FBTyxJQUFJO0FBQUE7QUFHM0MsSUFBTSxXQUFXLENBQUMsU0FBa0I7QUFBQSxFQUNsQyxJQUFJLENBQUMsTUFBTTtBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFFQSxPQUFPLE1BQU0sUUFBUSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUk7QUFBQTtBQUczQyxJQUFNLE1BQU07QUFBQSxFQUNWO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsTUFDYztBQUFBLEVBQ2QsTUFBTSxXQUFXLFlBQVk7QUFBQSxFQUM3QixNQUFNLFVBQVUscUJBQVEsTUFBTSxlQUFlLEVBQUUsUUFBUSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBQSxFQUVyRSxNQUFNLE9BQU8saUJBQWlCLFNBQVMsV0FBVyxTQUFTO0FBQUEsRUFDM0QsTUFBTSxlQUFlLEdBQUcsVUFBVSxjQUFjLElBQUk7QUFBQSxFQUVwRCxNQUFNLFNBQVMsV0FBVyxRQUFRO0FBQUEsRUFDbEMsTUFBTSxhQUFhLFdBQVcsT0FBTztBQUFBLEVBQ3JDLE1BQU0sYUFBYSxXQUFXLE9BQU87QUFBQSxFQUVyQyxNQUFNLFNBQVMsU0FBUyxjQUFjO0FBQUEsRUFFdEMsdUJBQ0UsdUJBbUNFLFFBbkNGO0FBQUEsY0FtQ0U7QUFBQSxzQkFsQ0EsdUJBQWdCLFNBQWhCO0FBQUEsa0JBQVE7QUFBQSxTQUFSLGlDQUFnQjtBQUFBLHNCQUNoQix1QkFBQyxRQUFEO0FBQUEsUUFBTSxNQUFLO0FBQUEsUUFBYyxTQUFTO0FBQUEsU0FBbEMsaUNBQStDO0FBQUEsc0JBQy9DLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLFVBQVM7QUFBQSxRQUFlLFNBQVM7QUFBQSxTQUF2QyxpQ0FBa0Q7QUFBQSxzQkFDbEQsdUJBQUMsUUFBRDtBQUFBLFFBQU0sVUFBUztBQUFBLFFBQVcsU0FBUztBQUFBLFNBQW5DLGlDQUEwQztBQUFBLHNCQUMxQyx1QkFBQyxRQUFEO0FBQUEsUUFBTSxVQUFTO0FBQUEsUUFBaUIsU0FBUztBQUFBLFNBQXpDLGlDQUFzRDtBQUFBLHNCQUN0RCx1QkFBQyxRQUFEO0FBQUEsUUFBTSxVQUFTO0FBQUEsUUFBVSxTQUFTO0FBQUEsU0FBbEMsaUNBQTBDO0FBQUEsc0JBQzFDLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLFVBQVM7QUFBQSxRQUFTLFNBQVM7QUFBQSxTQUFqQyxpQ0FBK0M7QUFBQSxNQUU5Qyw2QkFDQztBQUFBLGtCQUdFO0FBQUEsMEJBRkEsdUJBQUMsUUFBRDtBQUFBLFlBQU0sVUFBUztBQUFBLFlBQVcsU0FBUztBQUFBLGFBQW5DLGlDQUErQztBQUFBLFVBQzlDLDhCQUFjLHVCQUFDLFFBQUQ7QUFBQSxZQUFNLFVBQVM7QUFBQSxZQUFlLFNBQVM7QUFBQSxhQUF2QyxpQ0FBbUQ7QUFBQTtBQUFBLFNBRnBFLGdDQUdFLElBQ0E7QUFBQSxzQkFFSix1QkFBQyxRQUFEO0FBQUEsUUFBTSxNQUFLO0FBQUEsUUFBZSxTQUFRO0FBQUEsU0FBbEMsaUNBQXdEO0FBQUEsc0JBQ3hELHVCQUFDLFFBQUQ7QUFBQSxRQUFNLE1BQUs7QUFBQSxRQUFnQixTQUFTO0FBQUEsU0FBcEMsaUNBQTJDO0FBQUEsc0JBQzNDLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLE1BQUs7QUFBQSxRQUFzQixTQUFTO0FBQUEsU0FBMUMsaUNBQXVEO0FBQUEsTUFDdEQsNkJBQWEsdUJBQUMsUUFBRDtBQUFBLFFBQU0sTUFBSztBQUFBLFFBQWdCLFNBQVM7QUFBQSxTQUFwQyxpQ0FBZ0QsSUFBSztBQUFBLHNCQUVuRSx1QkFBQyxRQUFEO0FBQUEsUUFBTSxLQUFJO0FBQUEsUUFBWSxNQUFNO0FBQUEsU0FBNUIsaUNBQTBDO0FBQUEsc0JBRTFDLHVCQUFDLFFBQUQ7QUFBQSxRQUFNLE1BQUs7QUFBQSxRQUFTLFNBQVMsVUFBVSxzQkFBc0I7QUFBQSxTQUE3RCxpQ0FBOEU7QUFBQSxNQUU3RSxRQUFRLElBQUksQ0FBQyxPQUFPLDBCQUNuQix1QkFBQyxVQUFEO0FBQUEsUUFHRSxNQUFLO0FBQUEsUUFDTCx5QkFBeUIsRUFBRSxRQUFRLEtBQUssVUFBVSxLQUFLLEVBQUU7QUFBQSxTQUZwRCxPQUZQLHNCQUtBLENBQ0Q7QUFBQSxNQUVBO0FBQUE7QUFBQSxLQWxDSCxnQ0FtQ0U7QUFBQTtBQUlOLElBQWU7IiwKICAiZGVidWdJZCI6ICJGQTBCRUI3OTA3RkVBRTQ3NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
