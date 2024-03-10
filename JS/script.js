const rateNum = document.querySelector("#rateNum");
const popUpBox = document.querySelector("#popUpThanks");
const rateCard = document.querySelector("#rateCard");
const subBtn = document.querySelector("#subBtn");
const closeIcon = document.querySelector("#closeIcon");
const input = document.querySelectorAll("input");

let form = document.querySelector("form");

input.forEach((button) => {
  button.addEventListener("click", () => {
    input.forEach((btn) => {
      btn.style.backgroundColor = null;
      btn.style.color = null;
    });

    button.style.backgroundColor = "hsl(216, 12%, 54%)";
    button.style.color = "#ffffff";

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      popUpBox.style.display = "block";
      rateCard.style.display = "none";
    });

    rateNum.innerHTML = button.value;
  });
});

closeIcon.addEventListener("click", () => {
  rateCard.style.display = "block";
  popUpBox.style.display = "none";
});
