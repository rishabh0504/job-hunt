import './index.css';
import logo from '../../assets/down.png';
import { useState } from 'react';
const MultiSelect = (props) => {
    const { name, options = [], defaultSelected = [] } = props;
    const [selectedData, setSelectedData] = useState(defaultSelected);

    const clickHandler = (item, name) => {
        const newSelectedData = [...selectedData, item.value];
        props.selectedItem({
            name,
            value: newSelectedData
        })

        setSelectedData(newSelectedData);
    }
    return (
        <div className='row d-flex'>
            {
                options && options.map((item, index) => {
                    const activeClass = selectedData.includes(item.value) ? 'btn-active' : '';

                    return (
                        <div className="form-check  col-lg-4 col-md-6 col-sm-6 col-xs-6 " key={index} >
                            <input className="form-check-input" type="checkbox" name={name} value={item.value} className='d-none' />
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

export default MultiSelect;