import { useState } from 'react';
import { ProgressBar, Radio, Button, MultiSelect } from '../../components';
import User from '../../models/user';
import { useHistory } from "react-router-dom";

const areaofInterest = [
    {
        label: 'Outdoors',
        value: 'Outdoors',
        location: '/images/calender.png'
    },
    {
        label: 'Fitness',
        value: 'Fitness',
        location: '/images/calender.png'
    },
    {
        label: 'Health',
        value: 'Health',
        location: '/images/calender.png'
    },
    {
        label: 'Travel',
        value: 'Travel',
        location: '/images/calender.png'
    }, {
        label: 'Sports',
        value: 'Sports',
        location: '/images/calender.png'
    }, {
        label: 'Theme parks',
        value: 'Theme parks',
        location: '/images/calender.png'
    }, {
        label: 'Cooking',
        value: 'Cooking',
        location: '/images/calender.png'
    }, {
        label: 'Adventure',
        value: 'Adventure',
        location: '/images/calender.png'
    }, {
        label: 'Music',
        value: 'Music',
        location: '/images/calender.png'
    }, {
        label: 'Fashion',
        value: 'Fashion',
        location: '/images/calender.png'
    }, {
        label: 'Technology',
        value: 'Technology',
        location: '/images/calender.png'
    }, {
        label: 'Architecture',
        value: 'Architecture',
        location: '/images/calender.png'
    }, {
        label: 'Writing',
        value: 'Writing',
        location: '/images/calender.png'
    }, {
        label: 'Gaming',
        value: 'Gaming',
        location: '/images/calender.png'
    }, {
        label: 'Dining',
        value: 'Dining',
        location: '/images/calender.png'
    },
    {
        label: 'History',
        value: 'History',
        location: '/images/calender.png'
    },
    {
        label: 'Theatre',
        value: 'Theatre',
        location: '/images/calender.png'
    },
    {
        label: 'Networking',
        value: 'Networking',
        location: '/images/calender.png'
    }, {
        label: 'Art',
        value: 'Art',
        location: '/images/calender.png'
    }, {
        label: 'Politics',
        value: 'Politics',
        location: '/images/calender.png'
    }, {
        label: 'Fishing',
        value: 'Fishing',
        location: '/images/calender.png'
    }, {
        label: 'Meet people',
        value: 'Meet people',
        location: '/images/calender.png'
    }, {
        label: 'Podcasts',
        value: 'Podcasts',
        location: '/images/calender.png'
    }, {
        label: 'Gambling',
        value: 'Gambling',
        location: '/images/calender.png'
    }, {
        label: 'Self improvement',
        value: 'Self improvement',
        location: '/images/calender.png'
    }, {
        label: 'Foreign languages',
        value: 'Foreign languages',
        location: '/images/calender.png'
    },
    {
        label: 'Movies',
        value: 'Movies',
        location: '/images/calender.png'
    }, {
        label: 'Celebrities',
        value: 'Celebrities',
        location: '/images/calender.png'
    }, {
        label: 'Dating',
        value: 'Dating',
        location: '/images/calender.png'
    }, {
        label: 'Social media',
        value: 'Social media',
        location: '/images/calender.png'
    }, {
        label: 'Photography',
        value: 'Photography',
        location: '/images/calender.png'
    }
]

const UserQuestionnaire = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const history = useHistory()
    const clickHandler = (data) => {
        console.log(data);
        const newUser = { ...user, [data.name]: data.value };
        localStorage.setItem('user', JSON.stringify(newUser))
        setUser(newUser);
    }

    const nextMove = () => {
        history.push('/financial-status');
    }
    const backMove = () => {
        history.push('/work-interest');
    }
    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='60' max='100' />
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>What are your interests?</h5>
                <div className="col-12">
                    <MultiSelect name='areaofInterest' options={areaofInterest} selectedItem={clickHandler} defaultSelected={user.areaofInterest ? user.areaofInterest : []} />
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

export default UserQuestionnaire;