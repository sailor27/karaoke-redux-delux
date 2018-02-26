const middlewareLogger = store => next => action => {
  console.log('Original State:', store.getState());
  console.log('Current Action:', action);
  next(action);
  console.log('New Updated State:', store.getState());
};

export default middlewareLogger;

//logs current state of store to console
//logs action that was dispatched to invoke it
//next tells redux to continue workflow
//log results of store.getState to see how state has changed after we unpause and allow action to reach reducer
