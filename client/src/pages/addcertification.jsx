import Getstartbottomnav from "../components/Getstartbottomnav";
import Getstartnavbar from "../components/Getstartnavbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Addcert() {
  return (
    <div className="Addcert">
    <Getstartnavbar />
      <div className="content">
        <h1 className="heading">
          Do you have certifications?
        </h1>
        <p>
          Adding certifications to your profile is a geat way to show clients
          what you can do.
        </p>
      </div>
      <div>
      <div className="add-experience">
      <div className='inside-Box1'> 
      <div className='inside-Box'>
      <AiFillPlusCircle className="icon" />
       <p>Add Certification</p>
      </div>
      </div>
      </div>
        <div className="check-box-div">
         <label className="checkbox">
        <input type="checkbox" className="check-box" />
        Nothing to add? Check the box and keep going
        <span className="checkmark"></span>
         </label>
      </div>
      </div>
      <Link to="/home">

     <Getstartbottomnav botButton="Complete my profile"/>      
    </Link>
    </div>
  );
}

