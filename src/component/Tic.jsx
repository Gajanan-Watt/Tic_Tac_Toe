import { useEffect, useState } from "react";
import { Square } from "./Square";
import "./tic.css";
export const Tic = () => {
  const [point, setPoint] = useState(["", "", "", "", "", "", "", "", ""]);

  const [flag, setFlag] = useState(false);

  const handleClick = (data) => {
    //console.log(data);
    if (point[data]) {
      return;
    } else {
      if (flag === false) {
        let newS = point.map((e, i) => (i === data ? (e = "X") : e));
        setPoint(newS);
        setFlag((prev) => !prev);
      } else {
        let newS = point.map((e, i) => (i === data ? (e = "O") : e));
        setPoint(newS);
        setFlag((prev) => !prev);
      }
    }
  };

  useEffect(() => {
    let answer = winner();

    if (answer) {
      alert(`Winner is ${answer}`);
      setPoint(["", "", "", "", "", "", "", "", ""]);
    }
  }, [point]);

  const winner = () => {
    let pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < pattern.length; i++) {
      let [a, b, c] = pattern[i];
      if (point[a] && point[a] === point[b] && point[a] === point[c]) {
        return point[a];
      }
    }
    return null;
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="parent">
        <div className="box">
          <Square point={point[0]} handleClick={() => handleClick(0)} />
          <Square point={point[1]} handleClick={() => handleClick(1)} />
          <Square point={point[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="box">
          <Square point={point[3]} handleClick={() => handleClick(3)} />
          <Square point={point[4]} handleClick={() => handleClick(4)} />
          <Square point={point[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="box">
          <Square point={point[6]} handleClick={() => handleClick(6)} />
          <Square point={point[7]} handleClick={() => handleClick(7)} />
          <Square point={point[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
};
