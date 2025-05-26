import styles from "./footer.module.css";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footerArea}>
      <div className={styles.footerText}>
        <h1 className={styles.footerText_title}>
          <Link href="/">はむ</Link>
        </h1>
        <p className={styles.footerText_message}>
          作品やサイトの感想、ご意見などありましたらぜひ
          <Link className="underline" href="https://x.com/B5iBlc">
            X(旧Twitter)
          </Link>
          までお願いします！
        </p>
      </div>
      <div className={styles.PageAndLink}>
        <div className={styles.pages}>
          <div className={styles.pages_title}>
            <p className={styles.pages_title_head}>Pages</p>
          </div>
          <div className={styles.pages_children}>
            <Link className="underline" href="/">
              作品一覧
            </Link>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.links_title}>
            <p className={styles.links_title_head}>SNS</p>
          </div>
          <div className={styles.links_children}>
            <Link className="underline" href="https://x.com/B5iBlc">
              X(旧Twitter)
            </Link>
            <Link className="underline" href="https://github.com/51hamu51">
              GitHub
            </Link>
            <Link
              className="underline"
              href="https://unityroom.com/users/51hamu51"
            >
              unityroom
            </Link>
            <Link className="underline" href="https://qiita.com/51hamu51">
              Qiita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
