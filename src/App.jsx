import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [Bill, setBill] = useState("");
  const [Ptg, setPtg] = useState("");
  const [Nop, setNop] = useState("");

  let tip = (Bill * (Ptg / 100)) / Nop;
  let total = Bill / Nop + (Bill * (Ptg / 100)) / Nop;
  tip = tip.toFixed(2);
  total = total.toFixed(2);

  if (isNaN(tip) || total === "Infinity") {
    tip = "0.00";
    total = "0.00";
  }

  let error;
  if (Nop === "0") {
    error = "Can't be zero";
  }
  useEffect(() => {
    if (Nop === "0") {
      document.getElementById("nop").style.border =
        "2px solid rgb(255, 109, 73)";
    } else {
      document.getElementById("nop").style.border = "none";
    }
  });

  useEffect(() => {
    if (tip === "0.00" || total === "0.00") {
      document.getElementById("btn").disabled = true;
    } else {
      document.getElementById("btn").disabled = false;
    }
  });

  const cancelCourse = (e) => {
    document.getElementById("myForm").reset();
    setBill((e.target.value = 0));
  };

  return (
    <div className="App">
      <>
        <p className="title">
          <img src="/logo.svg" alt="logo" />
        </p>
        <div className="card">
          <div className="sect-1">
            <form action="#" id="myForm">
              <div className="set">
                <label>
                  <h5>Bill</h5>
                </label>

                <span>
                  <img src="/icon-dollar.svg" alt="dollar" />
                </span>
                <input
                  className="bill in"
                  id="bill"
                  type="number"
                  dir="rtl"
                  name="num"
                  placeholder="0"
                  onChange={(e) => setBill(e.target.value)}
                />
              </div>

              <div className="set">
                <>
                  <label>
                    <h5>Select Tip %</h5>
                  </label>
                  <div className="radio">
                    <input
                      label="5%"
                      type="radio"
                      id="5-ptg"
                      name="ptg"
                      value="5"
                      onChange={(e) => setPtg(e.target.value)}
                    />
                    <input
                      label="10%"
                      type="radio"
                      id="10-ptg"
                      name="ptg"
                      value="10"
                      onChange={(e) => setPtg(e.target.value)}
                    />
                    <input
                      label="15%"
                      type="radio"
                      name="ptg"
                      id="ptg"
                      value="15"
                      onChange={(e) => setPtg(e.target.value)}
                    />
                    <input
                      label="25%"
                      type="radio"
                      id="25-ptg"
                      name="ptg"
                      value="25"
                      onChange={(e) => setPtg(e.target.value)}
                    />
                    <input
                      label="50%"
                      type="radio"
                      id="50-ptg"
                      name="ptg"
                      value="50"
                      onChange={(e) => setPtg(e.target.value)}
                    />
                    <input
                      className="cus"
                      type="number"
                      dir="rtl"
                      name="ptg"
                      id="cus"
                      placeholder="Custom"
                      onChange={(e) => setPtg(e.target.value)}
                    />
                  </div>
                </>
              </div>

              <div className="set">
                <label className="label-error">
                  <h5>Number of People</h5>
                  <p>{error}</p>
                </label>

                <span>
                  <img src="/icon-person.svg" alt="dollar" />
                </span>

                <input
                  className="no-p in"
                  id="nop"
                  type="number"
                  dir="rtl"
                  placeholder="0"
                  name="num-p"
                  onChange={(e) => setNop(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>

          <div className="sect-2">
            <div className="flex">
              <div>
                <h5>Tip Amount</h5>
                <p>/ person</p>
              </div>
              <h1 className="return">
                <img className="dollar" alt="dollar" src="/icon-dollar2.svg" />
                {tip}
              </h1>
            </div>

            <div className="flex">
              <div>
                <h5>Total</h5>
                <p>/ person</p>
              </div>
              <h1 className="return">
                <img className="dollar" alt="dollar" src="/icon-dollar2.svg" />
                {total}
              </h1>
            </div>

            <button
              type="button"
              id="btn"
              className="btn"
              value="0"
              onClick={cancelCourse}
            >
              RESET
            </button>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
