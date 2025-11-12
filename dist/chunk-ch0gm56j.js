import {
  __toESM,
  createSvgIcon,
  require_jsx_runtime,
  require_react
} from "./chunk-a0eztsys.js";

// src/utils/smoothScroll.ts
var easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
var smoothScrollToElement = (element, options = {}) => {
  if (typeof window === "undefined") {
    return;
  }
  const { duration = 800, offset = 0 } = options;
  const start = window.scrollY;
  const rect = element.getBoundingClientRect();
  const destination = Math.max(0, Math.min(rect.top + start - offset, document.documentElement.scrollHeight - window.innerHeight));
  if (duration <= 0) {
    window.scrollTo({ top: destination, behavior: "auto" });
    return;
  }
  const startTime = performance.now();
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    const nextPosition = start + (destination - start) * eased;
    window.scrollTo({ top: nextPosition, behavior: "auto" });
    if (progress < 1) {
      window.requestAnimationFrame(animate);
    }
  };
  window.requestAnimationFrame(animate);
};

// node_modules/@mui/icons-material/esm/Telegram.js
var React = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
"use client";
var Telegram_default = createSvgIcon(/* @__PURE__ */ import_jsx_runtime.jsx("path", {
  d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
}), "Telegram");

export { Telegram_default, smoothScrollToElement };

//# debugId=5D787774FE21256764756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWxzL3Ntb290aFNjcm9sbC50cyIsICIuLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vVGVsZWdyYW0uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiY29uc3QgZWFzZUluT3V0Q3ViaWMgPSAodDogbnVtYmVyKSA9PlxuICB0IDwgMC41ID8gNCAqIHQgKiB0ICogdCA6IDEgLSBNYXRoLnBvdygtMiAqIHQgKyAyLCAzKSAvIDI7XG5cbnR5cGUgU21vb3RoU2Nyb2xsT3B0aW9ucyA9IHtcbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBzbW9vdGhTY3JvbGxUb0VsZW1lbnQgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBvcHRpb25zOiBTbW9vdGhTY3JvbGxPcHRpb25zID0ge30sXG4pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IGR1cmF0aW9uID0gODAwLCBvZmZzZXQgPSAwIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN0YXJ0ID0gd2luZG93LnNjcm9sbFk7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IE1hdGgubWF4KFxuICAgIDAsXG4gICAgTWF0aC5taW4oXG4gICAgICByZWN0LnRvcCArIHN0YXJ0IC0gb2Zmc2V0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICApLFxuICApO1xuXG4gIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBkZXN0aW5hdGlvbiwgYmVoYXZpb3I6IFwiYXV0b1wiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gIGNvbnN0IGFuaW1hdGUgPSAoY3VycmVudFRpbWU6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKGVsYXBzZWQgLyBkdXJhdGlvbiwgMSk7XG4gICAgY29uc3QgZWFzZWQgPSBlYXNlSW5PdXRDdWJpYyhwcm9ncmVzcyk7XG4gICAgY29uc3QgbmV4dFBvc2l0aW9uID0gc3RhcnQgKyAoZGVzdGluYXRpb24gLSBzdGFydCkgKiBlYXNlZDtcblxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogbmV4dFBvc2l0aW9uLCBiZWhhdmlvcjogXCJhdXRvXCIgfSk7XG5cbiAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufTtcblxuXG4iLAogICAgIid1c2UgY2xpZW50JztcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSBcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvbi5qc1wiO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNOS43OCAxOC42NWwuMjgtNC4yMyA3LjY4LTYuOTJjLjM0LS4zMS0uMDctLjQ2LS41Mi0uMTlMNy43NCAxMy4zIDMuNjQgMTJjLS44OC0uMjUtLjg5LS44Ni4yLTEuM2wxNS45Ny02LjE2Yy43My0uMzMgMS40My4xOCAxLjE1IDEuM2wtMi43MiAxMi44MWMtLjE5LjkxLS43NCAxLjEzLTEuNS43MUwxMi42IDE2LjNsLTEuOTkgMS45M2MtLjIzLjIzLS40Mi40Mi0uODMuNDJ6XCJcbn0pLCAnVGVsZWdyYW0nKTsiCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBLElBQU0saUJBQWlCLENBQUMsTUFDdEIsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJO0FBT25ELElBQU0sd0JBQXdCLENBQ25DLFNBQ0EsVUFBK0IsQ0FBQyxNQUM3QjtBQUFBLEVBQ0gsSUFBSSxPQUFPLFdBQVcsYUFBYTtBQUFBLElBQ2pDO0FBQUEsRUFDRjtBQUFBLEVBRUEsUUFBUSxXQUFXLEtBQUssU0FBUyxNQUFNO0FBQUEsRUFFdkMsTUFBTSxRQUFRLE9BQU87QUFBQSxFQUNyQixNQUFNLE9BQU8sUUFBUSxzQkFBc0I7QUFBQSxFQUMzQyxNQUFNLGNBQWMsS0FBSyxJQUN2QixHQUNBLEtBQUssSUFDSCxLQUFLLE1BQU0sUUFBUSxRQUNuQixTQUFTLGdCQUFnQixlQUFlLE9BQU8sV0FDakQsQ0FDRjtBQUFBLEVBRUEsSUFBSSxZQUFZLEdBQUc7QUFBQSxJQUNqQixPQUFPLFNBQVMsRUFBRSxLQUFLLGFBQWEsVUFBVSxPQUFPLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sWUFBWSxZQUFZLElBQUk7QUFBQSxFQUVsQyxNQUFNLFVBQVUsQ0FBQyxnQkFBd0I7QUFBQSxJQUN2QyxNQUFNLFVBQVUsY0FBYztBQUFBLElBQzlCLE1BQU0sV0FBVyxLQUFLLElBQUksVUFBVSxVQUFVLENBQUM7QUFBQSxJQUMvQyxNQUFNLFFBQVEsZUFBZSxRQUFRO0FBQUEsSUFDckMsTUFBTSxlQUFlLFNBQVMsY0FBYyxTQUFTO0FBQUEsSUFFckQsT0FBTyxTQUFTLEVBQUUsS0FBSyxjQUFjLFVBQVUsT0FBTyxDQUFDO0FBQUEsSUFFdkQsSUFBSSxXQUFXLEdBQUc7QUFBQSxNQUNoQixPQUFPLHNCQUFzQixPQUFPO0FBQUEsSUFDdEM7QUFBQTtBQUFBLEVBR0YsT0FBTyxzQkFBc0IsT0FBTztBQUFBOzs7QUM5Q3RDO0FBRUE7QUFKQTtBQUtBLElBQWUsaURBQTJCLHVCQUFLLFFBQVE7QUFBQSxFQUNyRCxHQUFHO0FBQ0wsQ0FBQyxHQUFHLFVBQVU7IiwKICAiZGVidWdJZCI6ICI1RDc4Nzc3NEZFMjEyNTY3NjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==
