import { useState } from 'react';
import './index.css';
import { Button, Select, Input, Checkbox, ProgressBar } from '../../components';
import User from '../../models/user';
import edit from '../../assets/edit.png';

const ReviewApplication = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);

    // const changeHandler = (event) => {

    // }

    // const applyNow = () => {
    //     localStorage.setItem('user', JSON.stringify(user))
    // }

    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='100' max='100' />
            </div>
            <div className="row m-3">
                <div className="col-12">
                    <div className="jumbotron d-flex">
                        <h4 className='text-primary'>Basic Information</h4>
                        <img src={edit} className='img' />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron">
                        <p><b>Name :</b> {user.firstName} {user.lastName}</p>
                        <p><b>Date of birth : </b>{user.dateOfBirth}</p>
                        <p><b>Gender : </b>{user.dateOfBirth}</p>
                        <p><b>Nationality : </b>{user.dateOfBirth}</p>
                        <p><b>Country of residence : </b>{user.dateOfBirth}</p>
                        <p><b>Contact Number : </b>{user.dateOfBirth}</p>
                        <p><b>Email: : </b>{user.dateOfBirth}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewApplication;