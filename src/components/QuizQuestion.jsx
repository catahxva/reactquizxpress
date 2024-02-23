import classes from "./QuizQuestion.module.css";

import { useContext } from "react";

import { QuizContext } from "../store/QuizContext";

function QuizQuestion({ question, questionIndex }) {
  const { userAnswers, setUserAnswers } = useContext(QuizContext);

  return (
    <div className={classes.quiz__question}>
      <div className={classes.quiz__question__container__title}>
        <h2 className={classes.quiz__question__title}>{question.question}</h2>
      </div>
      <div className={classes.quiz__question__container__answers}>
        {question.answers.map((answer) => {
          return (
            <button
              key={answer}
              onClick={() => {
                setUserAnswers((prevAnswers) => {
                  const answersCopy = [...prevAnswers];

                  answersCopy[questionIndex] = answer;

                  return answersCopy;
                });
              }}
              className={`${classes.quiz__question__answer} ${
                userAnswers.includes(answer)
                  ? classes.quiz__question__answer__selected
                  : undefined
              }`}
            >
              <span className={classes.quiz__question__answer__span}>
                {answer}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuizQuestion;
