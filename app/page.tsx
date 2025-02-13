import Hero from "components/hero/Hero";
import ServiceArea from "components/serviceArea/ServiceArea";
import ServiceCards from "components/serviceCards/ServiceCards";
import SimpleIHP from "components/simpleIHP/SimpleIHP";
// import Testimonials from "components/testimonials/Testimonials";
import ValueProps from "components/valueProps/ValueProps";
import React from "react";

import heroTxt from "data/homeHeroTxt.json";
import valuePropData from "data/valuePropositions.json";
import serviceCardData from "data/serviceCards.json";
import aboutUsTxt from "data/aboutUsTxt.json";
import serviceAreas from "data/serviceAreas.json";
// import testimonialData from "data/testimonials.json";

// import styles from "./page.module.css";
import { CTAModule } from "components/CTAModule";
import FormConstructor from "components/formConstructor/FormConstructor";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresh Greens Landscaping",
  description:
    "Your trusted local lawn care company in Central Arkansas offering full lawn maintenance: lawn mowing, trimming, edging, and cleanup. Get same day lawn mowing and a free quote today!",
};

export default function Page() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",

      "@type": "WebPage",
      name: "Fresh Greens Landscaping",
      description:
        "Your trusted local lawn care company in Central Arkansas offering full lawn maintenance: lawn mowing, trimming, edging, and cleanup. Get same day lawn mowing and a free quote today!",
      isPartOf: {
        "@type": "WebSite", // Link to the WebSite node
      },
      about: {
        "@type": "Organization", // Link to the Organization node
      },
      mainEntity: {
        "@type": "LocalBusiness",
        name: "Fresh Greens Landscaping LLC",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ward",
          addressRegion: "AR",
          postalCode: "72176",
          addressCountry: "US",
        },
        telephone: "+15015103469",
        url: "https://freshgreenslandscaping.com",
        serviceArea: "Ward and surrounding areas",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Lawn Care Services",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Service",
                name: "Lawn Mowing",
                description:
                  "Get a perfectly manicured lawn with our professional mowing service. We'll give your yard a precise cut and crisp edges, making it the envy of the neighborhood. Let us help you create and maintain a fresh and green lawn.",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  minPrice: "45",
                  unitText: "per visit",
                },
                potentialAction: {
                  "@type": "Action",
                  name: "Get a Free Quote",
                  target: "https://www.yourwebsite.com/#QuoteForm",
                  method: "POST",
                },
                image:
                  "https://www.freshgreenslandscaping/imgs/photos/lawnMowing.webp",
                url: "https://www.freshgreenslandscaping/services", // Add service-specific URL
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Service",
                name: "Pet Waste Cleanup",
                description:
                  "Tired of stepping in surprises? We'll keep your yard clean and safe for you and your family with our regular pet waste removal service. Say goodbye to brown spots and hello to a pristine lawn.",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  minPrice: "22",
                  unitText: "per visit",
                },
                potentialAction: {
                  "@type": "Action",
                  name: "Get a Free Quote",
                  target: "https://www.yourwebsite.com/#QuoteForm",
                  method: "POST",
                },
                image:
                  "https://www.freshgreenslandscaping/imgs/photos/petWaste.webp",
                url: "https://www.freshgreenslandscaping/services",
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Service",
                name: "Hedge Trimming & Shaping",
                description:
                  "Keep your hedges and ornamental trees looking their best with our expert trimming and shaping services. We'll maintain their health and beauty, enhancing your curb appeal.",
                potentialAction: {
                  "@type": "Action",
                  name: "Get a Free Quote",
                  target: "https://www.yourwebsite.com/#QuoteForm",
                  method: "POST",
                },
                image:
                  "https://www.freshgreenslandscaping/imgs/photos/hedgetrimming.webp",
                url: "https://www.freshgreenslandscaping/services",
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Service",
                name: "Mulch Installation",
                description:
                  "Enhance your landscape and protect your plants with our mulch installation service. Mulch helps control weeds, retain moisture, and regulate soil temperature. We'll handle the heavy lifting, so you can enjoy a beautiful, healthy garden.",
                potentialAction: {
                  "@type": "Action",
                  name: "Get a Free Quote",
                  target: "https://www.yourwebsite.com/#QuoteForm",
                  method: "POST",
                },
                image:
                  "https://www.freshgreenslandscaping/imgs/photos/mulch.webp",
                url: "https://www.freshgreenslandscaping/mulch-installation",
              },
            },
            {
              "@type": "ListItem",
              position: 5,
              item: {
                "@type": "Service",
                name: "Leaf Removal",
                description:
                  "Don't let fallen leaves smother your lawn! Our leaf removal service will keep your grass healthy and vibrant. We'll mulch or collect and remove leaves, leaving your yard clean and ready for any season.",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  minPrice: "45",
                  unitText: "per visit",
                },
                potentialAction: {
                  "@type": "Action",
                  name: "Get a Free Quote",
                  target: "https://www.yourwebsite.com/#QuoteForm",
                  method: "POST",
                },
                image:
                  "https://www.freshgreenslandscaping/imgs/photos/leaves.webp", // Make sure this path is correct
                url: "https://www.freshgreenslandscaping/leaf-removal",
              },
            },
            {
              "@type": "ListItem",
              position: 6,
              item: {
                "@type": "Service",
                name: "Flower Bed Maintenance",
                description:
                  "Give your flower beds the attention they deserve. Our delicate flower bed maintenance service includes weeding, pruning, and other essential care to keep your flowers blooming beautifully all season long.",
                potentialAction: {
                  "@type": "Action",
                  name: "Get a Free Quote",
                  target: "https://www.yourwebsite.com/#QuoteForm",
                  method: "POST",
                },
                image:
                  "https://www.freshgreenslandscaping/imgs/photos/flowerbed.webp",
                url: "https://www.freshgreenslandscaping/flower-bed-maintenance",
              },
            },
          ],
        },
      },
    },
  ];
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Hero
        h1text={heroTxt.h1text}
        description={heroTxt.description}
        CTAModule={CTAModule}
      />
      <ValueProps cardInfoArr={valuePropData} />
      <ServiceArea
        serviceAreas={serviceAreas}
        CTAModule={CTAModule}
      />
      <ServiceCards
        cardInfoArr={serviceCardData}
        CTAModule={CTAModule}
      />
      {/* <div className={styles.testimonialGradient}>
        <Testimonials cardInfoArr={testimonialData} />
      </div> */}
      <FormConstructor />
      <SimpleIHP
        imgLink={{ imgLink: "/", imgAltText: "a photo" }}
        sectionTitle="About Us"
        pText={aboutUsTxt.paragraphText}
      />
    </div>
  );
}
