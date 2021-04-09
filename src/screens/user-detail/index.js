import { Button, Select, Input, Checkbox } from '../../components';

const UserDetail = () => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className=''>Apply now to work in Dubai</h1>
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Input type='text' label='Dummy Name' />
                </div>
                <div className="col-6">
                    <Input type='text' label='Last Name' />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Input type='date' label='Date of birth' />
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
                    <Select label='Nationality' options={[{ name: 'India', alpha2Code: 'In' }, { name: 'United Arab Emirates', alpha2Code: 'UAE' }]} />
                </div>
                <div className="col-6">
                    <Select label='Country of residence' options={[{ name: 'India', alpha2Code: 'In' }, { name: 'United Arab Emirates', alpha2Code: 'UAE' }]} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <h3 className=''>How we can contact you?</h3>
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Input type='text' label='Contact number' />
                </div>
                <div className="col-6">
                    <Input type='email' label='Email address' />
                </div>
            </div>
            <div className="row d-flex mt-3">
                <div className="col-6">
                    <Button type='button' label='Apply now' />
                </div>
            </div>

        </>
    )
}

export default UserDetail;