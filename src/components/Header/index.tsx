import styles from "./header.module.css";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className={styles.headerArea}>
      <h1 className={styles.headerText}>
        <Link href="/" className="hamu">
          はむ
        </Link>
      </h1>
    </div>
  );
};
