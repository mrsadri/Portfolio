import type { ReactNode } from "react";
import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { resolveSiteUrl } from "../utils/site";

type JsonLd = Record<string, unknown> | readonly Record<string, unknown>[];

type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  openGraph?: {
    type?: "website" | "article" | "profile";
    image?: {
      url: string;
      alt?: string;
    };
  };
  structuredData?: JsonLd;
  noindex?: boolean;
  children?: ReactNode;
};

const SITE_NAME = "Masih Sadri — Senior Product Designer";

const normalisePath = (path: string) => {
  if (!path) {
    return "";
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return path.startsWith("/") ? path : `/${path}`;
};

const toJsonLd = (data?: JsonLd) => {
  if (!data) {
    return undefined;
  }

  return Array.isArray(data) ? data : [data];
};

const Seo = ({
  title,
  description,
  canonicalPath,
  openGraph,
  structuredData,
  noindex,
  children,
}: SeoProps) => {
  const location = useLocation();
  const siteUrl = useMemo(() => resolveSiteUrl().replace(/\/$/, ""), []);

  const path = canonicalPath ?? location.pathname + location.search;
  const canonicalUrl = `${siteUrl}${normalisePath(path)}`;

  const ogType = openGraph?.type ?? "website";
  const ogImageUrl = openGraph?.image?.url;
  const ogImageAlt = openGraph?.image?.alt;

  const jsonLd = toJsonLd(structuredData);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />

      {ogImageUrl ? (
        <>
          <meta property="og:image" content={ogImageUrl} />
          {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
        </>
      ) : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImageUrl ? <meta name="twitter:image" content={ogImageUrl} /> : null}

      <link rel="canonical" href={canonicalUrl} />

      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {jsonLd?.map((entry, index) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      {children}
    </Helmet>
  );
};

export default Seo;


