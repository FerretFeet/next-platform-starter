/* eslint-disable @typescript-eslint/no-unused-vars */
import createLinksAndNav from "components/createLinksandNav/createLinksAndNav";
import LinkButton from "components/link_button/LinkButton";
import { DataString } from "data/__interfaces";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import stylePhoneLink from "components/stylePhoneLink";

export default function Header({
  contactLink,
  contactPhone,
  logoPath,
  navLinks,
  excludedNavLinkKeys,
}: {
  contactLink: DataString;
  contactPhone: DataString;
  logoPath: string;
  navLinks: DataString;
  excludedNavLinkKeys: Array<string>;
}) {
  const styledPhoneLink = stylePhoneLink(Object.values(contactPhone)[1]);

  return (
    <section className={styles.container}>
      <p className={styles.titleBlurb}>
        <span>Fresh Greens Landscaping</span>
        <br></br>
        <br></br>
        <span>Your local lawn care specialist in Central Arkansas</span>
        <br></br>
        <br></br>
        <a href={Object.values(contactPhone)[1]}>
          Call/Text: {styledPhoneLink}
        </a>
        <br></br>
        <br></br>
        <a href={Object.values(contactLink)[1]}>
          Email: BrandonW@FreshGreensLandscaping.com
        </a>
      </p>

      <div className={styles.logoNav}>
        {/* <a href={Object.values(contactPhone)[1]}>
          Call/Text: {styledPhoneLink}
        </a>
        <a href={Object.values(contactLink)[1]}>
          Email: BrandonW@FreshGreensLandscaping.com
        </a> */}
        {/* <Link href={"/"}>
          <Image
            height={240}
            width={480}
            src={logoPath}
            alt="logo"
            className={styles.logo}
          />
        </Link> */}
        {createLinksAndNav(navLinks, excludedNavLinkKeys)}
      </div>
    </section>
  );
}
