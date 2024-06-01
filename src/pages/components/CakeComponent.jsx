// components/CakeComponent.js
import { buyCake,restockCake } from '@/redux/cakeSlice';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "@/styles/Home.module.css";

const CakeComponent = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className={styles.heading}>Number of Cakes: {numOfCakes}</h2>
      <div className={styles.cont}> 
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        <button onClick={() => dispatch(restockCake())}>Restock Cake</button>
      </div>
    </div>
  );
};

export default CakeComponent;
