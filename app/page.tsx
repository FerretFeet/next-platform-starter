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
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
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
