/* eslint-disable @typescript-eslint/no-unused-vars */
import createLinksAndNav from "components/createLinksandNav/createLinksAndNav";
import LinkButton from "components/link_button/LinkButton";
import { DataString } from "data/__interfaces";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

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
  return (
    <section className={styles.container}>
      <div className={styles.logoNav}>
        <Link href={"/"}>
          <Image
            height={240}
            width={480}
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
