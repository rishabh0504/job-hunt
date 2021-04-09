import './index.css';
const Button = ({ label, type, ...rest }) => {
    return (
        <button type="button" className="btn btn-secondary btn-custom-css btn-lg" {...rest}>Apply now</button>
    )
}

export default Button;