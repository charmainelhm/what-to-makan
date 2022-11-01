import { useState, useEffect } from "react";

const wheelOptions = [
  { name: "Korean", number: "one" },
  { name: "Western", number: "two" },
  { name: "Chinese", number: "three" },
  { name: "Malay", number: "four" },
  { name: "Indian", number: "five" },
  { name: "Japanese", number: "six" },
];

export default function Roulette() {
  const [rotation, setRotation] = useState("0"); // prevent value from updating when other states updates reactDOM

  const wheelSectionArr = wheelOptions.map((option, ind) => {
    return (
      <div
        className={`section-${option.number}`}
        key={ind}
        contentEditable="true"
        spellCheck="false"
      >
        {option.name}
      </div>
    );
  });

  const spinTheWheel = () => {
    const randomValue = Math.round(Math.random() * 720) + 360;
    setRotation(String(randomValue + rotation * 1));
    wheelSectionArr.forEach((option) =>
      console.log(option.getBoundingClientRect())
    );
  };

  return (
    <>
      <p>Can't decide what to eat? Let the wheel decide for you!</p>
      <div className="wheel-wrapper">
        <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
          {wheelSectionArr}
          <span className="wheel-pin"></span>
        </div>
        <div className="wheel-stopper"></div>
      </div>
      <button className="mt-6" onClick={spinTheWheel}>
        Spin the Wheel
      </button>
    </>
  );
}
