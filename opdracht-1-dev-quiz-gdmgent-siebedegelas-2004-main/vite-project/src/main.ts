import "./style/reset.css";
import "./style/style.css";
import * as Quiz from "./components/Quiz";
import "./quizSelection";

const initApp = () => {
  const $welcome = document.getElementById("welcome");
  const $exitButtonContainer = document.querySelector(".exit-button-container");
  $welcome?.classList.add("active");
  setTimeout(() => {
    $welcome?.classList.remove("active");
    $exitButtonContainer?.classList.add("active");
  }, 2000);
  setTimeout(() => {
    Quiz.init();
    $welcome?.classList.add("hidden");
  }, 3000);
};

initApp();
