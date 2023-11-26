import type { Question, Settings } from "./types";

const apiKey = import.meta.env.VITE_BASE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_API_URL;

if (!apiKey || !baseUrl) {
  throw new Error("API key or base URL is not provided.");
}

export const fetchQuiz = async (settings: Settings): Promise<Question[]> => {
  const categoryParam = settings.category
    ? `&category=${settings.category}`
    : "";
  const difficultyParam = `&difficulty=${settings.difficulty}`;
  const numQuestionsParam = `&limit=${settings.limit}`;

  const apiUrl = `${baseUrl}?apiKey=${apiKey}${categoryParam}${difficultyParam}${numQuestionsParam}`;

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data: Question[] = await response.json();

      if (Array.isArray(data)) {
        console.log("API URL:", apiUrl);
        return data;
      } else {
        throw new Error("Invalid API response format: expected an array.");
      }
    } else {
      throw new Error(
        `Failed to fetch questions with status ${response.status}`
      );
    }
  } catch (error) {
    throw error;
  }
};

export default fetchQuiz;
