const Radio = ({ name, label, options }) => {
    return (
        <>
            {
                Array.isArray(options) && options.map((item, index) => {
                    <>
                        <input type='radio' name={name} value={item.value} className='d-none' />
                        <button> {item.label}</button>
                    </>
                })
            }

        </>
    )
}

export default Radio;