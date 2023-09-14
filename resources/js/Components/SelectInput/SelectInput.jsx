

const SelectInput = ({list, name}) => {

    const renderInputs = () => {
        return list.map((item) => {
            return <input key={item.id} type="hidden" name={name} value={item.id} />
        })
    }
    return (
        <>
            {renderInputs()}
        </>
    )
}

export default SelectInput;
