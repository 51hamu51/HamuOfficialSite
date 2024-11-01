import styles from "./header.module.css";
import Link, { LinkProps } from "next/link";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerArea}>
      <h1 className={styles.headerText}>
        <Link href="/">はむ</Link>
      </h1>
    </div>
  );
};