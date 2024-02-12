import { Link, Navigate } from "react-router-dom";
import Cookie from 'cookie-universal';
import { Axios } from "../Api/axios";
import { Dropdown } from "react-bootstrap";
import {useEffect, useState } from "react";
import { USER } from "../Api/Api";

export default function NavBar() {

    const cookie = Cookie();
    const token = cookie.get("e-commerce");
    console.log(token);
    
    const [name, setName] = useState("");
    const [is_admin, setIs_admin] = useState("");

    async function fetchData() {
        try {
            if (!token) {
                return;
            }
            Axios.get(`/${USER}`)
            .then((data) => {setName(data.data.name)
                setIs_admin(data.data.is_admin)
            })       
            .catch(() => Navigate("/login", {replace: true}));
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    async function handleLogout() {
        try {
            const res = await Axios.post(`http://127.0.0.1:8000/api/logout`);
            cookie.remove("e-commerce");
            window.location.pathname = "/login";
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="">
            <div className="navbar p-2 container">
                <div className="d-flex flex-1 ">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/suitableplant">suitableplant</Link>
                    <Link to="/contact">contact</Link>
                    <Link to="/consultation">consultation</Link>
                </div>
                <div className="d-flex">
                    {!token ? (
                        <>
                            <Link
                                to="/register"
                                style={{ textAlign: "center" }}
                                className="register-nav"
                            >
                                Register
                            </Link>
                            <Link
                                to="/login"
                                style={{ textAlign: "center" }}
                                className="register-nav"
                            >
                                Login
                            </Link>
                        </>
                    ) : (<> {is_admin === 1 ? <Link
                        to="/dashboard"
                        style={{ textAlign: "center" }}
                        className="register-nav"
                    >
                        Dashboard
                    </Link> : ' '}
                        <Dropdown className="mt">
                            <Dropdown.Toggle variant=" button-color text-white bg-black " >
                                {name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item onClick={handleLogout} className="bgcolor">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> </>)}
                </div>
            </div>
        </div>
    );
}