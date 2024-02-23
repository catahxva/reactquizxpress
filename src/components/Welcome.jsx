import classes from "./Welcome.module.css";

import { useContext } from "react";

import { QuizContext } from "../store/QuizContext";

function Welcome({ onClick }) {
  const { setStartQuiz } = useContext(QuizContext);

  return (
    <header className={classes.welcome}>
      <h1 className={classes.welcome__title}>Welcome to ReactQuizXpress!</h1>
      <div className={classes.welcome__title__deco}>
        <div
          className={`${classes.welcome__title__deco__element} ${classes.welcome__title__deco__element__left}`}
        ></div>
        <div
          className={`${classes.welcome__title__deco__element} ${classes.welcome__title__deco__element__right}`}
        ></div>
      </div>
      <div className={classes.welcome__container__text}>
        <p>
          Welcome to ReactQuizXpress! Embark on a knowledge-packed adventure
          with 20 questions, each offering 4 answers. Aim for a perfect 100
          points as you explore diverse topics. Let the quiz begin - best of
          luck on your quest!
        </p>
      </div>
      <button
        onClick={() => setStartQuiz(true)}
        className={classes.welcome__btn}
      >
        Start Quiz!
      </button>
    </header>
  );
}

export default Welcome;
