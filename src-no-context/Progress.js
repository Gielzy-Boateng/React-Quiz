const Progress = ({
  index,
  numQuestions,
  answer,
  maxPossibleQuestions,
  points,
}) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>

      <p>
        {points}/{maxPossibleQuestions}
      </p>
    </header>
  );
};

export default Progress;
