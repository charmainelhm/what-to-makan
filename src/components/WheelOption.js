import { useState } from "react";

export default function WheelOption({ option, ind, handleOptionNameChange }) {
  const [optionName, setOptionName] = useState(option.name);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setOptionName(newValue);
    handleOptionNameChange(ind, newValue);
  };

  return (
    <div
      className={`section-${option.number}`}
      style={{ transform: `rotate(${option.rotation}deg)` }}
      key={ind}
    >
      <input
        className="option-input"
        type="text"
        value={optionName}
        onChange={handleChange}
      />
    </div>
  );
}

// <div
// className={`section-${option.number}`}
// style={{ transform: `rotate(${option.rotation}deg)` }}
// key={ind}
// contentEditable="true"
// spellCheck="false"
// >
// {option.name}
// </div>
