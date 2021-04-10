import './index.css';
import logo from '../../assets/down.png';
import { useState } from 'react';
const Radio = (props) => {
    const { name, options = [], defaultSelected = false } = props;
    const [selectedData, setSelectedData] = useState(defaultSelected);

    const clickHandler = (item, name) => {
        props.selectedItem({
            ...item, name
        })
        setSelectedData(item.value);
    }
    return (
        <div className='row d-flex'>
            {
                options && options.map((item, index) => {
                    const activeClass = item.value === selectedData ? 'btn-active' : '';
                    return (
                        <div className="form-check  col-lg-6 col-md-6 col-sm-6 col-xs-6 " key={index} >
                            <input className="form-check-input" type="radio" name={name} value={item.value} className='d-none' />
                            <label className="form-check-label" htmlFor={name} onClick={() => clickHandler(item, name)}>
                                <button type="button" className={`btn btn-light btn-sm btn-custom ${activeClass} mt-2`} name='custom-name'>
                                    {
                                        item.location && <span className='m-2'><img src={item.location} className='icon' /></span>
                                    }
                                    {item.label}
                                </button>
                            </label>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Radio;