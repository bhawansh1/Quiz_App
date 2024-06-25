import { createSlice, configureStore } from "@reduxjs/toolkit";
import Data from '../../Question.json'

let questions = Data 
function shuffleArray(array) {
  const shuffledArray = [...array]; 

  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  const shuffledArrayWithId = shuffledArray.map((element, index) => ({
    ...element,
    id: index,
    current: null, // use this for the current selected option of that answer
    marked: false, // will use this to check whether it is marked or answered
}));


  return shuffledArrayWithId;
}


questions = shuffleArray(questions);
let answeredCount=0, markedCount = 0, activeQuestion = 0

let initialState = {
    questions,
    activeQuestion,
    answeredCount,
    markedCount,
}

const questionSlice = createSlice({
    name:'question data',
    initialState,
    reducers:{
         markQues(state,action){
            if (!state.questions[action.payload.id].marked)
            {
                state.markedCount+=1
                state.questions[action.payload.id].marked = true
            }
            },
          clearQues(state,action){
            if (state.questions[action.payload.id].marked)
            {
                state.markedCount-=1
                state.questions[action.payload.id].marked = false
            }
            if(state.questions[action.payload.id].current)
            {
                state.answeredCount-=1
                state.questions[action.payload.id].current = null
            }           
          },
          ansQues(state,action)
          {
            if (!state.questions[action.payload.id].current)
            {
                state.answeredCount+=1
            }
            if (state.questions[action.payload.id].marked==true)
            {
                state.markedCount-=1
                state.questions[action.payload.id].marked = false
            }

            state.questions[action.payload.id].current = action.payload.selected
          },
          setActiveQues(state,action)
          {
            state.activeQuestion = action.payload.selected
          },
          nextQues(state,action)
          {
            state.activeQuestion = (state.activeQuestion+1)%state.questions.length
          },
          reset(state)
          {
            return {
              questions:shuffleArray(Data),
              activeQuestion:0,
              answeredCount:0,
              markedCount:0,
            }
          }
    }
})

const reduxstore = configureStore({
    reducer:{
        markQues : questionSlice.reducer
    }
})

export const quesAction = questionSlice.actions
export default reduxstore;