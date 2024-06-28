import { useQuizContext } from "./Context/QuizContext";
import Options from "./Options";

const Questions = () => {
  const { questions, index } = useQuizContext();

  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options />
    </div>
  );
};

export default Questions;
