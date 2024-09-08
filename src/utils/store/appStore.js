import { configureStore} from "@reduxjs/toolkit"
import userReducer from "../store/userSlice"
import moviesReducer from "./moviesSlice"
import gptSlice from "../store/gptSlice";
import configReducer from "./configSlice"
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptSlice,
        config: configReducer
    }
});
export default appStore