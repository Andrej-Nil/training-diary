import {configureStore} from "@reduxjs/toolkit";
import startTrainingSlice from './startTrainingSlice.js';
import selectListSlice from "@/store/selectListSlice.js";
import currentTrainingSlice from "@/store/currentTrainingSlice.js";

export default configureStore({
    reducer: {
        startTraining: startTrainingSlice,
        selectList: selectListSlice,
        currentTraining: currentTrainingSlice
    }
})
