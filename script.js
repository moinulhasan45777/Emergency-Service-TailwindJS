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
      let now = new Date();
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
            <p class="hind-madurai-regular text-[1.125rem] text-gray-700 flex-shrink-0">
              ${now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </p>
          </div>` + historySection.innerHTML;
    }
  });
});

// Handling Clear Button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
  historySection.innerHTML = "";
});

// Handling Copy Buttons
const copyButtons = document.querySelectorAll(".copy-button");
const copy = document.getElementById("copy");
let copyCount = parseInt(copy.innerText);

copyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    copyToClipboard(
      button.parentElement.previousElementSibling.querySelector("p").innerText
    );
    alert("Number Copied to Clipboard!");
    copy.innerText = ++copyCount;
  });
});

async function copyToClipboard(number) {
  await navigator.clipboard.writeText(number);
}
