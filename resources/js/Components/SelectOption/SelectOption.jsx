import './select-option.scss';
import Input from "@/Components/Input/Input.jsx";
import Option from "@/Components/Option/Option.jsx";
import {useState} from "react";

const SelectOption = (props) => {
    const {list, click} = props;
    const [value, setValue] = useState('');
    const changeHandler = (e) => setValue(e.target.value);
    const renderSearch = () => {
        const listLength = list.length;
        if(listLength > 6) {
           return (<Input change={changeHandler} value={value} placeholder="Поиск"/>)
        }
        return null
    }
    const filterList = list.filter((option) => {
       return option.title.toLowerCase().includes(value.toLowerCase().trim());
    })

    const renderOptions = () => {
        return filterList.map((option) => <Option key={option.id} click={click}  {...option}/>)
    }
    return (
        <div className="select__options">
            {renderSearch()}
            {renderOptions()}
        </div>
    )
}

export default SelectOption;
