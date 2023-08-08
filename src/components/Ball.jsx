function Ball({ isActive, color }) {
  // console.log(color);
  return isActive ? (
    <div className={`ball selectedBall ${color}`}></div>
  ) : (
    <div className={`ball ${color} `}></div>
  );
}

export default Ball;
