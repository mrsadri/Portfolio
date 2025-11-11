import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSiteName, normaliseOpenGraphImages, resolveCanonicalUrl, resolveRobotsContent, toStructuredDataArray } from "./utils";
import type { PageMetadata } from "./types";

type SeoProps = PageMetadata;

const Seo = ({
  title,
  description,
  canonicalPath,
  openGraph,
  structuredData,
  robots,
  noindex,
  children,
}: SeoProps) => {
  const location = useLocation();

  const canonicalUrl = resolveCanonicalUrl(canonicalPath ?? `${location.pathname}${location.search}`);
  const ogType = openGraph?.type ?? "website";
  const ogImages = normaliseOpenGraphImages({ openGraph });
  const jsonLd = toStructuredDataArray(structuredData);
  const robotsContent = resolveRobotsContent(robots, Boolean(noindex));

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:site_name" content={getSiteName()} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />

      {ogImages.map((image, index) => (
        <meta key={`${image.url}-${index}`} property="og:image" content={image.url} />
      ))}
      {ogImages.map((image, index) =>
        image.alt ? (
          <meta key={`${image.url}-alt-${index}`} property="og:image:alt" content={image.alt} />
        ) : null,
      )}
      {ogImages.map((image, index) =>
        image.width ? (
          <meta key={`${image.url}-width-${index}`} property="og:image:width" content={String(image.width)} />
        ) : null,
      )}
      {ogImages.map((image, index) =>
        image.height ? (
          <meta key={`${image.url}-height-${index}`} property="og:image:height" content={String(image.height)} />
        ) : null,
      )}
      {ogImages.map((image, index) =>
        image.type ? (
          <meta key={`${image.url}-type-${index}`} property="og:image:type" content={image.type} />
        ) : null,
      )}

      <meta name="twitter:card" content={ogImages.length > 0 ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImages[0] ? <meta name="twitter:image" content={ogImages[0].url} /> : null}

      <link rel="canonical" href={canonicalUrl} />

      <meta name="robots" content={robotsContent} />

      {jsonLd.map((entry) => {
        const json = JSON.stringify(entry);
        return <script key={json} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
      })}

      {children}
    </Helmet>
  );
};

export default Seo;


