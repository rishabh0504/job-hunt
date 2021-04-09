
import './index.css';
const Input = ({ label, type, error = false, ...rest }) => {
    const errorClass = error ? 'is-invalid' : '';
    return (
        <form className="form-floating">
            <input type={`${type}`} className={`form-control form-control-xs ${errorClass}`} placeholder="First name" {...rest} />
            <label htmlFor={`${label}`}>{label}</label>
        </form>
    )
}

export default Input;