import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import style from "../styles/Coin.module.css";

const Coin = (props: any) => {
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
    background: "white",
    padding: "10px",
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
            <div id="contents_block">
              <Image
                id="countryImg"
                src={`/../public/img/${props.country}.jpg`}
                width="400px"
                height="300px"
              />
            </div>
            <div className={style.closeModal} onClick={closeCoin}></div>
            {props.countryData.find(
              (data: any) => data[0] === props.country
            ) ? (
              <>
                <input
                  id="hasNotCoin"
                  type="radio"
                  name="hasCoinChecked"
                  onClick={addCountry}
                />
                <label for="hasNotCoin">持ってない</label>
                <input
                  id="hasCoin"
                  type="radio"
                  name="hasCoinChecked"
                  defaultChecked
                  onClick={addCountry}
                />
                <label for="hasCoin">持ってる</label>
              </>
            ) : (
              <>
                <input
                  id="hasNotCoin"
                  type="radio"
                  name="hasCoinChecked"
                  defaultChecked
                  onClick={addCountry}
                />
                <label for="hasNotCoin">持ってない</label>
                <input
                  id="hasCoin"
                  type="radio"
                  name="hasCoinChecked"
                  onClick={addCountry}
                />
                <label for="hasCoin">持ってる</label>
              </>
            )}
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default Coin;
