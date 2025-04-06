import Header from "components/header/Header";
import "../styles/globals.css";
import { DataString } from "data/__interfaces";
import React from "react";

import links from "data/links.json";
import ContactBanner from "components/contactBanner/ContactBanner";
import Footer from "components/footer/Footer";

export const metadata = {
  title: {
    template: "%s | Fresh Greens Landscaping",
    default: "Fresh Greens Landscaping",
  },
};
//@ts-expect-error don't want to type this rn
export default function RootLayout({ children }) {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Fresh Greens Landscaping LLC",
      url: "https://freshgreenslandscaping.com",
      logo: "https://freshgreenslandscaping.com/imgs/icons/logo.webp",
      telephone: "+15015103469",
      email: "brandonw@freshgreenslandscaping.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ward",
        addressRegion: "AR",
        postalCode: "72176",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.facebook.com/61571059823543",
        "https://nextdoor.com/pages/fresh-greens-landscaping-ward-ar/",
      ],
    },
    {
      "@type": "Website",
      name: "Fresh Greens Landscaping",
      url: "https://freshgreenslandscaping.com",
    },
  ];

  const quoteFormLink: DataString = {
    key: "Get An Estimate",
    value: links["Get An Estimate"],
  };
  const contactLink: DataString = {
    key: "Contact Us",
    value: links["Contact Us"],
  };
  const contactPhone: DataString = { key: "Phone", value: links.Phone };
  return (
    <html
      lang="en"
      data-theme="lofi"
    >
      <head>
        {/* <title>Fresh Greens Landscaping</title>

        <meta
          name="description"
          content="Your trusted local lawn care company in Central Arkansas offering full lawn maintenance: lawn mowing, trimming, edging, and cleanup. Get same day lawn mowing and a free quote today!"
        /> */}

        <link
          rel="icon"
          href="/favicon.svg"
          sizes="any"
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="iB1d8xD49yUIkkwYyN/d8g"
          async
        ></script>
        <meta charSet="UTF-8" />
      </head>
      <body className="">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <div className="">
          <div className="">
            {/* <Header /> */}
            <ContactBanner />
            <Header
              quoteFormLink={quoteFormLink}
              contactLink={contactLink}
              contactPhone={contactPhone}
              logoPath="/imgs/icons/logo.webp"
              navLinks={links}
              excludedNavLinkKeys={["Get An Estimate", "Contact Us", "Phone"]}
            />
            <div className="">{children}</div>
            <Footer
              contactLink={contactLink}
              contactPhone={contactPhone}
              logoPath="/imgs/icons/logo.webp"
              navLinks={links}
              excludedNavLinkKeys={["Get An Estimate", "Contact Us", "Phone"]}
            />
          </div>
        </div>
      </body>
    </html>
  );
}
