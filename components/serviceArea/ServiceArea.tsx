import ImgNText from "data/__interfaces"
import React, { ReactElement } from "react"
import styles from "./ServiceArea.module.css"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ServiceArea({stateImg, serviceAreas, CTAModule}: {stateImg: ImgNText, serviceAreas: Array<string>, CTAModule: () => ReactElement}) {
    return (
        <div className={styles.hideOverflow}>
            <div className={`${styles.stylingContainer}`}>
                <section className={styles.container}>
                    {/* <img src={stateImg.imgLink} alt={stateImg.imgAltText} className={styles.stateImg} /> */}
                    <div className={styles.titleStyler}>
                        <h2 className={styles.title}>Service Areas</h2> 
                    </div>
                   
                    <ul className={styles.list}>
                        {serviceAreas.map((area, idx) => (
                            <li className={styles.serviceAreaItem} key={idx}>
                                <img src="/imgs/icons/mapPin.png" alt="" className={styles.areaIcon} />
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

    )


}