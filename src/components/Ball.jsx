function Ball({ isActive, color }) {
  return isActive ? (
    <div className={`ball selectedBall ${color}`}></div>
  ) : (
    <div className={`ball ${color} `}></div>
  );
}

export default Ball;
