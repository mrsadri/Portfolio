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

type PrimaryButtonProps = ButtonProps<"button", LinkLikeProps>;

const PrimaryButton = forwardRef<ElementRef<typeof Button>, PrimaryButtonProps>(function PrimaryButton(
  { variant: _variant, ...props },
  ref,
) {
  return <Button ref={ref} variant="contained" {...props} />;
});

export default PrimaryButton;


