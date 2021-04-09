
import './index.css';
const Input = ({ label, type, ...rest }) => {
    return (
        <form className="form-floating">
            <input type={`${type}`} className="form-control form-control-XS " placeholder="First name" {...rest} />
            <label htmlFor={`${label}`}>{label}</label>
        </form>
    )
}

export default Input;