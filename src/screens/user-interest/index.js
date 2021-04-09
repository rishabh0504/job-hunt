import { Button, Select, Input, Checkbox, ProgressBar } from '../../components';

const UserInterest = () => {
    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='20' max='100' />
            </div>
        </>
    )
}

export default UserInterest;