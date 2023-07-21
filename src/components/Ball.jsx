function Ball({ isActive }) {
  return isActive ? (
    <div className={`ball red selectedBall`}></div>
  ) : (
    <div className={`ball red `}></div>
  );
}

export default Ball;
