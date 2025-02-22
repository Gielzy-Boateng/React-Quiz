const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h4>Welcome To The React Quiz!</h4>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
