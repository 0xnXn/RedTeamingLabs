import { combineReducers } from 'redux'

const counter = (state = 0, actions) => {
    switch (actions.type) {
        case "INCR":
            return (state + 1)
        default:
            return state
    }

}


const machines = (state = [], action) => {
    switch (action.type) {
        case "ADD_MACHINE":
            state.push(action.payload)
            return [...state]
        case "SET_MACHINE":
            console.log(state)
            return [action.payload]
        case "UPDATE_MACHINE":
            var keys = Object.keys(action.payload)
            var val = Object.values(action.payload)
            // state[0] = { ...state.push(action.payload) }
            for (var i = 0; i < keys.length; i++) {
                state[0][keys[i]] = val[i];
            }
            console.log(...state)
            return [...state]
        case "DELETE_MACHINE":
            console.log(state);
            state=[]
            console.log(state);
            return[state]
        default:
            return state
    }
}

export default combineReducers({
    counter,
    machines
})