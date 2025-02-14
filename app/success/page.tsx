import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.card}>
      <div className={styles.checkCont}>
        <i className={styles.checkmark}>✓</i>
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request;
        <br /> we&apos;ll be in touch shortly!
      </p>
      <Link
        className={styles.link}
        href={"/"}
      >
        Return
      </Link>
    </div>
  );
}
