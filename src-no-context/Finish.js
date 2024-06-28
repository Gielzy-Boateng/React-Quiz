import RestartButton from "./RestartButton";

const Finish = ({ points, maxPossibleQuestions, highscore, dispatch }) => {
  const percentage = (points / maxPossibleQuestions) * 100;

  let emoji;

  // 🥇🎉😁🤦‍♂️😖

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😁";
  if (percentage >= 0 && percentage < 50) emoji = "😖";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You score <strong>{points}</strong> out of {maxPossibleQuestions} (
        {Math.ceil(percentage)}
        %)
      </p>

      <p className="highscore">Highscore: {highscore}</p>

      <RestartButton dispatch={dispatch} />
    </>
  );
};

export default Finish;
