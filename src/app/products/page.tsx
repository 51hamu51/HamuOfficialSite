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
            image_alt="BPEX_icon"
            image_src="/Images/BPEX_icon.png"
            image_width={200}
            image_height={200}
            sentence="オンラインで遊べるTPSゲームです。"
            link="https://unityroom.com/games/bpex"
          />
        </div>
        <div className={styles.works_children}>
          <Works
            title="Soccer"
            tags={["チーム開発", "VRC"]}
            image_alt="BPEX_icon"
            image_src="/Images/BPEX_icon.png"
            image_width={200}
            image_height={200}
            sentence="ギラヴァンツ北九州をモチーフにした、VRChatのワールドです。"
            link="https://vrchat.com/home/world/wrld_5c122d6d-60ab-4194-90e8-caf3a3406c80"
          />
        </div>
        <div className={styles.works_children}>
          <Works
            title="e-ZUKA Journey"
            tags={["チーム開発", "アプリ"]}
            image_alt="BPEX_icon"
            image_src="/Images/BPEX_icon.png"
            image_width={200}
            image_height={200}
            sentence="福岡県飯塚市の観光アプリです。"
            IsLink={false}
          />
        </div>
      </div>
    </>
  );
}
