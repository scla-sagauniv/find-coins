import React, { useState, useEffect } from "react";
import Script from "next/script";
import Coin  from "../components/Coin"
import Head from "next/head";

export const WorldMap = () => {
  const [showcoin, setShowCoin] = useState(false);
  const [country, setCountry] = useState(null);

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

  return (
    <>
      <div id="chart_div" style={{ width: "900px", height: "500px" }}></div>
      <Coin showcoin={showcoin}  setShowCoin={setShowCoin} country={country}/>
    </>
  );
};
export default WorldMap;