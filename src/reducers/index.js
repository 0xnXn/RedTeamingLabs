import { combineReducers } from 'redux'

const counter = (state = 0, actions) => {
    switch (actions.type) {
        case "INCR":
            return (state + 1)
        default:
            return state
    }

}

const machines = (state = [],action)=>{
    switch (action.type) {
        case "ADD_MAACHINE":
            state.push(action.payload)
            return [...state]
        default:
            return state
    }
}

export default combineReducers({
    counter,
    machines


})