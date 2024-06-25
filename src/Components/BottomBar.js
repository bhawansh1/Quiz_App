import React from 'react';
import '../Styles/BottomBar.css'
import {quesAction} from './Store/index'
import { useDispatch } from 'react-redux';
function BottomBar({curr,index}) {
  const dispatch = useDispatch()
  const mark = ()=>{
    dispatch(quesAction.markQues({ id: index })); 

  }
  const clearResponse = ()=>{
    dispatch(quesAction.clearQues({ id: index })); 

  }
  const next = ()=>{
    dispatch(quesAction.nextQues({})); 
  }
  return (
    <div className="bottom-bar">
      <div className="action-button" onClick={clearResponse}>Clear Response</div>
      <div className="action-button" onClick={mark}>Mark</div>
      <div className="action-button" onClick={next}>Next</div>

    </div>
  );
}

export default BottomBar;
