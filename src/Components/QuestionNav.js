import React from 'react';
import '../Styles/QuestionNav.css';

function QuestionNav({ questions, setActiveQuestion,index }) {
  const questionNumbers = [];
  for (let i = 0; i < questions.length; i++) {
    questionNumbers.push(i + 1);
  }
  const handleQuestionClick = (questionNumber) => {
    setActiveQuestion(questionNumber);
  };

  return (
    <div className="question-nav">
      <ul>
        {questionNumbers.map((questionNumber) => (
          <li className={`${questionNumber-1 === index ? 'selected-question' : ''}  `} key={questionNumber}>
            <button className={`${questions[questionNumber-1].current ? 'answered' : ''} ${questions[questionNumber-1].marked ? 'marked' : ''} `} onClick={() => handleQuestionClick(questionNumber-1)}>
            {questionNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionNav;
