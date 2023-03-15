import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/";
import {
  changeUsername,
  changePassword,
  changeFirstName,
  changeLastName,
  clearState,
  infoReducer,
} from "./slices/infoSlice";
import { userApi } from "./api/userApi";

const store = configureStore({
  reducer: {
    info: infoReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  store,
  changeUsername,
  changePassword,
  changeFirstName,
  changeLastName,
  clearState,
};
export { useFetchUserQuery, useAddUserMutation, useSearchUserQuery } from "./api/userApi";
