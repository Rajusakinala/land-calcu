import "./App.css";
import React, { useState } from "react";
function App() {
  var area;
  const [s3, setS3] = useState({ side1: "", side2: "", side3: "" });
  const [s3Result, setS3Result] = useState(0);
  function valueHandler(e) {
    return setS3({ ...s3, [e.target.name]: e.target.value });
  }
  function calculateHandler(s3) {
    const p = Number(s3.side1) + Number(s3.side2) + Number(s3.side3);
    const s = p / 2;
    console.log("s", s);
    area = Math.sqrt(
      s *
        (s - Number(s3.side1)) *
        (s - Number(s3.side2)) *
        (s - Number(s3.side3))
    );
    console.log("area", area);
    setS3Result(area);
  }
  return (
    <div className="App">
      <div>
        {console.log("s3", s3)}
        <div>Triangle with 3 sides</div>
        <div>
          <input
            type="number"
            name="side1"
            value={s3.side1}
            label="1st Side"
            variant="filled"
            onChange={valueHandler}
            placeholder="Enter 1st Side"
            //   defaultValue={0}
          />
          <input
            name="side2"
            value={s3.side2}
            type="number"
            label="2nd Side"
            variant="filled"
            onChange={valueHandler}
            placeholder="Enter 2nd Side"
            //   defaultValue={0}
          />
          <input
            name="side3"
            value={s3.side3}
            type="number"
            label="3rd Side"
            variant="filled"
            onChange={valueHandler}
            placeholder="Enter 3rd Side"
            //   defaultValue={0}
          />
        </div>
        <div>
          <button
            variant="outlined"
            onClick={() => {
              calculateHandler(s3);
            }}
          >
            Calculate
          </button>
          <h3>Result:</h3>
          <h4>In Sq fts:&nbsp; {s3Result.toFixed(3)}</h4>
          <h4>In Yards:&nbsp; {(s3Result / 9).toFixed(3)}</h4>
          <h4>In Guntas: &nbsp; {(s3Result / 1089).toFixed(3)}</h4>
          <h4>In Acres: &nbsp; {(s3Result / 43560).toFixed(3)}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
