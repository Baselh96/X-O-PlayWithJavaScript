import "./App.css";
import React from "react";
import Logic from "./logic/index";

function App() {
  const [logic, setLogic] = React.useState(
    new Logic(Array(9).fill(0), 1, 0, false, false)
  );

  const action = (index) => {
    setLogic(logic.move(index));
    if (logic.getFinshed() || logic.getRow()) {
      document.getElementById("background").style.zIndex = 1;
    }
  };

  const reset = () => {
    setLogic(new Logic(Array(9).fill(0), 1, 0, false, false));
    document.getElementById("background").style.zIndex = -1;
  };

  return (
    <>
      <div className="app">
        <div className="container_button">
          <div>Mensch gegen Mensch</div>
          <div>Mensch gegen Boot</div>
        </div>
        <div className="continar">
          {logic.getArray().map((item, index) => {
            return (
              <div
                className="box"
                key={index}
                style={{
                  background:
                    item === 1 ? "yellow" : item === 2 ? "green" : "white",
                }}
                onClick={(e) => action(index)}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="div_preview_background" id="background">
        {logic.getFinshed() && (
          <h2>
            {" "}
            Winner is player {logic.getWinner() === 1 ? "yellow" : "green"}
          </h2>
        )}
        {logic.getRow() && <h2> Draw </h2>}
        <br />
        <button className="button" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
}

export default App;
