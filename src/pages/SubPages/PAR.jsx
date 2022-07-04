import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import { colors } from "../../utils/colors";

import { BsInfoCircleFill } from "react-icons/bs";
import { DashboardBody } from "../../components/Home/Dashboard/styles";

const PAR = () => {
  const [rate, setRate] = useState(0);
  const [message, setMessage] = useState(0);

  const genRand = (min, max, decimalPlaces)=> {
    var rand =
      Math.random() < 0.5
        ? (1 - Math.random()) * (max - min) + min
        : Math.random() * (max - min) + min; // could be min or max or anything in between
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  }

  useEffect(() => {
    const randomNum = genRand(0, 1, 2)
    setRate(randomNum);
    let num = randomNum * 100;
    if (num <= 5) {
      setMessage(" is Strong.");
    } else if (num === 5) {
      setMessage(" is Satisfactory");
    } else if (num > 5 && num <= 10) {
      setMessage(" is UnSatisfatory");
    } else if (num > 10 && num <= 15) {
      setMessage(" is UnSatisfatory");
    } else {
      setMessage(" is Critical");
    }
  }, []);

  return (
    <DashboardBody>
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={100}
        arcsLength={[0.05, 0.1, 0.15, 0.5, 0.6, 0.7, 0.8, 1.0]}
        colors={[
          "green",
          colors.primary,
          "#ffb703",
          "#dc2f02",
          "#d00000",
          "#9d0208",
          "#6a040f",
          "#370617",
        ]}
        needleBaseColor={colors.primary}
        textColor={colors.primary}
        needleColor={colors.secondary}
        percent={rate}
        arcPadding={0.02}
      />
      <p
        style={{
          border: `1px solid grey`,
          backgroundColor: "rgba(247, 128, 0, 0.1)",
          borderRadius: 5,
          marginLeft: "5%",
          marginRight: "5%",
          fontFamily: "Poppins-Light",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "1%",
        }}
      >
        <span
          style={{
            display: "flex",
            alignContent: "baseline",
            alignSelf: "center",
          }}
        >
          <BsInfoCircleFill color={colors.secondary} size={25} />
          <span style={{ fontWeight: "bold", marginLeft: 10, fontSize: 20 }}>
            {rate * 100}% {message}
          </span>
        </span>
        Portfolio at risk or PAR is the type of ratio that usually is used in
        microfinance institutions or banks to measure the quality of loans and
        the risk that they currently have. profile at risk is a satisfactory.
      </p>
    </DashboardBody>
  );
};

export default PAR;
