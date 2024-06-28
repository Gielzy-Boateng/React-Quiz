import { useQuizContext } from "./Context/QuizContext";
import { useEffect } from "react";

const Timer = () => {
  const { remainingTime, dispatch } = useQuizContext();

  const mins = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      // return function () {
      //   clearInterval(id);
      // };
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
