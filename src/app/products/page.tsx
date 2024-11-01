import styles from "./products.module.css";
import Image from "next/image";

export default function Products() {
  return (
    <>
      <h1 className="title">作品一覧</h1>
      <div className="works">
        <div className="work">
          <div className={styles.DivideLine}></div>
          <div className={styles.title_parent}>
            <div className={styles.Products_title}>
              <h2> BPEX</h2>
            </div>
            <div className={styles.Tags}>
              <div className={styles.Tag}>個人開発</div>
              <div className={styles.Tag}>ゲーム</div>
            </div>
          </div>
          <div className={styles.Products_contents}>
            <Image
              alt="BPEX_icon"
              src="/Images/BPEX_icon.png"
              width={200}
              height={200}
            />
            <div className={styles.Products_sentence}>
              <p>オンラインで遊べるTPSゲームです。</p>
            </div>
          </div>
        </div>
        <div className="work">
          <div className={styles.DivideLine}></div>
          <h2 className={styles.Products_title}>Soccer</h2>
        </div>
      </div>
    </>
  );
}
