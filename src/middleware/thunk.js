export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)  // this is right here is where thunk and applyMiddleware take care of your heavy lifting
    : next(action)

  // export default () => action 
  // typeof action === 'function'
  // ? action(store.dispatch, store.getState)  // this is right here is where thunk and applyMiddleware take care of your heavy lifting
  // : next(action)