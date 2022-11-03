export default function WheelOption({ option, ind }) {
  const handleChange = () => {};

  return (
    <div
      className={`section-${option.number}`}
      style={{ transform: `rotate(${option.rotation}deg)` }}
      key={ind}
    >
      <input
        className="option-input"
        type="text"
        value={option.name}
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
