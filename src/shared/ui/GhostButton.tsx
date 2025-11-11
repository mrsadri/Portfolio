import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { forwardRef, type ElementRef } from "react";
import type { LinkProps } from "react-router-dom";

type LinkLikeProps = {
  to?: LinkProps["to"];
  href?: string;
  target?: string;
  rel?: string;
};

type GhostButtonProps = ButtonProps<"button", LinkLikeProps>;

const GhostButton = forwardRef<ElementRef<typeof Button>, GhostButtonProps>(function GhostButton(
  { variant, ...props },
  ref,
) {
  return <Button ref={ref} variant={variant ?? "outlined"} {...props} />;
});

export default GhostButton;


