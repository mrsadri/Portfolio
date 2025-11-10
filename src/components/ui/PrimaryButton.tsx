import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { forwardRef } from "react";

const PrimaryButton = forwardRef<any, ButtonProps<any>>(function PrimaryButton(
  { variant: _variant, ...props },
  ref,
) {
  return <Button ref={ref} variant="contained" {...props} />;
});

export default PrimaryButton;


