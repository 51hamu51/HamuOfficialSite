"use client";
import { useRouter } from "next/navigation";
//import styles from "./home.module.css";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1 className="title">HOME</h1>
      <div>
        <button
          onClick={() => {
            router.push("/Products");
          }}
        >
          Productを見る
        </button>
      </div>
    </>
  );
}
