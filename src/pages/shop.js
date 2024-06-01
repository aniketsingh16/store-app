// pages/shop.js
import React from 'react';
import CakeComponent from './components/CakeComponent';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
const Shop = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
         <h1 className={styles.heading}>Shop Page</h1>
        <CakeComponent />
        <Link href="/" passHref>
            <button>Go to Home</button>
        </Link>
        </div>
      
    </div>
  );
};

export default Shop;
