import { useState } from 'react';
import './index.css';
import { Button, Select, Input, Checkbox, ProgressBar } from '../../components';
import User from '../../models/user';
import edit from '../../assets/edit.png';
import { useHistory, Link } from "react-router-dom";

const ReviewApplication = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || User);
    const history = useHistory();

    const editUserData = (routePath) => {
        history.push(routePath);
    }
    const preferredIndustry = user.industryPreferredForWork || [];
    const areaOfInterest = user.areaofInterest || [];

    const nextMove = () => {

    }

    return (
        <>
            <div className="row m-3">
                <h3 className='ml-3 mr-3'>Progress</h3>
                <ProgressBar value='100' max='100' />
            </div>
            <div className="row m-3 ">
                <div className="col-12 mt-3 ">
                    <div className="jumbotron d-flex p-3">
                        <h4 className='text-primary'>Basic Information</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/user-detail') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron p-3">
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
                    <div className="jumbotron d-flex p-3">
                        <h4 className='text-primary'>User interest</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/user-interest') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron p-3">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>Have you ever visited Dubai?</h5>
                                <Button label={user.everVisitedDubai ? 'Yes' : 'No'}></Button>
                            </div>
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>Do you have any friends or family in Dubai?</h5>
                                <Button label={user.haveRelative ? 'Yes' : 'No'}></Button>
                            </div>
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>How long do you want to stay in stay in Dubai?</h5>
                                <Button label={user.stayTime}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="jumbotron d-flex p-3">
                        <h4 className='text-primary'>User lifestyle</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/user-lifestyle') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron p-3">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>Why do you want to come to dubai?</h5>
                                <Button label={user.reasonToTravel ? 'Yes' : 'No'}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="jumbotron d-flex p-3">
                        <h4 className='text-primary'>Work Interest</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/work-interest') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron p-3">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>What industries would you prefer to work in?</h5>
                                <p>{preferredIndustry.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="jumbotron d-flex p-3">
                        <h4 className='text-primary'>User Questionnaire</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/user-questionnaire') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron p-3">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>What are your interests?</h5>
                                <p>{areaOfInterest.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="jumbotron d-flex p-3">
                        <h4 className='text-primary'>User Questionnaire</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/user-questionnaire') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron p-3">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>What are your interests?</h5>
                                <p>{areaOfInterest.join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-2">
                    <div className="jumbotron d-flex p-3">
                        <h4 className='text-primary'>Financial Status and Education</h4>
                        <img src={edit} className='img' onClick={() => { editUserData('/financial-status') }} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="jumbotron p-3">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>Do you have any financial savings?</h5>
                                <Button label={user.finanicalSavings}></Button>
                            </div>
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>What is your level of education?</h5>
                                <Button label={user.levelOfEducation}></Button>
                            </div>
                            <div className="col-12 mt-2">
                                <h5 className='ml-3 mr-3'>What is your level of education?</h5>
                                <Button label={user.educationCompletion}></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex mt-3">
                    <div className="col-3 d-flex align-center">
                        <Link to="/financial-status" className='link-text'>Back</Link>
                    </div>
                    <div className="col-6">
                        <Button type='button' label='Submit Application' onClick={nextMove} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewApplication;