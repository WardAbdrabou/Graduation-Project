import axios from "axios";
import { useContext, useState } from "react";
import { REGISTER, baseURL } from "../../Api/Api";
import Loading from "../../Components/Loading";
import Cookie from 'cookie-universal';
// import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { Email } from "../Context/EmailContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
    //states
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [accept, setAccept] = useState(false);


    // const navigate = useNavigate();
    const emailShow = useContext(Email);
    console.log(emailShow);

    const nav = useNavigate();

    //Err
    const [err, setErr] = useState("");

    //loading
    const [loading, setLoading] = useState(false);
    // Cookie
    const cookie = Cookie();

    //Handle form Change
    function handleFormChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    //Handle Submit
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${baseURL}/${REGISTER}`, form);
            console.log(res); 
            const token = res.data.token;
            // const userEmail = res.data.user.email;
            setLoading(false);
            cookie.set("e-commerce", token);
            const userEmail = res.data.user.email;
            console.log(userEmail);
            emailShow.setEmailAuth({token, userEmail});
            alert("A OTP Email Verification has succesfully been sent to your email.");
            // window.location.pathname = `/verifyotp`;
            // navigate("/", {replace: true});
            nav("/verifyotp");
        } catch (err) {
            // console.log(err);
            setLoading(false);
            if (err.response.status === 422) {
                if (form.password_confirmation !== form.password) {
                    setErr("Password dose not match");
                    setLoading(false);
                } else {
                    setErr("Email is already been taken");
                    setLoading(false);
                }
            } else {
                setErr("Internal Server ERR");
            }
        } setAccept(true);
    }

    return (
        <>
            <NavBar></NavBar>
            {loading && <Loading></Loading>}
            <div className="parent">
                <div className="register login">
                    <form onSubmit={handleSubmit} className="form">
                        <div>
                            <div>
                                <h4 style={{ marginBottom: "10px" }}>Create an account</h4>
                                <p className="pAcount">Already have an ccount?
                                    <a href="Login" style={{ color: "#7AB2F3", marginLeft: "5px" }}>Sign In</a>
                                </p>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="name">User name</label>
                                <input
                                    className="mb-2"
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Name....."
                                    required
                                    value={form.name}
                                    onChange={handleFormChange}
                                ></input>
                            </div>
                            {form.name.length < 2 && accept && (
                                <p className="error">Name must be more than 2 char</p>
                            )}

                            <div className="mb-2">
                                <label htmlFor="email">Email address</label>
                                <input
                                    className="mb-2"
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Email....."
                                    required
                                    value={form.email}
                                    onChange={handleFormChange}
                                ></input>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password">Password:</label>
                                <input
                                    className="mb-2"
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password....."
                                    value={form.password}
                                    onChange={handleFormChange}
                                    minLength="6"
                                    required
                                ></input>
                            </div>
                            {form.password.length < 8 && accept && (
                                <p className="error">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                            )}

                            <div className="mb-2">
                                <label htmlFor="passwordCo">Password Confirmation</label>
                                <input
                                    className="mb-2"
                                    name="password_confirmation"
                                    id="passwordCo"
                                    type="password"
                                    placeholder="Password....."
                                    value={form.password_confirmation}
                                    onChange={handleFormChange}
                                    minLength="6"
                                    required
                                ></input>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <button type="submit">Sign Up</button>
                            </div>

                            {err !== "" && <span className="error">{err}</span>}
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}
