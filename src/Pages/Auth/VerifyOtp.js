// import React, { useContext, useState } from 'react';
// import Loading from '../../Components/Loading';
// import OTPInput from 'react-otp-input';
// import { Email } from '../Context/EmailContext';
// // import EmailContext from '../Context/EmailContext';
// import Cookie from 'cookie-universal';
// import { Axios } from '../../Api/axios';
// import axios from 'axios';
// import { VERIFYOTP } from '../../Api/Api';
// import NavBar from '../../Components/NavBar';

// const VerifyOtp = (setOtpVerified) => {
//     // const [email, setEmail] = useState('');

//     const [otp, setOtp] = useState('');
//     const [accept, setAccept] = useState(false);
//     // const [disable, setDisable] = useState(true);
//     // Cookie
//     // const cookie = Cookie();


//     // const navigate = useNavigate();
//     const [err, setErr] = useState("");

//     const [loading, setLoading] = useState(false);

//     //Email context
//     const context = useContext(Email);
//     const email = context.emailAuth.userEmail;
//     console.log(email);

//     //token
//     const cookie = Cookie();
//     const token = cookie.get("e-commerce");
//     console.log(token);

//     const handleResend = async (e) => {
//         setLoading(true);
//         // if (disable) return;
//         setLoading(false);
//         try {
//             const res = await axios.get(`http://127.0.0.1:8000/api/send_email_verification`, email);
//             if (res.status === 200) {
//                 // setDisable(true)
//                 console.log(res)
//                 setLoading(false);
//                 alert("A new OTP has succesfully been sent to your email.");
//                 // const token = res.data.token;
//                 // const userEmail = res.config.data;
//                 // console.log(token);
//                 // console.log(userEmail);
//                 // emailShow.setEmailAuth({userEmail});
//                 // cookie.set("e-commerce", res.data.token);
//             } else {
//                 console.error('Failed to send OTP');
//                 setLoading(false);
//             }
//         } catch (error) {
//             setLoading(false);
//             console.error('Error during OTP generation:', error);
      
//         }
//     };
  

//     // function resendOTP() {
//     //     if (disable) return;
//     //     axios
//     //         .get(`http://127.0.0.1:8000/api/send_email_verification`, email)
//     //         .then(() => setDisable(true))
//     //         .then(() => alert("A new OTP has succesfully been sent to your email."))
//     //         .catch(console.log);
//     // }

//     const handleOtpSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const res = await Axios.post(`/${VERIFYOTP}`, {email, otp});
//             console.log(res);
//             setLoading(false);
//             if (res.status === 200) {
//                 console.log(res);
//                 setLoading(false);
//                 // const token = res.data.token;
//                 // cookie.set("e-commerce", token);   
//                 // console.log(token);
//                 // localStorage.setItem("Token", token);
//                 // window.location.replace("/dashboard");
//                 alert("A Email has succesfully verified.");
//                 window.location.pathname = "/";
//             } else {
//                 console.error('Failed to verify OTP');
//             }
//         } catch (err) {
//             setLoading(false);
//             if (err.response.status === 422) {
//                 setErr("wrong otp", err);
//             } else {
//                 setAccept(true);
//             }
//         }
    
// };

// return (
//     <>
//     <NavBar></NavBar>
//         {loading && <Loading></Loading>}
        
//         <div className="parent ">
//             <div className="register login">

//                 <form onSubmit={handleOtpSubmit}>
//                     <div>
//                         <div style={{ textAlign: "center" }}>
//                             <h4 style={{ marginBottom: "30px" }}>Verify OTP</h4>
//                             <p className='mb-5 pAcount'>We have just sent a 6 digit code to your
//                                 entered Email.Enter the code below.</p>
//                         </div>
//                         <OTPInput
//                             // inputStyle="w-25 mb-5 rounded"
//                             inputStyle={{ width: "50px", height: "50px", borderRadius: "15px", marginBottom: "30px" }}
//                             value={otp}
//                             onChange={setOtp}
//                             numInputs={6}
//                             renderSeparator={<span className='mr-5'>&nbsp; &nbsp; &nbsp;</span>}
//                             renderInput={(props) => <input {...props} />}
//                             skipDefaultStyles={true}
//                         />
//                         <p style={{ textAlign: "center", fontSize: "13px" , marginBottom:"40px" }}>Don’t receive any code?
//                                 <a href='#' style={{ color: "#6F9A61", marginLeft: "5px" }} onClick={() => handleResend()}>Resend</a>
//                             </p>
//                             {accept && err && (
//                                 <p className="error">Wrong Otp</p>
//                             )}
//                         <div style={{ textAlign: "center" }}>
//                             <button type="submit">Verify</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </>
// );
// };

// export default VerifyOtp;
