import './form.scss';

const Form = (props) => {
    const {submit, children} = props;
    return (
        <form onSubmit={submit} className='form'>
            <div className="form__content">
                {children}
            </div>
        </form>
    )
}

export default Form;
