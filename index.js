const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = ' BUY_ICECREAM'

// ACTION CREATORS IS A FUNCTION THAT REUTURNS AN ACTION OBJECT
const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

const buyIcecream = () => {
    return {
        type: BUY_ICECREAM
    }
}

// REDUCER IS A FUNCTION THAT TAKES INITIAL STATE AND ACTION TO RETURN THE NEW STATE
// reducer (prevState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20
// }


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
        // case BUY_ICECREAM: return {
        //     ...state,
        //     numOfIcecreams: state.numOfIcecreams - 1
        // }
//         default: return state;
//     }
// }

const initialCakeState = {
    numOfCakes: 10
}
const initialIcecreamState = {
    numOfIcecreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// const store = createStore(reducer)
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()