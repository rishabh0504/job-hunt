import { useState } from 'react';
import './index.css';
import { Button, Select, Input, Checkbox, ProgressBar } from '../../components';
import User from '../../models/user';
import edit from '../../assets/edit.png';
import { useHistory } from "react-router-dom";

const ReviewApplication = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const history = useHistory();

    const editUserData = (routePath) => {
        history.push(routePath);
    }

    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='100' max='100' />
            </div>
            <div className="row m-3">
                <div className="col-12 mt-2">
                    <div className="jumbotron d-flex">
                        <h4 className='text-primary'>Basic Information</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/user-detail') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron">
                        <p><b>Name :</b> {user.firstName} {user.lastName}</p>
                        <p><b>Date of birth : </b>{user.dateOfBirth}</p>
                        <p><b>Gender : </b>{user.gender}</p>
                        <p><b>Nationality : </b>{user.nationality}</p>
                        <p><b>Country of residence : </b>{user.countryOfResidence}</p>
                        <p><b>Contact Number : </b>{user.contactNumber}</p>
                        <p><b>Email: : </b>{user.emailId}</p>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="jumbotron d-flex">
                        <h4 className='text-primary'>Life Style</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/user-lifestyle') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron">
                        <p><b>Name :</b> {user.firstName} {user.lastName}</p>
                        <p><b>Date of birth : </b>{user.dateOfBirth}</p>
                        <p><b>Gender : </b>{user.gender}</p>
                        <p><b>Nationality : </b>{user.nationality}</p>
                        <p><b>Country of residence : </b>{user.countryOfResidence}</p>
                        <p><b>Contact Number : </b>{user.contactNumber}</p>
                        <p><b>Email: : </b>{user.emailId}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewApplication;