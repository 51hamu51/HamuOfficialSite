import styles from "./Products.module.css";
import Image from "next/image";

export default function Products() {
  return (
    <>
      <h1 className="title">作品一覧</h1>
      <div>
        <h2 className={styles.Products_title}>BPEX</h2>
        <Image
          alt="BPEX_icon"
          src="/Images/BPEX_icon.png"
          width={300}
          height={300}
        />
        <h2 className={styles.Products_title}>Soccer</h2>
      </div>
    </>
  );
}
