import './select.scss';
import icon from '../../../image/icons/arrow-down.svg';
import SelectOption from "@/Components/SelectOption/SelectOption.jsx";
import SelectTitle from "@/Components/SelectTitle/SelectTitle.jsx";
import SelectInput from "@/Components/SelectInput/SelectInput.jsx";

const Select = (props) => {

    const {toggle, selectOption, id, label, optionList, isOpen} = props;
    const activeOptions = optionList.filter((option) => option.active);

    const selectCls = isOpen ? 'select open' : 'select';

    const options = isOpen
        ? <SelectOption
            list={optionList}
            click={selectOption}
        />
        : null;

    const toggleHandler = () => toggle(isOpen);
    return (
        <div className={selectCls}>
            <span className="select__label">{label}</span>
            <div onClick={toggleHandler} className="select__top">
                <SelectInput list={activeOptions} name={`${id}[]`} />
                <SelectTitle activeOptions={activeOptions}/>
                <img src={icon} alt="" className="select__arrow"/>
            </div>
            {options}
        </div>
    )
}
export default Select;
