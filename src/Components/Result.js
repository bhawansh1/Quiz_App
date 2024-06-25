import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { quesAction } from './Store';
import '../Styles/Result.css'

function Result() {
  const navigate = useNavigate();
  const questions = useSelector((state) => state.markQues.questions);
  const dispatch = useDispatch()

  const correctAnswers = questions.filter(
    (question) => question.current === question.answer
  );

  const percentage = (correctAnswers.length / questions.length) * 100;

  const navigateHandler = () => {
    dispatch(quesAction.reset())
    navigate('/');
  };

  return (
    <div className='main-container'>
    <div className="result-container">
      <h1 className="result-header">Result</h1>
      <p className="result-info">
        You answered {correctAnswers.length} out of {questions.length} questions
        correctly.
      </p>
      <p className="result-info">Your score: {percentage.toFixed(2)}%</p>
      <button className="result-button" onClick={navigateHandler}>
        Go Back to the Quiz
      </button>
    </div>
    </div>

  );
}

export default Result;
