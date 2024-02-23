import classes from "./Quiz.module.css";

import { useState, useContext } from "react";

import { QuizContext } from "../store/QuizContext";

import QuizQuestion from "./QuizQuestion";
import QuizControls from "./QuizControls";

function Quiz() {
  const { questions } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const selectedQuestion = questions[currentQuestion];

  return (
    <section className={classes.quiz}>
      <QuizQuestion
        question={selectedQuestion}
        questionIndex={currentQuestion}
      />
      <QuizControls
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </section>
  );
}

export default Quiz;
