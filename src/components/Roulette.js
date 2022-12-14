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
    <div className="card py-10 sm:w-11/12 max-w-5xl">
      <h3 className="mb-1">Eat What?</h3>
      <p className="md:text-lg">
        Can't decide what to eat?
        <br /> Let the wheel decide for you!
      </p>
      <div className="wheel-wrapper">
        <div
          className="wheel mb-4"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {wheelSectionArr}
          <span className="wheel-pin"></span>
        </div>
        <div className="wheel-stopper rounded"></div>
      </div>
      <button
        className="mt-2 btn btn-solid hover:btn-outline"
        onClick={spinTheWheel}
      >
        Spin the Wheel
      </button>
      <p className="text-sm mt-2">
        Psst... Don't like the choices on the wheel? <br /> Click and highlight
        the options to change them!
      </p>
      <div
        className="flex flex-col md:flex-row justify-center items-center mt-6"
        style={{ display: isSpinning ? "none" : "flex" }}
      >
        <p>The wheel chooses {chosenOption}!</p>
        <button
          className="md:ml-4 btn btn-outline hover:btn-solid"
          onClick={handleSearch}
        >
          Search Chosen Food
        </button>
      </div>
    </div>
  );
}
