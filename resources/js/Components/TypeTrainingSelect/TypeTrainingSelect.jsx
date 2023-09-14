import Select from "@/Components/Select/Select.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleSelect, selectOption} from '@/store/selectListSlice.js';

const TypeTrainingSelect = () => {

    const {type} = useSelector((state) => state.selectList.list);
    const dispatch = useDispatch();

    const toggle = (isOpen) => {
        dispatch(toggleSelect({selectId: type.id, isOpen}));
    }

    const selectOptionHandler = (optionId) => {
        dispatch(selectOption({selectId: type.id, optionId}))
        dispatch(toggleSelect({selectId: type.id, isOpen: type.isOpen}));
    }


    return (
        <Select {...type}
            label="Вид тренировки"
            selectOption={selectOptionHandler}
            toggle={toggle}
        />
    )
}

export default TypeTrainingSelect;
