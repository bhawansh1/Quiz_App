import React from 'react';
import '../Styles/StatusBar.css'
import { useSelector } from 'react-redux';
function StatusBar({ questions}) {
  const totalQuestions = questions.length;
  let markedQuestions = useSelector((state)=>state.markQues.markedCount)
  let answeredQuestions = useSelector((state)=>state.markQues.answeredCount)

  const unansweredQuestions = totalQuestions - answeredQuestions;

  return (
    <div className="status-bar">
      <div className="status-item">
        <div className="status-count">{answeredQuestions}</div>
        <div className="status-label">Answered</div>
      </div>
      <div className="status-item">
        <div className="status-count">{markedQuestions}</div>
        <div className="status-label">Marked</div>
      </div>
      <div className="status-item">
        <div className="status-count">{unansweredQuestions}</div>
        <div className="status-label">Unanswered</div>
      </div>
    </div>
  );
}

export default StatusBar;
