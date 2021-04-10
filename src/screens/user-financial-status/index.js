import { useState } from 'react';
import { ProgressBar, Radio, Button } from '../../components';
import User from '../../models/user';
import { useHistory } from "react-router-dom";

const finanicalSavings = [
    {
        label: 'No Savings',
        value: 'No Savings',
        location: '/images/calender.png'
    },
    {
        label: '1 to 1000 AED',
        value: '1 to 1000 AED',
        location: '/images/calender.png'
    },
    {
        label: '1000 to 5000 AED',
        value: '1000 to 5000 AED',
        location: '/images/calender.png'
    },
    {
        label: '5000 to 10000 AED',
        value: '5000 to 10000 AED',
        location: '/images/calender.png'
    },
    {
        label: '10000 to 20000 AED',
        value: '10000 to 20000 AED',
        location: '/images/calender.png'
    },
    {
        label: '20000 to 50000 AED',
        value: '20000 to 50000 AED',
        location: '/images/calender.png'
    },
    {
        label: '50000+ AED',
        value: '50000+ AED',
        location: '/images/calender.png'
    },

];

const levelOfEducation = [
    {
        label: 'High school or less',
        value: 'High school or less',
        location: '/images/calender.png'
    },
    {
        label: 'Collage',
        value: 'Collage',
        location: '/images/calender.png'
    },
    {
        label: 'Diploma',
        value: 'Diploma',
        location: '/images/calender.png'
    },
    {
        label: 'Batchelors',
        value: 'Batchelors',
        location: '/images/calender.png'
    },
]

const educationCompletion = [
    {
        label: 'Right now',
        value: 'Right now',
        location: '/images/calender.png'
    },
    {
        label: '0 to 3 months',
        value: '0 to 3 months',
        location: '/images/calender.png'
    },
    {
        label: '3 to 6 months',
        value: '3 to 6 months',
        location: '/images/calender.png'
    },
    {
        label: '6 to 12 months',
        value: '6 to 12 months',
        location: '/images/calender.png'
    },
    {
        label: 'After 1 year',
        value: 'After 1 year',
        location: '/images/calender.png'
    }, {
        label: "I'm not sure",
        value: "I'm not sure",
        location: '/images/calender.png'
    },
]

const UserFinancialStatus = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const history = useHistory()

    const clickHandler = (data) => {
        const newUser = { ...user, [data.name]: data.value };
        localStorage.setItem('user', JSON.stringify(newUser))
        setUser(newUser);
    }

    const nextMove = () => {
        history.push('/review');
    }
    const backMove = () => {
        history.push('/user-questionnaire');
    }
    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='80' max='100' />
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>Do you have any financial savings?</h5>
                <div className="col-12">
                    <Radio name='finanicalSavings' options={finanicalSavings} selectedItem={clickHandler} defaultSelected={user.finanicalSavings ? user.finanicalSavings : ''} />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>What is your level of education?</h5>
                <div className="col-12">
                    <Radio name='levelOfEducation' options={levelOfEducation} selectedItem={clickHandler} defaultSelected={user.levelOfEducation ? user.levelOfEducation : ''} />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>What is your level of education?</h5>
                <div className="col-12">
                    <Radio name='educationCompletion' options={educationCompletion} selectedItem={clickHandler} defaultSelected={user.educationCompletion ? user.educationCompletion : ''} />
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

export default UserFinancialStatus;