import classes from "./FinishAnswers.module.css";

import { useContext } from "react";

import { QuizContext } from "../store/QuizContext";

function FinishAnswers() {
  const { questions, correctAnswers, userAnswers } = useContext(QuizContext);

  const mappedQuestions = questions.map((question) => question.question);

  return (
    <div className={classes.finish__container__answers}>
      <h2 className={classes.finish__answers__title}>Your answers</h2>
      {mappedQuestions.map((question, i) => {
        return (
          <div className={classes.finish__answer}>
            <span className={classes.finish__answer__question}>{question}</span>
            <p className={classes.finish__p__margin__b}>
              Correct answer:{" "}
              <span className={classes.finish__answer__correct}>
                {correctAnswers[i]}
              </span>
            </p>
            <p className={classes.finish__p__margin__b}>
              Your Answer:{" "}
              <span
                className={`${classes.finish__answer__user} ${
                  correctAnswers[i] === userAnswers[i]
                    ? classes.finish__answer__user__correct
                    : undefined
                }`}
              >
                {userAnswers[i]}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FinishAnswers;
