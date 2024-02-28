import classes from "./QuizControls.module.css";

import { useContext } from "react";

import { QuizContext } from "../store/QuizContext";

function QuizControls({ currentQuestion, setCurrentQuestion }) {
  const { userAnswers, questions, setFinishedQuiz } = useContext(QuizContext);

  return (
    <div className={classes.quiz__controls}>
      <div className={classes.quiz__controls__container__btn}>
        {currentQuestion !== 0 && (
          <button
            onClick={() => {
              setCurrentQuestion((prevQuestion) => {
                return prevQuestion - 1;
              });
            }}
            className={classes.quiz__controls__btn}
          >
            Previous
          </button>
        )}
      </div>
      <span className={classes.quiz__controls__span}>
        {currentQuestion + 1}/{questions.length}
      </span>
      <div className={classes.quiz__controls__container__btn}>
        {currentQuestion + 1 !== questions.length && (
          <button
            onClick={() => {
              setCurrentQuestion((prevQuestion) => {
                return prevQuestion + 1;
              });
            }}
            className={classes.quiz__controls__btn}
            disabled={!(userAnswers.length >= currentQuestion + 1)}
          >
            Next
          </button>
        )}
        {userAnswers.length === questions.length &&
          currentQuestion + 1 === questions.length && (
            <button
              onClick={() => {
                setFinishedQuiz(true);
                console.log("clicked");
              }}
              className={classes.quiz__controls__btn}
            >
              Finish
            </button>
          )}
      </div>
    </div>
  );
}

export default QuizControls;
