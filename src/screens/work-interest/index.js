import { useState } from 'react';
import { ProgressBar, Radio, Button, MultiSelect } from '../../components';
import User from '../../models/user';
import { useHistory } from "react-router-dom";

const industryPreferredForWork = [
    {
        label: 'Construction',
        value: 'Construction',
        location: '/images/calender.png'
    },
    {
        label: 'Hospitality',
        value: 'Hospitality',
        location: '/images/calender.png'
    },
    {
        label: 'Real estate',
        value: 'Real estate',
        location: '/images/calender.png'
    },
    {
        label: 'Tourism',
        value: 'Tourism',
        location: '/images/calender.png'
    },
    {
        label: 'Manufacturing',
        value: 'Manufacturing',
        location: '/images/calender.png'
    },
    {
        label: 'Farming',
        value: 'Farming',
        location: '/images/calender.png'
    },
    {
        label: 'Fishing',
        value: 'Fishing',
        location: '/images/calender.png'
    },
    {
        label: 'Education',
        value: 'Education',
        location: '/images/calender.png'
    },
    {
        label: 'Public services',
        value: 'Public services',
        location: '/images/family.png'
    },
    {
        label: 'Administration',
        value: 'Administration',
        location: '/images/calender.png'
    },
    {
        label: 'Media',
        value: 'Media',
        location: '/images/calender.png'
    },
    {
        label: 'Technology',
        value: 'Technology',
        location: '/images/family.png'
    },
    {
        label: 'Financial services',
        value: 'Financial services',
        location: '/images/family.png'
    },
    {
        label: 'Legal',
        value: 'Legal',
        location: '/images/calender.png'
    },
    {
        label: 'Health care',
        value: 'Health care',
        location: '/images/calender.png'
    },
    {
        label: 'Government',
        value: 'Government',
        location: '/images/family.png'
    },
    {
        label: 'Medical',
        value: 'Medical',
        location: '/images/family.png'
    },
    {
        label: 'Security',
        value: 'Security',
        location: '/images/calender.png'
    },
    {
        label: 'Logistic',
        value: 'Logistic',
        location: '/images/calender.png'
    },
    {
        label: 'Robotics',
        value: 'Robotics',
        location: '/images/family.png'
    },
    {
        label: 'Automotive',
        value: 'Automotive',
        location: '/images/family.png'
    },
    {
        label: 'Transportation',
        value: 'Transportation',
        location: '/images/calender.png'
    },
    {
        label: 'Customer support',
        value: 'Customer support',
        location: '/images/calender.png'
    }
]

const WorkInterest = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const history = useHistory()
    const clickHandler = (data) => {
        const newUser = { ...user, [data.name]: data.value };
        localStorage.setItem('user', JSON.stringify(newUser))
        setUser(newUser);
    }

    const nextMove = () => {
        history.push('/user-questionnaire');
    }
    const backMove = () => {
        history.push('/user-lifestyle');
    }
    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='60' max='100' />
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>What industries would you prefer to work in?</h5>
                <div className="col-12">
                    <MultiSelect name='industryPreferredForWork' options={industryPreferredForWork} selectedItem={clickHandler} defaultSelected={user.industryPreferredForWork ? user.industryPreferredForWork : ''} />
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

export default WorkInterest;