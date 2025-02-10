import SimpleImgCard from "components/simple_img_card/SimpleImageCard";
import ImgNText from "data/__interfaces";
import React, { ReactElement } from "react";
import styles from "./ServiceCards.module.css"

export interface cardInfo {
    iconLink: ImgNText;
    title: string;
    description: string;
}
export default function ServiceCards({cardInfoArr, CTAModule}: {cardInfoArr: Array<cardInfo>, CTAModule: () => ReactElement}) {
    const parseData = (cardInfoArr: Array<cardInfo>) => {
        const parsedData: Array<cardInfo> = [];
        cardInfoArr.forEach((card) => {
            parsedData.push({iconLink: card.iconLink, title: card.title, description: card.description})
        })
        return parsedData;
    }

    return (
        <div className={`${styles.sectionContainer} tintBg ${styles.parallax}`}>
            <h2 className={styles.title}>Featured Services</h2>
            <p className={`${styles.title} ${styles.quickResizer}`}>Commercial and Residential</p>
            <div className={styles.container}>

                {parseData(cardInfoArr).map((card, idx) => {
                    return (
                        <SimpleImgCard key={idx} title={card.title} description={card.description} iconLink={card.iconLink} />
                    )
                })}
            </div>
            <div className={styles.ctaModule}>
                <CTAModule/>

            </div>
        </div>


    )
}