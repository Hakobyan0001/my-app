function Ball(isActive) {
  console.log(isActive)
  if (isActive === true) {
    return <div className="ball red selectedBall"></div>
  } else if (isActive === false) {
    return <div className="ball red "></div>


  }
}

export default Ball;
