import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    list: {
        type: {
            id: 'type',
            isOpen: false,
            optionList: [
                {id: 'inRoom', title: "Тренировка в зале", active: true},
                {id: 'warm', title: "Зарядка", active: false},
                {id: 'horizontalBar', title: "Турники", active: false},
            ]
        },
        muscle: {
            id: 'muscle',
            isOpen: false,
            optionList: [
                {id: 'pectoral', title: "Грудь", active: false},
                {id: 'back', title: "Спина", active: false},
                {id: 'legs', title: "Ноги", active: false},
                {id: 'biceps', title: "Бицепс", active: false},
                {id: 'triceps', title: "Трицепс", active: false},
                {id: 'shoulders', title: "Плечи", active: false},
                {id: 'fullBody', title: "Все тело", active: false},
            ]
        },
    }

}

const selectListSlice = createSlice({
    name: 'selectList',
    initialState,
    reducers: {
        toggleSelect: (state, action) => {
            state.list[action.payload.selectId].isOpen = !action.payload.isOpen;

        },
        selectOption: (state, action) => {

            const optionList = state.list[action.payload.selectId].optionList;

            const newOptionList = optionList.map((option) => {

                if(option.id === action.payload.optionId) {
                    return {...option, active: true};
                }
                return {...option, active: false};
            })
            state.list[action.payload.selectId].optionList = newOptionList;
        },

        multiselectOption: (state, action)  => {
            const optionList = state.list[action.payload.selectId].optionList;

            const newOptionList = optionList.map((option) => {

                if(option.id === action.payload.optionId) {
                    return {...option, active: !option.active};
                }
                return {...option};
            })
            state.list[action.payload.selectId].optionList = newOptionList;
        }
    }


})

// const startTrainingSlice = createSlice({
//     name: 'startTraining',
//     initialState: {
//         isShowCreateForm: false,
//
//     },
//     reducers: {
//
//     }
//
//
// })
//
export const {toggleSelect, selectOption, multiselectOption} = selectListSlice.actions
export default selectListSlice.reducer;

