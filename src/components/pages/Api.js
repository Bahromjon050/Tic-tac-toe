import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Api = () => {
  // const findMyState = () => {
  //   const success = (position) => {
  //     console.log(position);
  //   };
  //   const error = (error) => {
  //     console.log(error);
  //   };
  //   navigator.geolocation.getCurrentPosition(success, error);
  // };
  const { appData } = useSelector(state => state.appSlice);
  // console.log(appData);

  const startFun = (props) => {
    if (start) {
      // setApp(
      //   app.map((val) =>
      //     val.id === props.id
      //       ? { ...props, icon: props.closeIcon, burchak: true }
      //       : val
      //   )
      // );
    } else {
      // setApp(
      //   app.map((val) =>
      //     val.id === props.id
      //       ? { ...props, icon: props.okIcon, burchak: false }
      //       : val
      //   )
      // );
    }

    // Activ X
    // if (
    //   app[0].burchak === true &&
    //   app[1].burchak === true &&
    //   app[2].burchak === true
    // ) {
    //   for (let i = 0; i < 3; i++) {
    //     app[i].name = "activ";
    //   }
    //   setIgrok("X");
    //   setWinner(true);
    // } else if (
    //   app[3].burchak === true &&
    //   app[4].burchak === true &&
    //   app[5].burchak === true
    // ) {
    //   for (let i = 3; i < 8; i++) {
    //     app[i].name = "activ";
    //   }
    //   setIgrok("X");
    //   setWinner(true);
    // } else if (
    //   app[6].burchak === true &&
    //   app[7].burchak === true &&
    //   app[8].burchak === true
    // ) {
    //   for (let i = 6; i < 9; i++) {
    //     app[i].name = "activ";
    //   }
    //   setIgrok("X");
    //   setWinner(true);
    // }
    // if (
    //   app[0].burchak === true &&
    //   app[3].burchak === true &&
    //   app[6].burchak === true
    // ) {
    //   app[0].name = "activ";
    //   app[3].name = "activ";
    //   app[6].name = "activ";
    //   setIgrok("X");
    //   setWinner(true);
    // } else if (
    //   app[1].burchak === true &&
    //   app[4].burchak === true &&
    //   app[7].burchak === true
    // ) {
    //   app[1].name = "activ";
    //   app[4].name = "activ";
    //   app[7].name = "activ";
    //   setIgrok("X");
    //   setWinner(true);
    // } else if (
    //   app[2].burchak === true &&
    //   app[5].burchak === true &&
    //   app[8].burchak === true
    // ) {
    //   app[2].name = "activ";
    //   app[5].name = "activ";
    //   app[8].name = "activ";
    //   setIgrok("X");
    //   setWinner(true);
    // }
    // if (
    //   app[0].burchak === true &&
    //   app[4].burchak === true &&
    //   app[8].burchak === true
    // ) {
    //   app[0].name = "activ";
    //   app[4].name = "activ";
    //   app[8].name = "activ";
    //   setIgrok("X");
    //   setWinner(true);
    // } else if (
    //   app[2].burchak === true &&
    //   app[4].burchak === true &&
    //   app[6].burchak === true
    // ) {
    //   app[2].name = "activ";
    //   app[4].name = "activ";
    //   app[6].name = "activ";
    //   setIgrok("X");
    //   setWinner(true);
    // }

    // // In Activ O

    // if (
    //   app[0].burchak === false &&
    //   app[1].burchak === false &&
    //   app[2].burchak === false
    // ) {
    //   for (let i = 0; i < 3; i++) {
    //     app[i].name = "inactiv";
    //   }
    //   setIgrok("O");
    //   setWinner(true);
    // } else if (
    //   app[3].burchak === false &&
    //   app[4].burchak === false &&
    //   app[5].burchak === false
    // ) {
    //   for (let i = 3; i < 8; i++) {
    //     app[i].name = "inactiv";
    //   }
    //   setIgrok("O");
    //   setWinner(true);
    // } else if (
    //   app[6].burchak === false &&
    //   app[7].burchak === false &&
    //   app[8].burchak === false
    // ) {
    //   for (let i = 6; i < 9; i++) {
    //     app[i].name = "inactiv";
    //   }
    //   setIgrok("O");
    //   setWinner(true);
    // }
    // if (
    //   app[0].burchak === false &&
    //   app[3].burchak === false &&
    //   app[6].burchak === false
    // ) {
    //   app[0].name = "inactiv";
    //   app[3].name = "inactiv";
    //   app[6].name = "inactiv";
    //   setIgrok("O");
    //   setWinner(true);
    // } else if (
    //   app[1].burchak === false &&
    //   app[4].burchak === false &&
    //   app[7].burchak === false
    // ) {
    //   app[1].name = "inactiv";
    //   app[4].name = "inactiv";
    //   app[7].name = "inactiv";
    //   setIgrok("O");
    //   setWinner(true);
    // } else if (
    //   app[2].burchak === false &&
    //   app[5].burchak === false &&
    //   app[8].burchak === false
    // ) {
    //   app[2].name = "inactiv";
    //   app[5].name = "inactiv";
    //   app[8].name = "inactiv";
    //   setIgrok("O");
    //   setWinner(true);
    // }
    // if (
    //   app[0].burchak === false &&
    //   app[4].burchak === false &&
    //   app[8].burchak === false
    // ) {
    //   app[0].name = "inactiv";
    //   app[4].name = "inactiv";
    //   app[8].name = "inactiv";
    //   setIgrok("O");
    //   setWinner(true);
    // } else if (
    //   app[2].burchak === false &&
    //   app[4].burchak === false &&
    //   app[6].burchak === false
    // ) {
    //   app[2].name = "inactiv";
    //   app[4].name = "inactiv";
    //   app[6].name = "inactiv";
    //   setIgrok("O");
    //   setWinner(true);
    // }
    setStart(!start);
  };
  const resetFun = () => {
    // setApp(
    //   app.map((val) =>
    //     val.id >= 0 ? { ...val, name: "", burchak: null, icon: "" } : val
    //   )
    // );
    setIgrok("");
    setStart(true);
    setWinner(false);
  };
  const [igrok, setIgrok] = useState("");
  const [start, setStart] = useState(true);
  const [winner, setWinner] = useState(false);
  return (
    <>
      <div className="container">
        <div className="apps_content">
          <header className={!start ? "apps_header activ" : "apps_header"}>
            <h3>X o'yinch</h3>
            <h3>O o'yinch</h3>
          </header>
          <div className={winner ? "apps activ" : "apps"}>
            {winner ? (
              <div>
                <h3 style={{ color: "#fff" }}>
                  Winner{" "}
                  <span style={{ color: igrok === "X" ? "red" : "green" }}>
                    {igrok}
                  </span>{" "}
                  o'yinchi g'olib
                </h3>
                <div className="icons" onClick={resetFun}>
                  <div className="icons_content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="#fff"
                      className="bi bi-arrow-counterclockwise"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                      />
                      <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    </svg>
                  </div>
                </div>
                <video autoPlay loop muted className="video">
                  <source src="./img/video.mp4" type="video/mp4" />
                </video>
              </div>
            ) : (
              "qwdqw"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
// app.map((val, i) => (
//   <div
//     className={`app_click ${val.name}`}
//     key={i}
//     onClick={() => startFun(val)}
//   >
//     {val.icon}
//   </div>
// ))
