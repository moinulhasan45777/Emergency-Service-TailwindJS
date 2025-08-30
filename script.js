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

// Handling Call Button Clicks
const callButtons = document.querySelectorAll(".call-button");
const coins = document.getElementById("coin");
const historySection = document.getElementById("call-histories");

callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (parseInt(coins.innerText) < 20) {
      alert("Insufficient Coins.\n20 Coins Required for a Call");
    } else {
      let serviceName =
        button.parentElement.previousElementSibling.previousElementSibling.querySelector(
          "h2"
        ).innerText;
      let serviceNumber =
        button.parentElement.previousElementSibling.querySelector(
          "p"
        ).innerText;

      alert(`${serviceName}\n${serviceNumber}\n\nCalling...`);

      coins.innerText = parseInt(coins.innerText) - 20;

      historySection.innerHTML =
        `<div
            class="p-[1rem] w-full bg-gray-50 rounded-lg flex items-center justify-between gap-[1rem] mb-2"
          >
            <div>
              <p class="inter-semibold text-[1.125rem]">${serviceName}</p>
              <p class="hind-madurai-regular text-[1.125rem] text-gray-500">
                ${serviceNumber}
              </p>
            </div>
            <p class="hind-madurai-regular text-[1.125rem] text-gray-700">
              11:36:58 AM
            </p>
          </div>` + historySection.innerHTML;
    }
  });
});
