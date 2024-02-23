import { createContext, useEffect, useState } from "react";

import { questions } from "../util/questions";

export const QuizContext = createContext({
  startQuiz: false,
  setStartQuiz: () => {},
  finishedQuiz: false,
  setFinishedQuiz: () => {},
  questions: [],
  correctAnswers: [],
  userAnswers: [],
  setUserAnswers: () => {},
  score: 0,
  resetQuiz: () => {},
});

function QuizContextProvider({ children }) {
  const [startQuiz, setStartQuiz] = useState();

  const [finishedQuiz, setFinishedQuiz] = useState();

  const [userAnswers, setUserAnswers] = useState([]);
  const correctAnswers = questions.map((question) => {
    return question.correctAnswer;
  });

  const [score, setScore] = useState(0);

  useEffect(() => {
    if (finishedQuiz) {
      userAnswers.forEach((answer, i) => {
        if (answer === correctAnswers[i])
          setScore((prevScore) => prevScore + 5);
      });
    }
  }, [finishedQuiz]);

  const resetQuiz = function () {
    setStartQuiz(false);
    setFinishedQuiz(false);
    setUserAnswers([]);
    setScore(0);
  };

  const quizContextValue = {
    startQuiz,
    setStartQuiz,
    finishedQuiz,
    setFinishedQuiz,
    questions,
    correctAnswers,
    userAnswers,
    setUserAnswers,
    score,
    resetQuiz,
  };

  return (
    <QuizContext.Provider value={quizContextValue}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContextProvider;
