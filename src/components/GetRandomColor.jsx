const COLORS = ["red", "green", "blue"];

function GetRandomColor() {
    const RANDOM_NUMBER = Math.floor(Math.random() * COLORS.length)
    return RANDOM_NUMBER;
}

export default GetRandomColor;