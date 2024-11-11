import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/registrationReducer';
import products from "./reducers/productsSlice"



export const store = configureStore({
    reducer: {
      registration: registrationReducer,
      products:  products
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
