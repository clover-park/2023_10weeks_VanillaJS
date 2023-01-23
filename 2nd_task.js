const body = document.querySelector("body");
const yellowClass = "yellow";
const purpleClass = "purple";
const blueClass = "blue";
function handleResize() {
  const width = window.innerWidth;
  if (width < 800) {
    body.classList.add(blueClass);
    body.classList.remove(purpleClass);
  } else if (width <= 1200 && width >= 800) {
    body.classList.add(purpleClass);
    body.classList.remove(yellowClass, blueClass);
  } else {
    body.classList.remove(purpleClass);
    body.classList.add(yellowClass);
  }
}
window.addEventListener("resize", handleResize);
