import React, { useState, useEffect, useId } from "react";
import Script from "next/script";
import Coin  from "../components/Coin"
import style from "../styles/worldMap.module.css"
import Head from "next/head";
import firebaseApp from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const WorldMap = () => {
  const [showcoin, setShowCoin] = useState(false);
  const [country, setCountry] = useState("JP");
  const [countryData, setCountryData] = useState([["Country"]]);
  const [gatherPoint, setGatherPoint] = useState(0);

  const auth = getAuth(firebaseApp);

  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    
    //ユーザのuidを取得する
    const uid = user.uid;
    console.log(uid);
    
  }
  
  useEffect(() => {
    google.load("visualization", "1", { packages: ["geochart"] });
    google.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      let data = google.visualization.arrayToDataTable(countryData);
    
      console.log(countryData);


      var options = {
        displayMode: "regions",
        defaultColor: "#ff7f50"
      };

      var chart = new google.visualization.GeoChart(
        document.getElementById("chart_div")
      );

      chart.draw(data, options);

      google.visualization.events.addListener(
        chart,
        "regionClick",
        selectHandler
      );

      function selectHandler(reg: any) {
        setShowCoin(true)
        setCountry(reg.region)
      }
    }
  }, [countryData]);

  function colorCodingCountry() {
    let hasNotCoin = document.getElementById("hasNotCoin")
    
    if (hasNotCoin.checked){
      console.log(hasNotCoin.checked);
      
      if (countryData.some((data) => data[0] === country)){
        setCountryData(countryData.filter((data) => (data[0] !== country)))
        setGatherPoint(gatherPoint - 1)
      }
    }
    else {
      console.log(hasNotCoin.checked);
      
      if (!countryData.some((data) => data[0] === country)){
        setCountryData([...countryData, [country]])
        setGatherPoint(gatherPoint + 1)
      }
    }
  }
 
  if (user==null){
    return <></>
  }
  return (
    <>
    <div>集めたコインの数：{gatherPoint} / 196
    </div>
      <div className={style.worldMap} id="chart_div" style={{ width: "900px", height: "500px" }}></div>
      <Coin showcoin={showcoin}  setShowCoin={setShowCoin} country={country} colorCodingCountry={colorCodingCountry} countryData={countryData} userid={user.uid}/>
    </>
  );
};

export default WorldMap;