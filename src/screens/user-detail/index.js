import { checkPropTypes } from 'prop-types';
import { useState } from 'react';
import { Button, Select, Input, Checkbox } from '../../components';
import { validation, UserErrors } from '../../constants';
import User from '../../models/user';
const regExp = new RegExp();

const UserDetail = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const [error, setError] = useState(UserErrors);

    const changeHandler = (event) => {
        const regex = validation[event.target.name] || '.*';
        const data = event.target.value || '';
        const status = data.match(new RegExp(regex));
        if (!status) {
            setError({ ...error, [event.target.name]: true })
        }
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const applyNow = () => {
        localStorage.setItem('user', JSON.stringify(user))
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className=''>Apply now to work in Dubai</h1>
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Input type='text'
                        label='First Name'
                        value={user.firstName}
                        name='firstName'
                        onChange={changeHandler}
                        error={error['firstName']}
                    />
                </div>
                <div className="col-6">
                    <Input type='text'
                        label='Last Name'
                        value={user.lastName}
                        name='lastName'
                        onChange={changeHandler}
                        error={error['lastName']}
                    />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Input type='date' label='Date of birth' value={user.dateOfBirth} name='dateOfBirth' onChange={changeHandler} />
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6 mt-3">
                            <Checkbox label='Male' />
                        </div>
                        <div className="col-6 mt-3">
                            <Checkbox label='Female' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Select label='Nationality' options={[{ name: 'India', alpha2Code: 'In' }, { name: 'United Arab Emirates', alpha2Code: 'UAE' }]} name='nationality' onChange={changeHandler} value={user.nationality} />
                </div>
                <div className="col-6">
                    <Select label='Country of residence' options={[{ name: 'India', alpha2Code: 'In' }, { name: 'United Arab Emirates', alpha2Code: 'UAE' }]} name='countryOfResidence' onChange={changeHandler} value={user.countryOfResidence} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <h3 className=''>How we can contact you?</h3>
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Input type='text' label='Contact number' value={user.contactNumber} name='contactNumber' onChange={changeHandler} />
                </div>
                <div className="col-6">
                    <Input type='email' label='Email address' value={user.emailId} name='emailId' onChange={changeHandler} />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Button type='button' label='Apply now' onClick={applyNow} />
                </div>
            </div>

        </>
    )
}

export default UserDetail;