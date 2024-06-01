import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CakeComponent from "./components/CakeComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <div className={styles.container}>
     <div className={styles.card}>
        <h1 className={styles.heading}>Welcome to the Cake Shop</h1>
        <CakeComponent />
        <Link href="/shop" passHref>
        <button>Go to Shop</button>
      </Link>
      </div>
      </div>
    </>
  );
}
