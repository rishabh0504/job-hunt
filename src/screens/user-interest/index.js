import { useState } from 'react';
import { ProgressBar, Radio, Button } from '../../components';
import User from '../../models/user';

const visitedOptions = [
    {
        label: 'Yes',
        value: true,
        location: '/images/up.png'
    },
    {
        label: 'No',
        value: false,
        location: '/images/down.png'
    }
]
const firendsAndRelative = [
    {
        label: 'Yes',
        value: true,
        location: '/images/up.png'
    },
    {
        label: 'No',
        value: false,
        location: '/images/down.png'
    }
]
const stayTime = [
    {
        label: 'Upto 3 months',
        value: '3',
        location: '/images/calender.png'
    },
    {
        label: '3 to 6 months',
        value: '3-6',
        location: '/images/calender.png'
    },
    {
        label: '6 to 12 months',
        value: '6-12',
        location: '/images/calender.png'
    },
    {
        label: '+12 months',
        value: '12+',
        location: '/images/calender.png'
    },
    {
        label: '+3 years',
        value: '+3y',
        location: '/images/calender.png'
    },
]

const UserInterest = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const clickHandler = (data) => {
    }

    const nextMove = () => {

    }
    const backMove = () => {

    }
    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='20' max='100' />
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>Have you ever visited Dubai?</h5>
                <div className="col-12">
                    <Radio name='everVisitedDubai' options={visitedOptions} selectedItem={clickHandler} />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>Do you have any friends or family in Dubai?</h5>
                <div className="col-12">
                    <Radio name='haveRelative' options={firendsAndRelative} selectedItem={clickHandler} />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>How long do you want to stay in stay in Dubai?</h5>
                <div className="col-12">
                    <Radio name='stayTime' options={stayTime} selectedItem={clickHandler} />
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

export default UserInterest;