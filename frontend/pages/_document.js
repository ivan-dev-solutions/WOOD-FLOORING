import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // JSON-LD Schema.org for Google Local Pack
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://as-flooring.com/#business",
    name: "A's Flooring Inc.",
    image: "https://as-flooring.com/logo.jpg",
    url: "https://as-flooring.com",
    telephone: "+1-619-207-6864",
    email: "a.flooringg@gmail.com",
    priceRange: "$$",
    description:
      "Licensed flooring contractor in San Diego specializing in hardwood, vinyl plank, laminate, stairs and floor preparation. CSLB License #1151690.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1840 Jason St",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92154",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.5749,
      longitude: -117.0697,
    },
    areaServed: [
      { "@type": "City", name: "San Diego" },
      { "@type": "City", name: "Chula Vista" },
      { "@type": "City", name: "National City" },
      { "@type": "City", name: "Imperial Beach" },
      { "@type": "City", name: "La Mesa" },
      { "@type": "City", name: "El Cajon" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61570835871480",
      "https://www.instagram.com/asflooring_",
      "https://www.tiktok.com/@asflooring2",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "CSLB C-15 Flooring and Floor Covering License",
      identifier: "1151690",
      recognizedBy: {
        "@type": "Organization",
        name: "Contractors State License Board (CSLB)",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
    },
  };

  return (
    <Html lang="en">
      <Head>
        {/* Favicons - multi-size for best display across platforms */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        <meta name="theme-color" content="#f59e0b" />

        {/* Primary SEO meta tags */}
        <meta
          name="description"
          content="A's Flooring Inc. — Licensed C-15 flooring contractor in San Diego. Hardwood, vinyl plank, laminate, stairs and full installation. Free in-home estimates. CSLB #1151690."
        />
        <meta
          name="keywords"
          content="flooring San Diego, hardwood floor installation, vinyl plank flooring, laminate flooring, LVP installation, floor contractor Chula Vista, A's Flooring, licensed flooring contractor"
        />
        <meta name="author" content="A's Flooring Inc." />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Diego" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="A's Flooring Inc." />
        <meta
          property="og:title"
          content="A's Flooring Inc. | Hardwood & Vinyl Flooring San Diego"
        />
        <meta
          property="og:description"
          content="Licensed C-15 flooring contractor serving San Diego. Hardwood, vinyl, laminate. Free estimates. CSLB #1151690."
        />
        <meta property="og:url" content="https://as-flooring.com" />
        <meta property="og:image" content="https://as-flooring.com/project27.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="A's Flooring Inc. | Flooring Contractor San Diego"
        />
        <meta
          name="twitter:description"
          content="Licensed flooring installation in San Diego. Free estimates. CSLB #1151690."
        />
        <meta name="twitter:image" content="https://as-flooring.com/project27.jpeg" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}