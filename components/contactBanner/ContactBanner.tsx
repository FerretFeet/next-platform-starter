import LinkButton from "components/link_button/LinkButton";
import { DataString } from "data/__interfaces";
import Link from "next/link";

import links from "data/links.json";
import styles from "./ContactBanner.module.css";

export default function ContactBanner() {
  const quoteFormLink: DataString = {
    key: "Get An Estimate",
    value: links["Get An Estimate"],
  };
  const contactLink: DataString = {
    key: "Contact Us",
    value: links["Contact Us"],
  };
  const contactPhone: DataString = { key: "Phone", value: links.Phone };

  const trimPhoneLink = (phoneLink: string) => {
    // Assume given tel:+{11-Digit-Number} && First digit not needed
    // Add dashes between phone number section
    if (!phoneLink) return ""; // Handle the case where phoneLink is null or undefineds
    const slicedPhone = phoneLink.slice(6);

    const areaCode = slicedPhone.slice(0, 3);
    const prefix = slicedPhone.slice(3, 6);
    const lineNumber = slicedPhone.slice(6);

    return `${areaCode}-${prefix}-${lineNumber}`;
  };

  return (
    <div className={styles.contactBanner}>
      <LinkButton
        link={Object.values(quoteFormLink)[1]}
        text={Object.values(quoteFormLink)[0]}
      />

      <Link
        href={Object.values(contactLink)[1]}
        className={styles.contactLink}
      >
        {Object.values(contactLink)[0]}
      </Link>
      <a href={Object.values(contactPhone)[1]}>
        {trimPhoneLink(Object.values(contactPhone)[1])}
      </a>
    </div>
  );
}
