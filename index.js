// === State ===
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// This is also where we define functions to modify the state.

// TODO: Add support for more colors
const colors = ["red", "green", "blue"];
const sizes = ["small", "medium", "large"];
const maxShapes = 10;
const shapes = [
  {
    color: "red",
    size: "small",
  },
  {
    color: "yellow",
    size: "small",
  },
];

/** Adds a shape with random properties to the `shapes` array */
function addShape() {
  const color = colors[Math.floor(Math.random() * colors.length)];

  // TODO: Randomize the size of the shape
  const size = "small";

  shapes.push({ color, size });
}

// === Render ===
// To "render" is to update the DOM to reflect the current state.
// In this section, we define the functions to render state.

/** Updates the DOM to reflect the current state. */
function render() {
  // Render the squares
  const squareList = document.querySelector("#squares");
  const squareElements = shapes.map((shape) => {
    const squareElement = document.createElement("li");
    squareElement.classList.add(shape.color, shape.size);
    return squareElement;
  });
  squareList.replaceChildren(...squareElements);

  // TODO: Render the circles
}

// === Script ===
// In this section, we call the functions that we've defined above.

// `setInterval` will call the callback function every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(() => {
  addShape();
  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
}, 1000);

render(); // We call this function once to render the initial state
