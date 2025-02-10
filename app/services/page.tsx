import Hero from "components/serviceHero/Hero";
import React from "react";

import heroTxt from "data/serviceHeroTxt.json"
import LinkButton from "components/link_button/LinkButton";
import { DataString } from "data/__interfaces";
import links from "data/links.json"
import servicesData from "data/servicePageData.json"
import FullsizeCard1 from "components/fullsizeCard/FullsizeCard1";
import FullsizeCard2 from "components/fullsizeCard/FullsizeCard2";

export default function Page() {

    const quoteFormLink: DataString = {key: "Get An Estimate", value: links["Get An Estimate"]};

    
  
    const MyCTAModule = () => (
      // Used in Hero
      <LinkButton link={Object.values(quoteFormLink)[1]} text={Object.values(quoteFormLink)[0]}/>
        
    );

    
    return (
        <div className="">
            <Hero h1text={heroTxt.h1text} description={heroTxt.description} CTAModule={MyCTAModule}/>
            <div className="">
                <FullsizeCard1 title={servicesData[0].title} description={servicesData[0].description} iconLink={servicesData[0].iconLink} />
                <FullsizeCard2 title={servicesData[1].title} description={servicesData[1].description} iconLink={servicesData[1].iconLink} />

            </div>
            <div className="">Hello World</div>            
        </div>

    )
}