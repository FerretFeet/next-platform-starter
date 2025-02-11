import SimpleIconCard2 from "components/simple_icon_card_2/SimpleIconCard2";
import ImgNText from "data/__interfaces";
import React from "react";
import styles from "./Testimonials.module.css";

export interface cardInfo {
  iconLink: ImgNText;
  title: string;
  description: string;
}

export default function Testimonials({
  cardInfoArr,
}: {
  cardInfoArr: Array<cardInfo>;
}) {
  const parseData = (cardInfoArr: Array<cardInfo>) => {
    const parsedData: Array<cardInfo> = [];
    cardInfoArr.forEach((card) => {
      parsedData.push({
        iconLink: card.iconLink,
        title: card.title,
        description: card.description,
      });
      // UI currently cant gracefully handle more than 4
      if (parseData.length >= 4) return parseData;
    });
    return parsedData;
  };

  return (
    <div className={styles.container}>
      {parseData(cardInfoArr).map((card, idx) => {
        return (
          <SimpleIconCard2
            key={idx}
            title={card.title}
            description={card.description}
            iconLink={card.iconLink}
          />
        );
      })}
    </div>
  );
}
