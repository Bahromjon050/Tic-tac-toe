import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerAction, nextStart, reset } from "../toolkit/Reducers";

const Api = () => {
  const { start, igrok, winner, newArr, playerX, playerO } = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();
  const startFun = (index) => {
    let newArray = [...newArr];
    if (newArray[index] === "") {
      if (start) {
        newArray[index] = "X";
      } else {
        newArray[index] = "O";
      }
      dispatch(playerAction(newArray));
      dispatch(nextStart());
    }
  };
  const resetFun = () => {
    dispatch(reset());
  };
  return (
    <>
      <div className="container">
        <div className="apps_content">
          <header className={!start ? "apps_header activ" : "apps_header"}>
            <h3>X o'yinch: {playerX}</h3>
            <h3>O o'yinch: {playerO}</h3>
          </header>
          <div className={winner ? "apps activ" : "apps"}>
            {winner ? (
              <div>
                <h3 style={{ color: "#fff" }}>
                  {igrok !== "Durrang" ? (
                    <>
                      Winner{" "}
                      <span style={{ color: igrok === "X" ? "red" : "green" }}>
                        {igrok}
                      </span>{" "}
                      o'yinchi g'olib
                    </>
                  ) : (
                    <>O'yin Durrang bo'ldi</>
                  )}
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
              newArr.map((val, i) => (
                <div
                  className={`app_click`}
                  key={i}
                  onClick={() => startFun(i)}
                >
                  {val}
                </div>
              ))
            )}
          </div>
          <div className="resetBtn" onClick={resetFun}>
            <button className="reset">Reset</button>
          </div>
          <br />
          <a href="https://tic-tac-toe-050.netlify.app/" className="tic">
            Tic Tac Toe React.js
          </a>
          <a
            href="https://x-o-050.netlify.app/"
            className="tic ntch"
            style={{ textAlign: "end" }}
          >
            Tic Tac Toe JavaScript
          </a>
        </div>
      </div>
    </>
  );
};

export default Api;

// appData.map((val, i) => (
//   <div
//     className={`app_click ${val.name}`}
//     key={i}
//     onClick={() => startFun(val)}
//   >
//     {val.burchak !== null ? (
//       val.burchak ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="100"
//           height="100"
//           fill="#fff"
//           className="bi bi-x-lg"
//           viewBox="0 0 16 16"
//         >
//           <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
//         </svg>
//       ) : (
//         val.okIcon
//       )
//     ) : (
//       ""
//     )}
//   </div>
// ))
