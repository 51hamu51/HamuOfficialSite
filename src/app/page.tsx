import Link from "next/link";
//import styles from "./home.module.css";
export default function Home() {
  return (
    <>
      <h1 className="title">HOME</h1>
      <div>
        <Link href="/products">Productを見る</Link>
      </div>
    </>
  );
}
