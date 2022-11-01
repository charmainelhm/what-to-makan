export default function Roulette() {
  return (
    <>
      <p>Can't decide what to eat? Let the wheel decide for you!</p>
      <button>Spin the Wheel</button>
      <div className="wheel-wrapper">
        <div className="wheel">
          <div className="section-one">Korean</div>
          <div className="section-two">Western</div>
          <div className="section-three">Chinese</div>
          <div className="section-four">Malay</div>
          <div className="section-five">Indian</div>
          <div className="section-six">Japanese</div>
          <span className="wheel-pin"></span>
        </div>
        <div className="wheel-stopper"></div>
      </div>
    </>
  );
}
