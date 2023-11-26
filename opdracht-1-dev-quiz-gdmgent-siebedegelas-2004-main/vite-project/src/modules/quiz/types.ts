// definieer hier de types van Quiz
export type Settings = {
  category: "Linux" | "DevOps" | "Code" | "SQL" | "CMS" | "Docker" | "Bash";
  difficulty: "Easy" | "Medium" | "Hard";
  limit: number;
};

export type QuizResult = {};

export type Question = {
  id: number;
  question: string;
  description: string | null;
  answers: {
    answer_a: string;
    answer_b: string;
    answer_c: string | null;
    answer_d: string | null;
    answer_e: string | null;
    answer_f: string | null;
  };
  multiple_correct_answers: string;
  explanation: string | null;
  tip: string | null;
  tags: string[];
  category: string;
  difficulty: string;
};

export type QuestionSingleAnswer = Question & {
  multiple_correct_answers: "false";
  correct_answer: string;
};

export type QuestionMultipleAnswer = Question & {
  multiple_correct_answers: "true";
  correct_answer: {
    correct_answers: {
      answer_a_correct: "true" | "false";
      answer_b_correct: "true" | "false";
      answer_c_correct: "true" | "false";
      answer_d_correct: "true" | "false";
      answer_e_correct: "true" | "false";
      answer_f_correct: "true" | "false";
    };
    correct_answer: string | null;
  };
};

export type QuestionType = QuestionSingleAnswer | QuestionMultipleAnswer;
