import Header from "components/header/Header";
import "../../styles/globals.css";
import { DataString } from "data/__interfaces";
import React from "react";

import links from "data/links.json";
import ContactBanner from "components/contactBanner/ContactBanner";

// file exists just to edit title and data

export const metadata = {
  title: {
    template: "%s | Fresh Greens Landscaping",
    default: "Fresh Greens Landscaping",
  },
};
//@ts-expect-error don't want to type this rn
export default function RootLayout({ children }) {
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
        <link
          rel="icon"
          href="/favicon.svg"
          sizes="any"
        />
        <meta charSet="UTF-8" />
      </head>
      <body className="">
        <div className="">
          <div className="">
            {/* <Header /> */}
            <ContactBanner />
            <Header
              quoteFormLink={quoteFormLink}
              contactLink={contactLink}
              contactPhone={contactPhone}
              logoPath="/imgs/icons/logo.png"
              navLinks={links}
              excludedNavLinkKeys={["Get An Estimate", "Contact Us", "Phone"]}
            />
            <div className="">{children}</div>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
