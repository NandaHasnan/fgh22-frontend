import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import profileReducer from './reducers';



const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, profileReducer);

const store = configureStore({
  reducer: {
    profile: persistedReducer,
  },
  
});

const persistor = persistStore(store);

export { store, persistor };


// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers';

// export const store = configureStore({
//   reducer,
// });