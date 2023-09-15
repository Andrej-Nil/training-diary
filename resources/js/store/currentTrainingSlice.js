import {createSlice, current, createAsyncThunk} from '@reduxjs/toolkit';


const initialState = {
    isTraining: true,
    training: {
        exerciseList: [],
        muscleGroup: 'Ноги/плечи'
    }
}

const currentTrainingSlice = createSlice({
        name: 'currentTraining',
        initialState,
        reducers: {}
    }
)

export default currentTrainingSlice.reducer;
