const redux = require('redux')

const counterREducer = (state = {counter: 0}, action) => {

  if(action.type === 'increament'){
    return{
      counter: state.counter + 1
    }
  }
   if(action.type==='decreament'){
    return {
    counter: state.counter - 1
  }
}
}
const store = redux.createStore(counterREducer)

console.log(store.getState());

const reduxSubscriber = () => {
  const lastestState = store.getState()
  console.log(lastestState);
}

store.subscribe(reduxSubscriber)

store.dispatch({type: 'decreament'})
store.dispatch({type: 'increament'})

