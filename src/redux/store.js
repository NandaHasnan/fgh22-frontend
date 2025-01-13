import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import reducer from './reducers';
import bookingReducer from './reducers/booking'
import seatReducer from './reducers/seat'

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
       
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        
      },
    }),
  bookingReducer,
  seatReducer,
});

const persistor = persistStore(store);

export { store, persistor };



// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers';

// export const store = configureStore({
//   reducer,
// });