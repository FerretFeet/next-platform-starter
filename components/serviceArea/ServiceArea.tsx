import React, { ReactElement } from "react";
import styles from "./ServiceArea.module.css";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ServiceArea({
  serviceAreas,
  CTAModule,
}: {
  serviceAreas: Array<string>;
  CTAModule: () => ReactElement;
}) {
  return (
    <div className={styles.hideOverflow}>
      <div className={`${styles.stylingContainer}`}>
        <section className={styles.container}>
          {/* <Image
height={240}
width={480}
height={240} src={stateImg.imgLink} alt={stateImg.imgAltText} className={styles.stateImg} /> */}
          <div className={styles.titleStyler}>
            <h2 className={styles.title}>Service Areas</h2>
          </div>

          <ul className={styles.list}>
            {serviceAreas.map((area, idx) => (
              <li
                className={styles.serviceAreaItem}
                key={idx}
              >
                <Image
                  height={240}
                  width={380}
                  src="/imgs/icons/mapPin.webp"
                  alt=""
                  className={styles.areaIcon}
                />
                <span>{area}</span>
              </li>
            ))}
            <div className={styles.ctaModule}>
              <CTAModule />
            </div>
          </ul>
        </section>
      </div>
    </div>
  );
}
