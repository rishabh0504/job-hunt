import { useState } from 'react';
import { ProgressBar, Radio, Button, MultiSelect } from '../../components';
import User from '../../models/user';
import { useHistory, Link } from "react-router-dom";
import { areaofInterest } from '../../constants';



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
                <div className="col-3 d-flex align-center">
                    <Link to="/work-interest" className='link-text'>Back</Link>
                </div>
                <div className="col-3">
                    <Button type='button' label='Next' onClick={nextMove} />
                </div>
            </div>
        </>
    )
}

export default UserQuestionnaire;