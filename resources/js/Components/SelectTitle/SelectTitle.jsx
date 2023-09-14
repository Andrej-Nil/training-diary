import './select-title.scss';

const SelectTitle =({activeOptions}) => {

    const titleArr = activeOptions.map((item) => item.title);
    const title = titleArr.length ? titleArr.join('/') : 'Выбор';


    return <span className="select-title">{title}</span>
}

export default SelectTitle;
