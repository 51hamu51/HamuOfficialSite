import Link from "next/link";
import styles from "./home.module.css";
export default function Home() {
  return (
    <>
      <h1 className="title">HOME</h1>
      <p className={styles.introduction}>
        ゲーム業界志望の大学生です！ ゲーム、ARアプリ等いろいろ作ってます。
      </p>
      <div className={styles.links}>
        <Link href="/products">
          <p>作品一覧を見る</p>
        </Link>
      </div>
    </>
  );
}
