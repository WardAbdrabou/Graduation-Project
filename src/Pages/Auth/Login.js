import axios from "axios";
import { useState } from "react";
import { LOGIN, baseURL } from "../../Api/Api";
import Loading from "../../Components/Loading";
import Cookie from 'cookie-universal';
import NavBar from './../../Components/NavBar';
import { Link } from "react-router-dom";

export default function Login() {
    //states
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    //Err
    const [err, setErr] = useState("");
    const [accept, setAccept] = useState(false);

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
            const res = await axios.post(`${baseURL}/${LOGIN}`, form);
            console.log(res);
            setLoading(false);
            const token = res.data.token;
            console.log(token);
            cookie.set("e-commerce", token);
            window.location.pathname = `/`;
        } catch (err) {
            setLoading(false);
            if (err.response.status === 401) {
                setErr("Wrong Email or Password");
            } else {
                // setErr("Internal Server ERR");
                setAccept(true);
            }
        }
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
                                <h4 style={{ marginBottom: "20px" }}>Sign in</h4>
                                <p className="pAcount mb-3" >Don’t have an acount?
                                    <a href="Register" style={{ color: "#7AB2F3", marginLeft: "5px" }}>Sign Up</a>
                                </p>
                            </div>

                            <label htmlFor="email">Email</label>
                            <input
                                className="mb-4"
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Email....."
                                required
                                value={form.email}
                                onChange={handleFormChange}
                            ></input>

                            <label htmlFor="password">Password:</label>
                            <input
                                className="mb-2"
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Enter Your password...." minLength="6"
                                value={form.password}
                                onChange={handleFormChange}
                                required
                            ></input>
                            {form.password.length < 8 && accept && (
                                <p className="error">password must be more than 8 char</p>
                            )}
                            <div style={{ fontSize: "13px", marginLeft: "230px" }}>
                                <Link to="/sendotp">Forgetten Password ?</Link>
                            </div>

                            <div style={{ textAlign: "center" }}>
                                <button type="submit">Sign In</button>
                            </div>
                            <p style={{ color: "#666666", fontSize: "13px", marginTop: "10px" }}>This page is protected by Google reCAPTCHA to ensure you're not about.
                                <a href="learnmore" style={{ color: "#7AB2F3" }}> Learn more</a>
                            </p>
                            {err !== "" && <span className="error">{err}</span>}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
