// Calculate Area
const area = () => {
  let radius = document.getElementById("input").value;
  let areaOfCircle = Math.PI * radius * radius;
  document.getElementById("areas").innerHTML = areaOfCircle.toFixed(4);
  document.getElementById("display").innerHTML = areaOfCircle();
};

// Reset Data
const reset = () => {
  document.getElementById("input").value = "";
  document.getElementById("areas").innerHTML = "";
};
