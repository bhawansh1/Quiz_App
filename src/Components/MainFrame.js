import React, { useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Question from './Question';
import QuestionNav from './QuestionNav';
import StatusBar from './StatusBar';
import BottomBar from './BottomBar';
import NavigationBar from './NavigationBar';
import '../Styles/MainFrame.css'
import {quesAction} from './Store/index'
function MainFrame() {
    let data = useSelector((state) => state.markQues.questions)
    let currentInd = useSelector((state)=>state.markQues.activeQuestion)
    const [curr,setCurr] = useState(data[currentInd].current)

    const dispatch = useDispatch()

    const setActiveQuestion = (id)=>{
        dispatch(quesAction.setActiveQues({ selected: id })); 
    }



    return (
        <React.Fragment>
            <div>
                <div className='main-block'>
                    <div className='left-block'>
                        <div className='status-bar-block'>
                            <StatusBar questions={data} ></StatusBar>
                        </div>
                        <div className='question-block'>
                            <Question
                                data={data} currQues={data[currentInd]} setCurr={setCurr}/>
                        </div>
                        <BottomBar curr={curr} index={currentInd}/>
                        <NavigationBar />

                    </div>

                    <div className='question-nav-block'>
                        <QuestionNav questions={data} setActiveQuestion={setActiveQuestion} index={currentInd}></QuestionNav>
                    </div>


                </div>

            </div>

        </React.Fragment>
    )
}

export default MainFrame