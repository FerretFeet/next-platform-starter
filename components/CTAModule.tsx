import { DataString } from "data/__interfaces";
import LinkButton from "./link_button/LinkButton";
import links from "data/links.json";

const quoteFormLink: DataString = {key: "Get An Estimate", value: links["Get An Estimate"]};

export const CTAModule = () => (

      // Used in Hero
      <LinkButton link={Object.values(quoteFormLink)[1]} text={Object.values(quoteFormLink)[0]}/>
        
    );