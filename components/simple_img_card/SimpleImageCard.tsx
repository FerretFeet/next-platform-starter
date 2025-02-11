import ImgNText from "data/__interfaces";
import React from "react";
import styles from "./SimpleImgCard.module.css";

export default function SimpleImgCard({
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
        <img
          src={iconLink.imgLink}
          alt={iconLink.imgAltText}
          className={styles.iconImg}
        />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
