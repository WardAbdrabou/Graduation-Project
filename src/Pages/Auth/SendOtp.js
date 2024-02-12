import React, {useContext, useState } from 'react';
import axios from 'axios';
import Loading from '../../Components/Loading';
import { Email } from '../Context/EmailContext';
import { useNavigate } from 'react-router-dom';
// import { SENDOTP, baseURL } from './../../Api/Api';
// import { useNavigate } from 'react-router-dom';
// import  Cookie  from 'cookie-universal';
import NavBar from '../../Components/NavBar';

const SendOtp = () => {
    const [form, setForm] = useState({
        email: "",
    });
     // Cookie
    //  const cookie = Cookie();

    const emailShow = useContext(Email);
    console.log(emailShow);

    //loading
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");
    const [accept, setAccept] = useState(false);


    const nav = useNavigate();

    //Handle form Change
    function handleFormChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`http://127.0.0.1:8000/api/forget_password?email=${form.email}`, form.email);
            if (res.status === 200) {
                // console.log(res)
                setLoading(false);
                alert("A new OTP has succesfully been sent to your email.");
                // const token = res.data.token;
                // cookie.set("e-commerce", token);
                const userEmail = res.config.data;
                // const token = res.config.token;
                // console.log(token);
                console.log(userEmail);
                emailShow.setEmailAuth({userEmail});
                nav("/resetpassword");
            } else {
                console.error('Failed to send OTP');
            }
        } catch (err) {
            setLoading(false);
            if (err.response.status === 422) {
                setErr("The selected email is invalid");
            } else {
            setAccept(true);
            }
        
        }
    };

    return (
        <>
        <NavBar></NavBar>
            {loading && <Loading></Loading>}
            <div className="parent">
                <div className="register login">
                    <form onSubmit={handleEmailSubmit}>
                        <div>
                            <div style={{ textAlign: "center" }}>
                                <h4 style={{ marginBottom: "20px" }}>Forgot Password</h4>
                                <p className="pAcount" style={{ marginBottom: "30px" }}>Please enter your email. We will send a code
                                    to your email to reset your password.
                                </p>
                            </div>
                            <label className='mb-2'>
                                Email address
                            </label>
                            <input
                                name='email'
                                type="email"
                                value={form.email}
                                onChange={handleFormChange}
                                required
                                className='mb-4'
                            />
                            {err !== "" && <span className="error">{err}</span>}
                            <div style={{ textAlign: "center" }}>
                                <button type="submit">Get OTP</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SendOtp;

