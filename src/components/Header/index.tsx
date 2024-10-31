"use client";
import styles from "./header.module.css";

import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.headerArea}>
      <h1 className={styles.headerText} onClick={() => router.push("/")}>
        はむ
      </h1>
    </div>
  );
};
