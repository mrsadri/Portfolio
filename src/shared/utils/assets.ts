import type { ImageResource } from "../../types/content";

const logAssetWarning = (message: string, error: unknown) => {
  if (import.meta.env?.MODE !== "production") {
    console.warn(`[assets] ${message}`, error);
  }
};

const resolveAssetUrl = (moduleUrl: string, assetPath: string) => {
  try {
    return new URL(assetPath, moduleUrl).href;
  } catch (error) {
    logAssetWarning(`Unable to resolve asset at path "${assetPath}"`, error);
    return assetPath;
  }
};

export const createImageResource = (
  moduleUrl: string,
  assetPath: string,
  alt: string,
  dimensions?: Pick<ImageResource, "width" | "height">,
): ImageResource => {
  if (!alt) {
    logAssetWarning(`Missing alt text for asset "${assetPath}".`, null);
  }

  const src = resolveAssetUrl(moduleUrl, assetPath);

  return {
    src,
    alt: alt || "Decorative image",
    ...dimensions,
  };
};


