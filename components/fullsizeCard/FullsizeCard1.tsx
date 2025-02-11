import React from "react"
import styles from "./FullsizeCard.module.css"
import ImgNText from "data/__interfaces"

export default function FullsizeCard({title, description, iconLink} : {title: string, description: string, iconLink: ImgNText}) {
    return (
        <div className={`${styles.fullsizeCard} ${styles.gridColumns1}`}>
            <div className={`${styles.textStyler} ${styles.order2}`}>
                <h6 className={styles.title}>{title}</h6>

                <p className={styles.description}>{description}</p>
            </div>
            <div className={`${styles.imgContainer} ${styles.order1}`}>
                {/* svg or img */}
                <img src={iconLink.imgLink} alt={iconLink.imgAltText} className={styles.iconImg} />
            </div>
        </div>
    )
}