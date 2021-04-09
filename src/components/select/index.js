
import './index.css';
const Select = ({ label, options = [], ...rest }) => {
    return (
        <form className="form-group">
            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example" {...rest}>
                <option selected>{label}</option>
                {
                    Array.isArray(options) && options.map((item, index) => {
                        return <option key={index} value={item?.alpha2Code}>{item?.name}</option>
                    })
                }
            </select>
        </form>
    )
}

export default Select;