import './index.css';
const ProgressBar = ({ value, max = '100', ...rest }) => {
    return (
        <progress value={value} max={max} {...rest}> {value}% </progress>
    )
}

export default ProgressBar;