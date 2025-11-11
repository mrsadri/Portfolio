import { Chip } from "@mui/material";
import type { ChipProps } from "@mui/material";

const Pill = ({ variant, ...props }: ChipProps) => <Chip variant={variant ?? "filled"} {...props} />;

export default Pill;


