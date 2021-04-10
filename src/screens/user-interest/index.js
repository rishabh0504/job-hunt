import { useState } from 'react';
import { ProgressBar, Radio, Button } from '../../components';
import User from '../../models/user';
import { useHistory } from "react-router-dom";
import {
    stayTime,
    visitedOptions,
    firendsAndRelative
} from '../../constants';



const UserInterest = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const history = useHistory()

    const clickHandler = (data) => {
        const newUser = { ...user, [data.name]: data.value };
        localStorage.setItem('user', JSON.stringify(newUser))
        setUser(newUser);
    }

    const nextMove = () => {
        history.push('/user-lifestyle');
    }
    const backMove = () => {
        history.push('/');
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
                    <Radio name='everVisitedDubai' options={visitedOptions} selectedItem={clickHandler} defaultSelected={user.everVisitedDubai ? user.everVisitedDubai : ''} />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>Do you have any friends or family in Dubai?</h5>
                <div className="col-12">
                    <Radio name='haveRelative' options={firendsAndRelative} selectedItem={clickHandler} defaultSelected={user.haveRelative ? user.haveRelative : ''} />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <h5 className='ml-3 mr-3'>How long do you want to stay in stay in Dubai?</h5>
                <div className="col-12">
                    <Radio name='stayTime' options={stayTime} selectedItem={clickHandler} defaultSelected={user.stayTime ? user.stayTime : ''} />
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