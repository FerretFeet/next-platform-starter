import Hero from "components/serviceHero/Hero";
import React from "react";

import heroTxt from "data/serviceHeroTxt.json";

import servicesData from "data/servicePageData.json";
import FullsizeCard1 from "components/fullsizeCard/FullsizeCard1";
import FullsizeCard2 from "components/fullsizeCard/FullsizeCard2";
import styles from "./page.module.css";

import testimonialData from "data/testimonials.json";
import Testimonials from "components/testimonials/Testimonials";
import { CTAModule } from "components/CTAModule";

export default function Page() {
  return (
    <div className="">
      <Hero
        h1text={heroTxt.h1text}
        description={heroTxt.description}
        CTAModule={CTAModule}
      />
      <div className={styles.gradient}>
        {servicesData.map((data, idx) => {
          // Alternate between cards, place CTA every so many cards
          if (idx % 2 == 0 && idx % 4 == 2)
            return (
              <div key={idx}>
                <FullsizeCard1
                  key={idx}
                  title={data.title}
                  description={data.description}
                  iconLink={data.iconLink}
                />
                <div className={styles.ctaContainer}>
                  <CTAModule />
                </div>
              </div>
            );
          if (idx % 2 == 0)
            return (
              <FullsizeCard1
                key={idx}
                title={data.title}
                description={data.description}
                iconLink={data.iconLink}
              />
            );
          return (
            <FullsizeCard2
              key={idx}
              title={data.title}
              description={data.description}
              iconLink={data.iconLink}
            />
          );
        })}
      </div>
      {/* PUT QUOTE FORM HERE */}

      {/* <h2 className={styles.quoteformHeader}>Get Your Free Quote</h2> */}
      {/* <FormConstructor /> */}

      <h2 className={styles.testimonialHeader}>Testimonials</h2>
      <Testimonials cardInfoArr={testimonialData} />
      <div className={styles.ctaContainer2}>
        <CTAModule />
      </div>
    </div>
  );
}
