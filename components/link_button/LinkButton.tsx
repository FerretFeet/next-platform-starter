import Link from "next/link";
import React from "react";
import styles from "./LinkButton.module.css";

// set width of container to prevent resize when hovered
export default function LinkButton({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <Link href={link}>
      <button className={styles.linkButton}>
        <div>{text}</div>
      </button>
    </Link>
  );
}
