import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/button';
import Checkbox from './components/checkbox';
import Input from './components/input';
import Select from './components/select';
import UserDetail from './screens/user-detail';
import UserInterest from './screens/user-interest';


function App() {
  return (
    <div className="row">
      <div className="col-lg-5 col-md-12  col-sm-12 col-xs-12 left p-5">
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
        <UserInterest />
      </div>
    </div>
  );
}

export default App;
