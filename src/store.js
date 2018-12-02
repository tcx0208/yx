import { createStore } from 'redux'

var initState = { 
                    score: 0
                }
var fn = function (state = initState, action) {
    var score = state.score
    switch (action.type) {
        case 'addScore':
        score =  score + action.currentScore
        return { score: score }

        default:
            return state
    }
}




const store = createStore(fn)



export default store;