import {configureStore} from "@reduxjs/toolkit";
import startTrainingSlice from './startTrainingSlice.js';
import selectListSlice from "@/store/selectListSlice.js";

export default configureStore({
    reducer: {
        startTraining: startTrainingSlice,
        selectList: selectListSlice,

    }
})
