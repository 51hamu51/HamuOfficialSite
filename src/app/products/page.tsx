import styles from "./products.module.css";
import { Works } from "@/components/Works";

export default function Products() {
  return (
    <>
      <h1 className="title">作品一覧</h1>
      <div className={styles.works}>
        <div className={styles.works_children}>
          <Works
            title="BPEX"
            tags={["個人開発", "ゲーム"]}
            IsMovie={true}
            movie_src="/Images/BPEX_for_site.mp4"
            movie_width={400}
            movie_height={200}
            sentence="オンラインで遊べるTPSゲームです。"
            link="https://unityroom.com/games/bpex"
          />
        </div>
        <div className={styles.works_children}>
          <Works
            title="Soccer"
            tags={["チーム開発", "VRC"]}
            image_alt="Soccer_icon"
            image_src="/Images/Soccer.png"
            image_width={279}
            image_height={200}
            sentence="ギラヴァンツ北九州をモチーフにした、VRChatのワールドです。"
            link="https://vrchat.com/home/world/wrld_5c122d6d-60ab-4194-90e8-caf3a3406c80"
          />
        </div>
        <div className={styles.works_children}>
          <Works
            title="e-ZUKA Journey"
            tags={["チーム開発", "アプリ"]}
            IsMovie={true}
            movie_src="/Images/Kyutech.mp4"
            sentence="福岡県飯塚市の観光アプリです。"
            IsLink={false}
          />
        </div>
        <div className={styles.works_children}>
          <Works
            title="UnityでAR"
            tags={["記事"]}
            image_alt="UnityでAR"
            image_src="/Images/Unity_AR.png"
            image_width={130}
            image_height={200}
            sentence="UnityでARアプリを作るためのチュートリアルです。"
            link="https://qiita.com/51hamu51/items/80e472b8bbb3b52e4ecd"
          />
        </div>
        <div className={styles.works_children}>
          <Works
            title="BAGOLA"
            tags={["チーム開発", "ゲーム"]}
            IsMovie={true}
            movie_src="/Images/bagola.mp4"
            sentence="身の回りのバーコードを読み込んで戦わせる、コマンド式バトルゲームです。"
            IsLink={false}
          />
        </div>
        <div className={styles.works_children}>
          <Works
            title="KyutechGuide"
            tags={["チーム開発", "アプリ"]}
            IsMovie={true}
            movie_src="/Images/Canvas.mp4"
            sentence="オープンキャンパス用の、学内ナビアプリです。"
            IsLink={false}
          />
        </div>
        <div className={styles.works_children}>
          <Works
            title="(開発中)"
            tags={["個人開発", "ゲーム"]}
            IsMovie={true}
            movie_src="/Images/Sword.mp4"
            sentence="インターンで制作した、アーチャー伝説をモチーフにしたゲームを改造中です。"
            IsLink={false}
          />
        </div>
      </div>
    </>
  );
}
