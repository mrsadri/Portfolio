import type { SxProps, Theme } from "@mui/material";

const append = <TTheme extends Theme>(target: SxProps<TTheme>[], value?: SxProps<TTheme>) => {
  if (!value) {
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => append(target, item));
    return;
  }

  target.push(value);
};

export const mergeSx = <TTheme extends Theme>(
  base: SxProps<TTheme>,
  ...overrides: Array<SxProps<TTheme> | undefined>
): SxProps<TTheme> => {
  const entries: SxProps<TTheme>[] = [];
  append(entries, base);
  overrides.forEach((value) => append(entries, value));

  if (entries.length === 0) {
    return {};
  }

  if (entries.length === 1) {
    return entries[0]!;
  }

  return entries as SxProps<TTheme>;
};


