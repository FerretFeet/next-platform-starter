import ImgNText from "data/__interfaces";
import React from "react";
import styles from "./SimpleIconCard.module.css";
import Image from "next/image";

export default function SimpleIconCard({
  title,
  description,
  iconLink,
}: {
  title: string;
  description: string;
  iconLink: ImgNText;
}) {
  return (
    <div className={styles.simpleIconCard}>
      <div className={styles.iconContainer}>
        {/* svg or img */}
        <Image
          height={240}
          width={480}
          src={iconLink.imgLink}
          alt={iconLink.imgAltText}
          className={styles.iconImg}
        />
      </div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
