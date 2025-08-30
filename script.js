// Handling Heart Icon Clicks
const heartButtons = document.querySelectorAll(".heart-button");
const heart = document.getElementById("heart");
let heartCount = parseInt(document.getElementById("heart").innerText);

heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    heartCount += 1;
    heart.innerText = heartCount;
  });
});
