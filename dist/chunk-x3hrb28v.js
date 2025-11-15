import {
  Box_default,
  Stack_default,
  Typography_default,
  __toESM,
  require_jsx_dev_runtime
} from "./chunk-ygqezw1f.js";

// src/shared/components/SectionHeader.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  icon,
  align = "center",
  variant = "full"
}) => {
  if (variant === "compact") {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
      direction: "row",
      spacing: 2,
      alignItems: "center",
      children: [
        icon && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Box_default, {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 2,
            border: "1.5px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)"
          },
          children: icon
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
          variant: "h3",
          sx: { fontWeight: 600 },
          children: title
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
    spacing: 1.5,
    alignItems: align === "center" ? "center" : "flex-start",
    textAlign: align,
    children: [
      (icon || eyebrow) && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Stack_default, {
        direction: "row",
        spacing: 1,
        alignItems: "center",
        children: [
          icon,
          eyebrow && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
            variant: "tag",
            color: "brand.secondary",
            children: eyebrow
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
        variant: "h2",
        children: title
      }, undefined, false, undefined, this),
      subtitle && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Typography_default, {
        variant: "subtitle1",
        color: "text.secondary",
        sx: {
          maxWidth: align === "center" ? 720 : 640,
          lineHeight: 1.6
        },
        children: subtitle
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var SectionHeader_default = SectionHeader;

export { SectionHeader_default };

//# debugId=ACF95CA63392C37F64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgImltcG9ydCB7IEJveCwgU3RhY2ssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBTZWN0aW9uSGVhZGVyUHJvcHMgPSB7XG4gIC8qKiBPcHRpb25hbCBleWVicm93IHRleHQgZGlzcGxheWVkIGFib3ZlIHRoZSB0aXRsZSAqL1xuICBleWVicm93Pzogc3RyaW5nO1xuICAvKiogTWFpbiB0aXRsZSB0ZXh0ICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKiBPcHRpb25hbCBzdWJ0aXRsZSB0ZXh0IGRpc3BsYXllZCBiZWxvdyB0aGUgdGl0bGUgKi9cbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIC8qKiBPcHRpb25hbCBpY29uIGRpc3BsYXllZCBhbG9uZ3NpZGUgdGhlIGhlYWRlciAqL1xuICBpY29uPzogUmVhY3ROb2RlO1xuICAvKiogVGV4dCBhbGlnbm1lbnQgLSBkZWZhdWx0cyB0byBcImNlbnRlclwiICovXG4gIGFsaWduPzogXCJjZW50ZXJcIiB8IFwibGVmdFwiO1xuICAvKiogVmFyaWFudCBzdHlsZSAtIFwiZnVsbFwiIHN1cHBvcnRzIGV5ZWJyb3cvc3VidGl0bGUsIFwiY29tcGFjdFwiIGlzIGljb24rdGl0bGUgb25seSAqL1xuICB2YXJpYW50PzogXCJmdWxsXCIgfCBcImNvbXBhY3RcIjtcbn07XG5cbi8qKlxuICogVW5pZmllZCBTZWN0aW9uSGVhZGVyIGNvbXBvbmVudCB0aGF0IHN1cHBvcnRzIGJvdGggZnVsbC1mZWF0dXJlZCBhbmQgY29tcGFjdCBsYXlvdXRzLlxuICogXG4gKiAtIEZ1bGwgdmFyaWFudDogU3VwcG9ydHMgZXllYnJvdywgdGl0bGUsIHN1YnRpdGxlLCBpY29uLCBhbmQgYWxpZ25tZW50ICh1c2VkIGluIG15LXN0b3J5KVxuICogLSBDb21wYWN0IHZhcmlhbnQ6IFNpbXBsZSBpY29uIGJveCArIHRpdGxlIGxheW91dCAodXNlZCBpbiByZXN1bWUpXG4gKi9cbmNvbnN0IFNlY3Rpb25IZWFkZXIgPSAoe1xuICBleWVicm93LFxuICB0aXRsZSxcbiAgc3VidGl0bGUsXG4gIGljb24sXG4gIGFsaWduID0gXCJjZW50ZXJcIixcbiAgdmFyaWFudCA9IFwiZnVsbFwiLFxufTogU2VjdGlvbkhlYWRlclByb3BzKSA9PiB7XG4gIC8vIENvbXBhY3QgdmFyaWFudDogaWNvbiBib3ggKyB0aXRsZSAocmVzdW1lIHN0eWxlKVxuICBpZiAodmFyaWFudCA9PT0gXCJjb21wYWN0XCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IDU2LFxuICAgICAgICAgICAgICBoZWlnaHQ6IDU2LFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxLjVweCBzb2xpZFwiLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJkaXZpZGVyXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgc3g9e3sgZm9udFdlaWdodDogNjAwIH19PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TdGFjaz5cbiAgICApO1xuICB9XG5cbiAgLy8gRnVsbCB2YXJpYW50OiBzdXBwb3J0cyBhbGwgZmVhdHVyZXMgKG15LXN0b3J5IHN0eWxlKVxuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgc3BhY2luZz17MS41fVxuICAgICAgYWxpZ25JdGVtcz17YWxpZ24gPT09IFwiY2VudGVyXCIgPyBcImNlbnRlclwiIDogXCJmbGV4LXN0YXJ0XCJ9XG4gICAgICB0ZXh0QWxpZ249e2FsaWdufVxuICAgID5cbiAgICAgIHsoaWNvbiB8fCBleWVicm93KSAmJiAoXG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAge2ljb259XG4gICAgICAgICAge2V5ZWJyb3cgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInRhZ1wiIGNvbG9yPVwiYnJhbmQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIHtleWVicm93fVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICApfVxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3RpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgIHtzdWJ0aXRsZSAmJiAoXG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIG1heFdpZHRoOiBhbGlnbiA9PT0gXCJjZW50ZXJcIiA/IDcyMCA6IDY0MCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICApfVxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGVyO1xuXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBd0JBLElBQU0sZ0JBQWdCO0FBQUEsRUFDcEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxNQUNjO0FBQUEsRUFFeEIsSUFBSSxZQUFZLFdBQVc7QUFBQSxJQUN6Qix1QkFDRSx1QkFzQkUsZUF0QkY7QUFBQSxNQUFPLFdBQVU7QUFBQSxNQUFNLFNBQVM7QUFBQSxNQUFHLFlBQVc7QUFBQSxNQUE5QyxVQXNCRTtBQUFBLFFBckJDLHdCQUNDLHVCQWVFLGFBZkY7QUFBQSxVQUNFLElBQUk7QUFBQSxZQUNGLFNBQVM7QUFBQSxZQUNULFlBQVk7QUFBQSxZQUNaLGdCQUFnQjtBQUFBLFlBQ2hCLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLGNBQWM7QUFBQSxZQUNkLFFBQVE7QUFBQSxZQUNSLGFBQWE7QUFBQSxZQUNiLGlCQUFpQjtBQUFBLFlBQ2pCLFdBQVc7QUFBQSxVQUNiO0FBQUEsVUFaRixVQWNHO0FBQUEsV0FkSCxpQ0FlRTtBQUFBLHdCQUVKLHVCQUVFLG9CQUZGO0FBQUEsVUFBWSxTQUFRO0FBQUEsVUFBSyxJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsVUFBL0MsVUFDRztBQUFBLFdBREgsaUNBRUU7QUFBQTtBQUFBLE9BckJKLGdDQXNCRTtBQUFBLEVBRU47QUFBQSxFQUdBLHVCQUNFLHVCQTRCRSxlQTVCRjtBQUFBLElBQ0UsU0FBUztBQUFBLElBQ1QsWUFBWSxVQUFVLFdBQVcsV0FBVztBQUFBLElBQzVDLFdBQVc7QUFBQSxJQUhiLFVBNEJFO0FBQUEsT0F2QkUsUUFBUSw0QkFDUix1QkFPRSxlQVBGO0FBQUEsUUFBTyxXQUFVO0FBQUEsUUFBTSxTQUFTO0FBQUEsUUFBRyxZQUFXO0FBQUEsUUFBOUMsVUFPRTtBQUFBLFVBTkM7QUFBQSxVQUNBLDJCQUNDLHVCQUVFLG9CQUZGO0FBQUEsWUFBWSxTQUFRO0FBQUEsWUFBTSxPQUFNO0FBQUEsWUFBaEMsVUFDRztBQUFBLGFBREgsaUNBRUU7QUFBQTtBQUFBLFNBTE4sZ0NBT0U7QUFBQSxzQkFFSix1QkFBa0Msb0JBQWxDO0FBQUEsUUFBWSxTQUFRO0FBQUEsUUFBcEIsVUFBMEI7QUFBQSxTQUExQixpQ0FBa0M7QUFBQSxNQUNqQyw0QkFDQyx1QkFTRSxvQkFURjtBQUFBLFFBQ0UsU0FBUTtBQUFBLFFBQ1IsT0FBTTtBQUFBLFFBQ04sSUFBSTtBQUFBLFVBQ0YsVUFBVSxVQUFVLFdBQVcsTUFBTTtBQUFBLFVBQ3JDLFlBQVk7QUFBQSxRQUNkO0FBQUEsUUFORixVQVFHO0FBQUEsU0FSSCxpQ0FTRTtBQUFBO0FBQUEsS0ExQk4sZ0NBNEJFO0FBQUE7QUFJTixJQUFlOyIsCiAgImRlYnVnSWQiOiAiQUNGOTVDQTYzMzkyQzM3RjY0NzU2RTIxNjQ3NTZFMjEiLAogICJuYW1lcyI6IFtdCn0=
