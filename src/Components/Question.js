import React from 'react';
import '../Styles/Question.css'
import { useDispatch } from 'react-redux';
import { quesAction } from './Store/index';
function Question({currQues,setCurr,data}) {

  const dispatch = useDispatch()
  const handleOptionClick = (option) => {
    dispatch(quesAction.ansQues({id:currQues.id,selected:option}))
    setCurr(option)
  };


  return (
    <div className="question-card">
      <div className="question">{currQues.question}</div>
      <ul className="options">
        {currQues.options.map((option, index) => (
          <li
            key={index}
            className={` option ${currQues.current === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
