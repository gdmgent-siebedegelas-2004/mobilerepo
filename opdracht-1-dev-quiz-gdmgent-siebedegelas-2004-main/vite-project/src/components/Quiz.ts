import {
  getSettingsFromLocalStorage,
  saveSettingsToLocalStorage,
} from "../localStorage";
import { Question, Settings } from "../modules/quiz/types";
import { fetchQuiz } from "../modules/quiz/api";
// import { loadQuestion } from "./Quiz";

const $settings = document.getElementById("settings");
const $quiz = document.getElementById("quiz");
const $result = document.getElementById("result");
const $list = document.getElementById("quiz-list");
const $question = document.getElementById("quiz-question");
const $difficulty = document.getElementById("difficulty");

let currentView: "quiz" | "result" | "settings" = "settings";
let settings: Settings = {
  category: "Linux",
  difficulty: "Easy",
  limit: 5,
};

let questions: Question[] | null = null;
let currentQuestion = 0;
let correctAnswers = 0;

const setCurrentView = (newView: "quiz" | "result" | "settings") => {
  currentView = newView;
};

const init = () => {
  if ($quiz) $quiz.classList.add("hidden");
  if ($settings) $settings.classList.add("hidden");
  if ($result) $result.classList.add("hidden");

  const initialSettings = getSettingsFromLocalStorage();

  if (!initialSettings.category || initialSettings.category.trim() === "") {
    settings.category = "Linux";
    const linuxButton = document.querySelector(".category-card button");
    if (linuxButton && linuxButton.textContent === "Linux") {
      linuxButton.classList.add("selected");
    }

    saveSettingsToLocalStorage(
      settings.category,
      settings.difficulty,
      settings.limit
    );

    fetchQuiz(settings)
      .then(() => {
        console.log("Quiz fetched successfully");
      })
      .catch((error) => {
        console.error("Error fetching quiz:", error);
      });
  }

  currentView = "settings";
  showUI();
};

const showUI = () => {
  if (currentView === "quiz") {
    if ($quiz) $quiz.classList.remove("hidden");
    if ($settings) $settings.classList.add("hidden");
    if ($result) $result.classList.add("hidden");
    showExitButton(true);
  } else if (currentView === "settings") {
    if ($quiz) $quiz.classList.add("hidden");
    if ($settings) $settings.classList.remove("hidden");
    if ($result) $result.classList.add("hidden");
    showExitButton(false);
    showSettingsUI();
  } else if (currentView === "result") {
    if ($quiz) $quiz.classList.add("hidden");
    if ($settings) $settings.classList.add("hidden");
    if ($result) $result.classList.remove("hidden");
    showExitButton(true);
  }
};

const showSettingsUI = () => {
  const $btn = document.getElementById("btn-startQuiz");
  $btn?.addEventListener("click", () => {
    currentView = "quiz";
    settings = {
      category: "Linux",
      difficulty: getSelectedDifficulty() as "Easy" | "Medium" | "Hard",
      limit: 20,
    };

    fetchQuiz(settings)
      .then((data) => {
        questions = data;
        showUI();
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const difficultyButtons = document.querySelectorAll(
    ".difficulty-card button"
  );
  difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setDifficultyButtonSelected(button);
    });
  });
};

const loadQuestion = async () => {
  try {
    if (questions && $list && $question && $difficulty) {
      $difficulty.innerHTML = `<p>${questions
        .map((q) => q.difficulty)
        .join("")}</p>`;
      $question.innerHTML = `<h2>${questions
        .map((q) => q.question)
        .join("")}</h2>`;

      $list.innerHTML = `<ul>
        ${questions.map(
          (q) =>
            `<li class="card">
              ${q.answers.answer_a}
            </li>
            <li class="card">
              ${q.answers.answer_b}
            </li>
            <li class="card">
              ${q.answers.answer_c ?? ""}
            </li>
            <li class="card">
              ${q.answers.answer_d ?? ""}
            </li>`
        )}
      </ul>`;
    }
  } catch (error) {
    console.error(error);
  }
};

export { loadQuestion };

const showExitButton = (show: boolean) => {
  const exitButtonContainer = document.querySelector(".exit-button-container");
  if (exitButtonContainer) {
    if (show) {
      exitButtonContainer.classList.remove("hidden");
    } else {
      exitButtonContainer.classList.add("hidden");
    }
  }
};

const getSelectedDifficulty = () => {
  const selectedDifficultyButton = document.querySelector(
    ".difficulty-card button.selected"
  );
  return selectedDifficultyButton
    ? selectedDifficultyButton.textContent || "Easy"
    : "Easy";
};

const setDifficultyButtonSelected = (selectedButton: Element) => {
  const difficultyButtons = document.querySelectorAll(
    ".difficulty-card button"
  );
  difficultyButtons.forEach((button) => {
    button.classList.remove("selected");
  });

  selectedButton.classList.add("selected");
};

export { init, showUI, setCurrentView };
