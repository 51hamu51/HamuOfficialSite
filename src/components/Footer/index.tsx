import styles from "./footer.module.css";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footerArea}>
      <h1 className={styles.footerText}>
        <Link href="/">はむ</Link>
      </h1>
    </div>
  );
};
