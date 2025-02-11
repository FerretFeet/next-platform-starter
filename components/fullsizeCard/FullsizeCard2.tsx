import React from "react"
import styles from "./FullsizeCard.module.css"
import ImgNText from "data/__interfaces"

export default function FullsizeCard({title, description, iconLink} : {title: string, description: string, iconLink: ImgNText}) {
    return (
        <div className={`${styles.fullsizeCard} ${styles.gridColumns2}`}>
            <div className={styles.imgContainer}>
                {/* svg or img */}
                <img src={iconLink.imgLink} alt={iconLink.imgAltText} className={styles.iconImg} />
            </div>
            <div className={styles.textStyler}>
                <h6 className={styles.title}>{title}</h6>

                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}