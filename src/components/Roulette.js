import { useState, useEffect } from "react";

const wheelOptions = [
  { name: "Korean", number: "one", rotation: 0 },
  { name: "Western", number: "two", rotation: 60 },
  { name: "Chinese", number: "three", rotation: 120 },
  { name: "Malay", number: "four", rotation: 180 },
  { name: "Indian", number: "five", rotation: 240 },
  { name: "Japanese", number: "six", rotation: 300 },
];

export default function Roulette() {
  const [rotation, setRotation] = useState("0"); // prevent value from updating when other states updates reactDOM
  const [chosenOption, setChosenOption] = useState("");

  const wheelSectionArr = wheelOptions.map((option, ind) => {
    return (
      <div
        className={`section-${option.number}`}
        style={{ transform: `rotate(${option.rotation}deg)` }}
        key={ind}
        contentEditable="true"
        spellCheck="false"
      >
        {option.name}
      </div>
    );
  });

  const determineChosenOption = () => {
    const position = 360 - (rotation % 360);
    console.log(position);
    const chosenOption = wheelOptions.filter(
      (option) =>
        position <= option.rotation + 30 && position > option.rotation - 30
    );
    setChosenOption(chosenOption[0].name);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (rotation != 0) {
        determineChosenOption();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [rotation]);

  const spinTheWheel = () => {
    const randomValue = Math.round(Math.random() * 720) + 360;
    setRotation((prevRotation) => String(randomValue + prevRotation * 1));
  };

  return (
    <>
      <p>Can't decide what to eat? Let the wheel decide for you!</p>
      <div className="wheel-wrapper">
        <div
          className="wheel mb-4"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {wheelSectionArr}
          <span className="wheel-pin"></span>
        </div>
        <div className="wheel-stopper"></div>
      </div>
      <p className={chosenOption === "" ? "opacity-0" : "opacity-100"}>
        The wheel chooses {chosenOption}
      </p>
      <button className="mt-6" onClick={spinTheWheel}>
        Spin the Wheel
      </button>
    </>
  );
}
