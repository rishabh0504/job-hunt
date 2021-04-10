import { useState } from 'react';
import { ProgressBar, Radio, Button } from '../../components';
import User from '../../models/user';
import { useHistory, Link } from "react-router-dom";
import { reasonToTravel } from '../../constants';



const UserLifestyle = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const history = useHistory()
    const clickHandler = (data) => {
        const newUser = { ...user, [data.name]: data.value };
        localStorage.setItem('user', JSON.stringify(newUser))
        setUser(newUser);
    }

    const nextMove = () => {
        history.push('/work-interest');
    }
    const backMove = () => {
        history.push('/user-detail');
    }
    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='20' max='100' />
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>Why do you want to come to dubai?</h5>
                <div className="col-12">
                    <Radio name='reasonToTravel' options={reasonToTravel} selectedItem={clickHandler} defaultSelected={user.reasonToTravel ? user.reasonToTravel : ''} />
                </div>
            </div>

            <div className="row d-flex mt-3">
                <div className="col-3 d-flex align-center">
                    <Link to="/user-detail">Back</Link>
                </div>
                <div className="col-3">
                    <Button type='button' label='Next' onClick={nextMove} />
                </div>
            </div>
        </>
    )
}

export default UserLifestyle;