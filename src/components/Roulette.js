import { useState, useEffect } from "react";

export default function Roulette() {
  const [rotation, setRotation] = useState("0");

  const spinTheWheel = () => {
    const randomValue = Math.round(Math.random() * 720) + 360;
    setRotation(String(randomValue + rotation * 1));
  };

  return (
    <>
      <p>Can't decide what to eat? Let the wheel decide for you!</p>
      <button onClick={spinTheWheel}>Spin the Wheel</button>
      <div className="wheel-wrapper">
        <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
          <div
            className="section-one"
            contentEditable="true"
            spellCheck="false"
          >
            Korean
          </div>
          <div
            className="section-two"
            contentEditable="true"
            spellCheck="false"
          >
            Western
          </div>
          <div
            className="section-three"
            contentEditable="true"
            spellCheck="false"
          >
            Chinese
          </div>
          <div
            className="section-four"
            contentEditable="true"
            spellCheck="false"
          >
            Malay
          </div>
          <div
            className="section-five"
            contentEditable="true"
            spellCheck="false"
          >
            Indian
          </div>
          <div
            className="section-six"
            contentEditable="true"
            spellCheck="false"
          >
            Japanese
          </div>
          <span
            className="wheel-pin"
            contentEditable="true"
            spellCheck="false"
          ></span>
        </div>
        <div className="wheel-stopper"></div>
      </div>
    </>
  );
}
