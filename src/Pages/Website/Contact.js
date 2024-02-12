import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from './../../Components/NavBar';

// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_o2lktry",
                "template_9mlcd7j",
                form.current,
                "J-g1w0FufKHoRKAbT"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
        <NavBar></NavBar>
        <div class="contact" id="Contact">
            <div class="container">
                <div className="col-6 headerContact" >
                    <h2 className="plantDetDes">Contact US</h2>
                    <p className="contact-titlep">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt. </p>
                </div>
                <div class="content">

                    <div class="info">
                        {/* <img src="../../assests/background.png" alt="img"></img> */}
                    </div>

                    <form ref={form} onSubmit={sendEmail} >
                        <label htmlFor="name">Full Name</label>
                        <input
                            className="main-input"
                            id="name"
                            placeholder="Name....."
                            type="text"
                            name="user_name" />

                        <label htmlFor="email">Email Address</label>
                        <input
                            className="main-input"
                            id="email"
                            placeholder="Email....."
                            type="email"
                            name="user_email" />
                        <label>Message</label>
                        <textarea className="main-input"
                            name="message" placeholder="Subject....." />
                        <input type="submit" value="Send" />
                    </form>

                </div>
            </div>
        </div>
        </>

    );
};

export default Contact;

