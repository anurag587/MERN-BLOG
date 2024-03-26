import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
