import React, { useState, useEffect, useId } from "react";
import Script from "next/script";
import Coin  from "../components/Coin"
import Head from "next/head";
import firebaseApp from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const WorldMap = () => {
  const [showcoin, setShowCoin] = useState(false);
  const [country, setCountry] = useState(null);

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
      var data = google.visualization.arrayToDataTable([
        ["Country"],
        ["Germany"],
        ["United States"],
        ["Brazil"],
      ]);
      console.log(data);
      

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
        console.log(reg);
      }
    }
  }, []);

  if(user==null){
    return <></>
  }

  return (
    <>
      <div id="chart_div" style={{ width: "900px", height: "500px" }}></div>
      <Coin showcoin={showcoin}  setShowCoin={setShowCoin} country={country} userid={user.uid}/>
    </>
  );
};

export default WorldMap;