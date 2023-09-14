import Select from "@/Components/Select/Select.jsx";
import {useDispatch, useSelector} from "react-redux";
import {multiselectOption, toggleSelect} from '@/store/selectListSlice.js';

const MuscleGroupSelect = () => {
    const dispatch = useDispatch();
    const {muscle} = useSelector((state) => state.selectList.list);

    const selectOptionHandler = (optionId) => {
        dispatch(multiselectOption({selectId: muscle.id, optionId}));
    }

    const toggle = (isOpen) => {
        dispatch(toggleSelect({selectId: muscle.id, isOpen}));
    }
    return (

        <Select
            label="Группы мышц"
            {...muscle}
            selectOption={selectOptionHandler}
            toggle={toggle}
        />
    )
}

export default MuscleGroupSelect;
