import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

const GhostButton = forwardRef<any, ButtonProps<any>>(function GhostButton(
  { variant, ...props },
  ref,
) {
  return <Button ref={ref} variant={variant ?? "outlined"} {...props} />;
});

export default GhostButton;


