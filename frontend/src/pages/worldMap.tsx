import React, { useState, useEffect } from "react";
import Script from "next/script";
import Coin  from "../components/Coin"
import style from "../styles/worldMap.module.css"

export const WorldMap = () => {
  const [showcoin, setShowCoin] = useState(false);
  const [country, setCountry] = useState("JP");
  const [countryData, setCountryData] = useState([["Country"]]);
  const [gatherPoint, setGatherPoint] = useState(0);

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
 
  return (
    <>
    <div>集めたコインの数：{gatherPoint} / 196
    </div>
      <div className={style.worldMap} id="chart_div" style={{ width: "900px", height: "500px" }}></div>
      <Coin showcoin={showcoin}  setShowCoin={setShowCoin} country={country} colorCodingCountry={colorCodingCountry} countryData={countryData} />
    </>
  );
};
export default WorldMap;