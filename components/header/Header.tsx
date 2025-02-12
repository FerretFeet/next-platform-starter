import createLinksAndNav from "components/createLinksAndNav";
import LinkButton from "components/link_button/LinkButton";
import { DataString } from "data/__interfaces";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function Header({
  quoteFormLink,
  contactLink,
  contactPhone,
  logoPath,
  navLinks,
  excludedNavLinkKeys,
}: {
  quoteFormLink: DataString;
  contactLink: DataString;
  contactPhone: DataString;
  logoPath: string;
  navLinks: DataString;
  excludedNavLinkKeys: Array<string>;
}) {
  //   const trimPhoneLink = (phoneLink: string) => {
  //     // Assume given tel:+{11-Digit-Number} && First digit not needed
  //     // Add dashes between phone number section
  //     if (!phoneLink) return ""; // Handle the case where phoneLink is null or undefineds
  //     const slicedPhone = phoneLink.slice(6);

  //     const areaCode = slicedPhone.slice(0, 3);
  //     const prefix = slicedPhone.slice(3, 6);
  //     const lineNumber = slicedPhone.slice(6);

  //     return `${areaCode}-${prefix}-${lineNumber}`;
  //   };

  // check to ensure entries not-null
  //   const quoteFormLinkValues = quoteFormLink && Object.values(quoteFormLink);
  //   const contactLinkValues = contactLink && Object.values(contactLink);
  //   const contactPhoneValues = contactPhone && Object.values(contactPhone);

  return (
    <section className={styles.container}>
      {/* <Link to={Object.values(quoteFormLink)[1]}>
                <button type="button" className={styles.quoteBtn}>{Object.values(quoteFormLink)[0]}</button>
            </Link> */}
      {/* {quoteFormLinkValues && contactLinkValues && contactPhoneValues ? (
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
      ) : (
        <></>
      )} */}

      <div className={styles.logoNav}>
        <Link href={"/"}>
          <img
            src={logoPath}
            alt="logo"
            className={styles.logo}
          />
        </Link>
        {createLinksAndNav(navLinks, excludedNavLinkKeys)}
      </div>
    </section>
  );
}
