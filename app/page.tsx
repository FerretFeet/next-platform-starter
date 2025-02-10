import Hero from "components/hero/Hero";
import LinkButton from "components/link_button/LinkButton";
import ServiceArea from "components/serviceArea/ServiceArea";
import ServiceCards from "components/serviceCards/ServiceCards";
import SimpleIHP from "components/simpleIHP/SimpleIHP";
import Testimonials from "components/testimonials/Testimonials";
import ValueProps from "components/valueProps/ValueProps";
import { DataString } from "data/__interfaces";
import React from "react";

import links from "data/links.json";
import heroTxt from "data/homeHeroTxt.json";
import valuePropData from "data/valuePropositions.json";
import serviceCardData from "data/serviceCards.json";
import aboutUsTxt from "data/aboutUsTxt.json";
import serviceAreas from "data/serviceAreas.json";
import testimonialData from "data/testimonials.json"







export default function Page() {
    const quoteFormLink: DataString = {key: "Get An Estimate", value: links["Get An Estimate"]};

  
  
    const MyCTAModule = () => (
      // Used in Hero
      <LinkButton link={Object.values(quoteFormLink)[1]} text={Object.values(quoteFormLink)[0]}/>
        
    );
  
    
  
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
          <Hero h1text={heroTxt.h1text} description={heroTxt.description} CTAModule={MyCTAModule}/>
          <ValueProps cardInfoArr={valuePropData}/>
          <ServiceArea stateImg={{imgLink: 'public/imgs/icons/map1.png', imgAltText: 'The State of Arkansas'}} serviceAreas={serviceAreas} CTAModule={MyCTAModule}/>
          <ServiceCards cardInfoArr={serviceCardData} CTAModule={MyCTAModule}/>
          <Testimonials cardInfoArr={testimonialData} />
          <SimpleIHP imgLink={{imgLink: '/', imgAltText: 'a photo'}} sectionTitle= 'About Us' pText={aboutUsTxt.paragraphText} />
          {/* <FormConstructor /> */}
      </div>
    );
}

