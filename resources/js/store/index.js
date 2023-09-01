import {configureStore} from "@reduxjs/toolkit";
import testReducer from './testSlise'

export default configureStore({
    reducer: {
        test: testReducer,
    }
})
