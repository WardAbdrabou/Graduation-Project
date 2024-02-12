import React from 'react';
import NavBar from '../../Components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const ResetSuccess = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="parent">
        <div className="register login">
          <form >
            <div>
              <div style={{ textAlign: "center" }}>
              <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#6F9A61", fontSize:"80px"}} className='mb-4'/>
                <h4 style={{ marginBottom: "20px" , fontSize:"30px" }}>Reset Successful</h4>
                <p className="pAcount" style={{ marginBottom: "30px" , color:'#858484' , fontSize:"16px"}}>Your  password is successful
                </p>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
