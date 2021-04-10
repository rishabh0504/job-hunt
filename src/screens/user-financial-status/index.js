import { useState } from 'react';
import { ProgressBar, Radio, Button } from '../../components';
import User from '../../models/user';
import { useHistory } from "react-router-dom";
import { levelOfEducation, educationCompletion, finanicalSavings } from '../../constants';


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