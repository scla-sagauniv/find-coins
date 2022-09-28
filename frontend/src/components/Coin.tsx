import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Coin = (props: any) => {
  // const showCoin = () =>{
  //   props.setShowCoin(true);
  // }
  const closeCoin = () => {
    props.setShowCoin(false);
  };

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
            <button onClick={closeCoin}>閉じる</button>
          </div>
        </div>
      ) : (
        <></> // showFlagがfalseの場合はModalは表示しない
      )}
    </>
  );
};

export default Coin;
