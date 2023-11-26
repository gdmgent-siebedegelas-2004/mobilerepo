// localStorage.ts
export const getSettingsFromLocalStorage = () => {
  const settingsString = localStorage.getItem("quizSettings");
  if (settingsString) {
    const settings = JSON.parse(settingsString);
    return {
      category: settings.category || "Linux",
      difficulty: settings.difficulty || "Easy",
      numQuestions: settings.numQuestions || 5,
    };
  }
  return {
    category: "Linux",
    difficulty: "Easy",
    numQuestions: 5,
  };
};

export const saveSettingsToLocalStorage = (
  category: string | null,
  difficulty: string,
  numQuestions: number
) => {
  const settings = {
    category,
    difficulty,
    numQuestions,
  };
  localStorage.setItem("quizSettings", JSON.stringify(settings));
};
