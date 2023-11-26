// quizSelection.ts
import { fetchQuiz } from "./modules/quiz/api";
import {
  getSettingsFromLocalStorage,
  saveSettingsToLocalStorage,
} from "./localStorage";
import type { Settings } from "./modules/quiz/types";
import { loadQuestion } from "./components/Quiz.ts";

let selectedCategory: Settings["category"] | null = null;
let selectedDifficulty: Settings["difficulty"] = "Easy"; // Standaard moeilijkheidsgraad instellen op "easy"
let selectedNumQuestions: number = 5;

const buttons = document.querySelectorAll(".category-card button");
const numQuestionsInput = document.getElementById(
  "numQuestions"
) as HTMLInputElement;
const difficultySelect = document.getElementById(
  "difficulty"
) as HTMLSelectElement;

document.addEventListener("DOMContentLoaded", () => {
  const initialSettings = getSettingsFromLocalStorage();
  if (!initialSettings.category) {
    // Standaardwaarde als "Linux"
    selectedCategory = "Linux";
    const linuxButton = document.querySelector(
      '.category-card button:contains("Linux")'
    );
    if (linuxButton) {
      linuxButton.classList.add("selected");
    }

    // Standaardwaarden voor difficulty en limit
    selectedDifficulty = "Easy";
    selectedNumQuestions = 20;

    saveSettingsToLocalStorage(
      selectedCategory,
      selectedDifficulty,
      selectedNumQuestions
    );

    startQuiz();
  }

  const startQuizButton = document.getElementById("btn-startQuiz");
  startQuizButton?.addEventListener("click", startQuiz);

  buttons.forEach((button) => {
    if (button.textContent === selectedCategory) {
      button.classList.add("selected");
    }
  });

  const selectedDifficultyRadio = document.querySelector(
    `input[name="difficulty"][value="${selectedDifficulty}"]`
  ) as HTMLInputElement;
  if (selectedDifficultyRadio) {
    selectedDifficultyRadio.checked = true;
  }

  numQuestionsInput.value = selectedNumQuestions.toString();
  difficultySelect.value = selectedDifficulty;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");

    selectedCategory = button.textContent as Settings["category"];

    const selectedDifficultyRadio = document.querySelector(
      'input[name="difficulty"]:checked'
    ) as HTMLInputElement;
    selectedDifficulty =
      (selectedDifficultyRadio?.value as Settings["difficulty"]) || "Easy";

    selectedNumQuestions = parseInt(numQuestionsInput.value, 10);

    saveSettingsToLocalStorage(
      selectedCategory,
      selectedDifficulty,
      selectedNumQuestions
    );

    const settingsSection = document.getElementById("settings");
    settingsSection?.classList.remove("hidden");

    console.log("Fetching quiz with settings:", {
      category: selectedCategory,
      difficulty: selectedDifficulty,
      limit: selectedNumQuestions,
    });

    startQuiz(); // Call startQuiz after updating settings
  });
});

async function startQuiz() {
  if (selectedCategory) {
    try {
      const questions = await fetchQuiz({
        category: selectedCategory,
        difficulty: selectedDifficulty,
        limit: selectedNumQuestions,
      });

      console.log("Quiz fetched successfully:", questions);

      // Render de layout nadat de vragen zijn opgehaald
      loadQuestion();
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  }
}
