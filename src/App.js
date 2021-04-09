import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import Select from './components/select';


function App() {
  return (
    <div className="row">
      <div className=" d-none d-lg-block col-lg-5 col-md-12 left p-5">
        {
          // Rather than this piece of code I have used the image from the requirement  data, We can uncomment and reuse it.

          /* <div className="row mt-3">
            <div className="col-12 d-flex text-light">
              <h1 className=''>digg</h1>
            </div>
          </div>
          <figure>
            <blockquote className="blockquote text-light">
              <p>"Coming to Dubai with One Step Dubai has been the best decision of my life. I am now living in Dubai with a good job and I will be getting married next year."</p>
            </blockquote>
            <br />
            <figcaption className="blockquote-footer text-light">
              Mohammad, <cite title="Source Title">One Step Dubai Student <br /> Pakistan</cite>
            </figcaption>
          </figure> */
        }
      </div>
      <div className="col-lg-7 col-xs-12 col-sm-12 col-md-12 p-4 mt-3">
        <div className="row mt-3 ">
          <div className=" col-12 ">
            <h1 className=' hidden-lg-up brandName'>digg</h1>
          </div>
        </div>
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
            {/* <form className="form-floating">
              <input type="date" className="form-control form-control-sm " placeholder="Date of birth" />
              <label htmlFor="floatingInputInvalid">Date of birth</label>
            </form> */}
            <Input type='date' label='Date of birth' />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6 mt-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Male
                  </label>
                </div>
              </div>
              <div className="col-6 mt-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Female
                  </label>
                </div>
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
      </div>
    </div>
  );
}

export default App;
// is-invalid