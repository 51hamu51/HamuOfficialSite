import styles from "./works.module.css";
import Link from "next/link";

import Image from "next/image";

export type WorksProps = {
  title?: string;
  tags?: string[];
  IsMovie?: boolean;
  image_alt?: string;
  image_src?: string;
  image_width?: number;
  image_height?: number;
  movie_alt?: string;
  movie_src?: string;
  movie_width?: number;
  movie_height?: number;
  sentence?: string;
  link?: string;
  IsLink?: boolean;
};

export const Works = ({
  title = "title",
  tags = ["tag"],
  IsMovie = false,
  image_alt = "BPEX_icon",
  image_src = "/Images/BPEX_icon.png",
  image_width = 200,
  image_height = 200,
  movie_src = "/Images/bagola.mp4",
  movie_width = 200,
  movie_height = 200,
  sentence = "説明",
  link = "https://unityroom.com/games/bpex",
  IsLink = true,
}: WorksProps) => {
  return (
    <>
      <div className={styles.DivideLine}></div>

      <div className={styles.title_parent}>
        <div className={styles.Products_title}>
          <h2 className={styles.Products_title_text}> {title}</h2>
        </div>
        <div className={styles.Tags}>
          {tags.map((value) => (
            <div className={styles.Tag} key={{ title } + "_" + value}>
              <p className={styles.Tag_p}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.Products_contents}>
        {(() => {
          if (IsMovie) {
            return (
              <video
                src={movie_src}
                width={movie_width}
                height={movie_height}
                controls
              />
            );
          } else {
            return (
              <Image
                alt={image_alt}
                src={image_src}
                width={image_width}
                height={image_height}
              />
            );
          }
        })()}

        <div className={styles.Products_sentence}>
          <p>{sentence}</p>
        </div>
        <div className={styles.Products_link}>
          {(() => {
            if (IsLink) {
              return (
                <Link className="underline" href={link}>
                  作品を見に行く
                </Link>
              );
            } else {
              return;
            }
          })()}
        </div>
      </div>
    </>
  );
};
