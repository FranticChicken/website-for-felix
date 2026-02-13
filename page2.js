const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("buttonContainer");

let noClickCount = 0;
let yesSize = 1;
let noSize = 1;

yesBtn.addEventListener("click", function() {
  //alert("You clicked YES ❤️");
  window.location.href = "page3.html";
});

noBtn.addEventListener("click", function() {
  alert("WRONG ANSWER 🤬");
  noClickCount++;

  // Increase yes size
  yesSize += 0.5;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Decrease no size
  noSize -= 0.2;
  noBtn.style.transform = `scale(${noSize})`;

  // After 4 clicks
  if (noClickCount >= 4) {
    noBtn.remove();

    const gif = document.createElement("img");
    gif.src = "angry-cat.gif"; // replace with your gif
    gif.style.width = "500px";

    container.appendChild(gif);
  }
});
