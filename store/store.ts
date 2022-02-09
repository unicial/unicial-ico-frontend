import { configureStore } from "@reduxjs/toolkit";

import alert from "./alert";
import ICOinfoReducer from "./ICOinfo/index";
import buymodal from "./buymodal";

export const store = configureStore({
  reducer: {
    ICOinfo: ICOinfoReducer,
    alert: alert,
    buymodal: buymodal,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
