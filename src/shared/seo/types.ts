import type { ReactNode } from "react";

export type StructuredData = Record<string, unknown> | readonly Record<string, unknown>[];

export type OpenGraphImage = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: string;
};

export type OpenGraphMeta = {
  type?: "website" | "article" | "profile";
  images?: ReadonlyArray<OpenGraphImage>;
};

export type RobotsDirectives = {
  index?: boolean;
  follow?: boolean;
  custom?: string;
};

export type PageMetadata = {
  title: string;
  description: string;
  canonicalPath?: string;
  openGraph?: OpenGraphMeta & {
    image?: OpenGraphImage | ReadonlyArray<OpenGraphImage>;
  };
  structuredData?: StructuredData;
  robots?: RobotsDirectives;
  noindex?: boolean;
  children?: ReactNode;
};


