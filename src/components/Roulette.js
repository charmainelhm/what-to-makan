import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import WheelOption from "./WheelOption";

// const wheelOptions = [
// { name: "Korean", number: "one", rotation: 0 },
// { name: "Western", number: "two", rotation: 60 },
// { name: "Chinese", number: "three", rotation: 120 },
// { name: "Malay", number: "four", rotation: 180 },
// { name: "Indian", number: "five", rotation: 240 },
// { name: "Japanese", number: "six", rotation: 300 },
// ];

export default function Roulette({ updateInput }) {
  const history = useHistory();

  const [wheelOptions, setWheelOptions] = useState([
    { name: "Korean", number: "one", rotation: 0 },
    { name: "Western", number: "two", rotation: 60 },
    { name: "Chinese", number: "three", rotation: 120 },
    { name: "Malay", number: "four", rotation: 180 },
    { name: "Indian", number: "five", rotation: 240 },
    { name: "Japanese", number: "six", rotation: 300 },
  ]);
  const [rotation, setRotation] = useState(0);
  const [chosenOption, setChosenOption] = useState("");
  const [isSpinning, setIsSpinning] = useState(true);

  const handleOptionNameChange = (index, newOptionName) => {
    const optionArr = [...wheelOptions];
    optionArr[index].name = newOptionName;
    setWheelOptions(optionArr);
  };

  const wheelSectionArr = wheelOptions.map((option, ind) => {
    return (
      <WheelOption
        option={option}
        ind={ind}
        handleOptionNameChange={handleOptionNameChange}
      />
    );
  });

  const spinTheWheel = () => {
    setIsSpinning(true);
    const randomValue = Math.round(Math.random() * 720) + 360;
    setRotation((prevRotation) => randomValue + prevRotation);
  };

  const determineChosenOption = () => {
    const position = 360 - (rotation % 360);
    console.log(position);
    const chosenOption = wheelOptions.filter((option) => {
      if (option.rotation !== 0) {
        return (
          position <= option.rotation + 30 && position > option.rotation - 30
        );
      } else {
        return position <= option.rotation + 30 || position > 330;
      }
    });
    setChosenOption(chosenOption[0].name);
    setIsSpinning(false);
  };

  const handleSearch = () => {
    updateInput(chosenOption);
    history.push("/eatWhere");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (rotation !== 0) {
        determineChosenOption();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [rotation]);

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
      <div style={{ opacity: isSpinning ? "0" : "1" }}>
        <p>The wheel chooses {chosenOption}!</p>
        <button className="ml-4" onClick={handleSearch}>
          Search Chosen Food
        </button>
      </div>
      <button className="mt-6" onClick={spinTheWheel}>
        Spin the Wheel
      </button>
    </>
  );
}
