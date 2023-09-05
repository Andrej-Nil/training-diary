import './form.scss';

const Form = (props) => {
    const {submit, children} = props;
    return (
        <form onSubmit={submit} className='form'>
            {children}
        </form>
    )
}

export default Form;
