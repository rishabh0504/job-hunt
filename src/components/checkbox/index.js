import './index.css';
const Checkbox = ({ label, ...rest }) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" {...rest} />
            <label className="form-check-label" htmlFor={`${label}`}>
                {label}
            </label>
        </div>
    )
}

export default Checkbox;