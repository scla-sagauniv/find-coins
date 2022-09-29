import Head from "next/head";
import Image from "next/image";
import React from 'react';
import { useState } from "react";
import style from "../styles/Coin.module.css";
import styles from '../css/Coin.module.css'
import { useForm } from 'react-hook-form';
import { collection, addDoc,setDoc,doc } from "firebase/firestore";
import {db} from '../firebase/firebase';

const Coin = (props: any) => {

  console.log(props);

  const { register, handleSubmit } = useForm();
  
  const dataRegister =(data:any)=>{

  }

  function submit(data:any) {
    console.log(data)
  }
 
  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const modalContent = {
    position: "relative",
    background: "white",
    padding: "20px",
    borderRadius: "3px",
  };

  const closeCoin = () => {
    props.setShowCoin(false);
  };

  const addCountry = () => {
    props.colorCodingCountry();
    closeCoin();
  };

  props.countryData.find((data: any) => data[0] === props.country);

  return (
    <>
      {props.showcoin ? ( // showFlagがtrueだったらModalを表示する
        <div style={overlay}>
          <div style={modalContent}>
          <div className={style.countryName}>{props.country}</div>
            <div id="contents_block">
            <div className={styles.batsu} onClick={closeCoin} >
              ×
            </div>
              <Image
                id="countryImg"
                src={`/../public/img/${props.country}.jpg`}
                width="400px"
                height="300px"
              />
            </div>
            {props.countryData.find(
              (data: any) => data[0] === props.country
            ) ? (
              <>
              <div id="radio">
                <input
                  id="hasNotCoin"
                  type="radio"
                  name="hasCoinChecked"
                  onClick={addCountry}
                />
                <label htmlFor="hasNotCoin">持ってない</label>
              </div>
              <div id="radio">
                <input
                  id="hasCoin"
                  type="radio"
                  name="hasCoinChecked"
                  defaultChecked
                  onClick={addCountry}
                />
                <label htmlFor="hasCoin">持ってる</label>
              </div>
              </>
            ) : (
              <>
              <div id="radio">
                <input
                  id="hasNotCoin"
                  type="radio"
                  name="hasCoinChecked"
                  defaultChecked
                  onClick={addCountry}
                />
                <label htmlFor="hasNotCoin">持ってない</label>
              </div>
              <div id="radio">
                <input
                  id="hasCoin"
                  type="radio"
                  name="hasCoinChecked"
                  onClick={addCountry}
                />
                <label htmlFor="hasCoin">持ってる</label>
              </div>
              </>
            )}

{/* 
            <form onSubmit={handleSubmit(submit)}>
              <input type="hidden" value={props.userid} {...register('userid')} />
              <input type="text" defaultValue={props.country} {...register('countryname')}/>
              <button type="submit">送信</button>
            </form> */}
           
            
            {/* <button className={styles.coinRegister} onClick={closeCoin}>登録</button> */}
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default Coin;
