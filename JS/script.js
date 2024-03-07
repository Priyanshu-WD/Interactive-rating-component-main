const rateButtons = document.querySelectorAll(".rating-btn");
const rateRange = document.querySelector("#rateRange");
const popUpBox = document.querySelector("#popUpThanks");
const rateCard = document.querySelector("#rateCard");
const subBtn = document.querySelector("#subBtn");
const closeIcon = document.querySelector("#closeIcon");

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateButtons.forEach((btn) => {
      btn.style.backgroundColor = null;
      btn.style.color = null;
    });
    button.style.backgroundColor = "hsl(216, 12%, 54%)";
    button.style.color = "#ffffff";

    rateRange.innerText = button.innerText;
  });

  subBtn.addEventListener("click", () => {
    popUpBox.style.display = "block";
    rateCard.style.display = "none";
  });

  closeIcon.addEventListener("click", () => {
    rateCard.style.display = "block";
    popUpBox.style.display = "none";
    rateButtons.forEach((btn) => {
      btn.style.backgroundColor = null;
      btn.style.color = null;
    });
  });
});
