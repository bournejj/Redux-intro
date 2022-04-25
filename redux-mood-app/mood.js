



const INITIAL_STATE = { mood: '(^_^)/'}

const  moodReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'HAPPY':
            return {...state, mood: state.mood = action.payload }
        case 'SAD':
            return {...state, mood: state.mood = action.payload}
        case 'ANGRY':
            return {... state, mood: state.mood = action.payload}
        case 'CONFUSED':
            return {... state, mood: state.mood = action.payload}
    }

    return state;
}

const store = Redux.createStore(moodReducer);