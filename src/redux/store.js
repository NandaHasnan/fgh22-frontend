import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import reducer from './reducers';



const store = configureStore({
  reducer,

  
});

const persistor = persistStore(store);

export { store, persistor };


// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers';

// export const store = configureStore({
//   reducer,
// });