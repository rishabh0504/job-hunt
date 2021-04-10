import { useState } from 'react';
import { ProgressBar, Radio, Button } from '../../components';
import User from '../../models/user';

const reasonToTravel = [
    {
        label: 'Lifestyle',
        value: 'Lifestyle',
        location: '/images/calender.png'
    },
    {
        label: 'Work opportunities',
        value: 'Work opportunities',
        location: '/images/calender.png'
    },
    {
        label: 'Education',
        value: 'Education',
        location: '/images/calender.png'
    },
    {
        label: 'Finance',
        value: 'Finance',
        location: '/images/calender.png'
    },
    {
        label: 'Tourism',
        value: 'Tourism',
        location: '/images/calender.png'
    },
    {
        label: 'Business',
        value: 'Business',
        location: '/images/calender.png'
    },
    {
        label: 'Security',
        value: 'Security',
        location: '/images/calender.png'
    },
    {
        label: 'Culture',
        value: 'Culture',
        location: '/images/calender.png'
    },
    {
        label: 'Family',
        value: 'Family',
        location: '/images/family.png'
    },
]

const UserLifestyle = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);

    const clickHandler = (data) => {
        const newUser = { ...user, [data.name]: data.value };
        localStorage.setItem('user', JSON.stringify(newUser))
        setUser(newUser);
    }

    const nextMove = () => {

    }
    const backMove = () => {

    }
    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='40' max='100' />
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>Why do you want to come to dubai?</h5>
                <div className="col-12">
                    <Radio name='reasonToTravel' options={reasonToTravel} selectedItem={clickHandler} defaultSelected={user.reasonToTravel ? user.reasonToTravel : ''} />
                </div>
            </div>

            <div className="row d-flex mt-3">
                <div className="col-3">
                    <Button type='button' label='Back' onClick={backMove} />
                </div>
                <div className="col-3">
                    <Button type='button' label='Next' onClick={nextMove} />
                </div>
            </div>
        </>
    )
}

export default UserLifestyle;