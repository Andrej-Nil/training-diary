import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const startTrainingSlice = createSlice({
    name: 'startTraining',
    initialState: {
        isShowCreateForm: false,

    },
    reducers: {
        showCreateForm(state) {
            state.isShowCreateForm = true;
        },
        hideCreateForm(state) {
            state.isShowCreateForm = false;
        },
    }


})

export const {showCreateForm, hideCreateForm} = startTrainingSlice.actions
export default startTrainingSlice.reducer;
