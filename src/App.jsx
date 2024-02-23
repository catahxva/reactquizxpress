import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { QuizContext } from "./store/QuizContext";

import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Finish from "./components/Finish";

function App() {
  const { startQuiz, finishedQuiz } = useContext(QuizContext);

  return (
    <main>
      <AnimatePresence>
        {!startQuiz && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -250 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Welcome />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {startQuiz && !finishedQuiz && (
          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -250 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Quiz />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {finishedQuiz && (
          <motion.div
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -250 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Finish />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
