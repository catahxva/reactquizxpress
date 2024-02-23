import classes from "./Finish.module.css";

import FinishScore from "./FinishScore";
import FinishAnswers from "./FinishAnswers";

function Finish() {
  return (
    <section className={classes.finish}>
      <div className={classes.finish__grid}>
        <FinishAnswers />
        <FinishScore />
      </div>
    </section>
  );
}

export default Finish;
