import React, { useContext, useState } from 'react';
// import axios from 'axios';
import { RESETPASSWORD } from '../../Api/Api'
// import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import OTPInput from 'react-otp-input';
import { Email } from '../Context/EmailContext';
import Cookie from 'cookie-universal';
import { Axios } from '../../Api/axios';
import NavBar from '../../Components/NavBar';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [err, setErr] = useState("");
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [disable, setDisable] = useState(true);

  //Email context
  const context = useContext(Email);
  const email = context.emailAuth.userEmail;
  // const token = context.emailAuth.token;
  // console.log(token);

  console.log(email);
  // const {email} = useParams();

  //Cookie
  // const cookie = new Cookie();

  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);



   

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await Axios.post(`/${RESETPASSWORD}`, { password, email, otp });
      console.log(res);
      setLoading(false);
      if (res.status === 200) {
        // const token = res.data.token;
        // cookie.set("e-commerce", token);
        console.log('Password reset successful');
        window.location.pathname = "/resetsuccess";

      } else {
        console.error('Failed to reset password');
      }
    } catch (err) {
      setLoading(false);
      if (err.response.status === 422) {
        setErr("wrong otp", err);
      } else {
        setAccept(true);
      }
    }
  };



  return (
    <div>
      <NavBar></NavBar>
      {loading && <Loading></Loading>}
      <div className="parent">
        <div className="register login">
          <form onSubmit={handleResetSubmit}>
            <div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ marginBottom: "20px" }}>Reset Password</h4>
                <p className="pAcount" style={{ marginBottom: "30px" }}>Use at least 6 characters strong password.
                </p>
              </div>
              <OTPInput
                // inputStyle="w-25 mb-5 rounded"
                inputStyle={{ width: "50px", height: "50px", borderRadius: "15px", marginBottom: "30px" }}
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className='mr-5'>&nbsp; &nbsp; &nbsp;</span>}
                renderInput={(props) => <input {...props} />}
                skipDefaultStyles={true}
              />
              {accept && err && (
                <p className="error">Wrong Otp</p>
              )}

              <div className="mb-2">
                <label htmlFor="password" style={{ fontSize: "13px" }}>
                  Enter new password
                </label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password....."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="6"
                  required
                />
              </div>
              {password.length < 8 && accept && (
                <p className="error">Use 8 or more characters with a mix of letters, numbers & symbols</p>
              )}
              <div style={{ textAlign: "center" }}>
                <button type="submit">Reset</button>
              </div>
              {err !== "" && <span className="error">{err}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
