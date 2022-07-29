import React, { useState } from 'react'
import ErrorMsg from './ErrorMsg';
import {useNavigate} from 'react-router-dom'

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: ""
    })
    const navigate = useNavigate();

    const [toggleCheck, setToggleCheck] = useState(false);
    const [errorMsg, setErrorMsg] = useState(undefined);

    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value
        setUserData({ ...userData, [name]: value })
    }

    // connect with firebase
    const submitData = async (e) => {
        const { firstName, lastName, phone, email, address, message } = userData
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        try {

            if (!firstName && !lastName && !phone && !email && !address && !message) {
                return setErrorMsg("Please fill all fields")
            } // validation for checkbox
            if (!toggleCheck) {
                return setErrorMsg("Agree to terms and conditions")
            }

            // validation for email
            const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
            let validEmail = emailRegex.test(email);
            if (!validEmail) {
                return setErrorMsg("Enter valid Email address")
            }

            const res = await fetch('https://tahirfirebase-default-rtdb.firebaseio.com/userData.json', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName, lastName, phone, email, address, message
                })
            }
            )
            // after successful form submission redirect 
            navigate('/success')

        } catch (error) {
            console.log("Error Occured");
        }
    }
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect With Our <br /> Sales Team.
                                    </h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img
                                            src="./images/hero1.jpg"
                                            alt="contatUsImg"
                                            className="img-fluid"
                                        />
                                    </figure>
                                </div>

                                {/* right side contact form  */}
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={userData.firstName}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={userData.lastName}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Phone Number "
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Email ID"
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Add Address"
                                                    value={userData.address}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <input
                                                    type="text"
                                                    name="message"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Enter Your Message"
                                                    value={userData.message}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-check form-checkbox-style">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                                onClick={() => setToggleCheck(!toggleCheck)}
                                            />
                                            <label
                                                className="main-hero-para">
                                                I agree that the TahirShaikh may contact me at the
                                                email address or phone number above
                                            </label>
                                        </div>
                                        {/* show validation message */}
                                        {
                                            errorMsg
                                            &&
                                            <ErrorMsg msg={errorMsg} clearError={() => setErrorMsg(undefined)} />

                                        }
                                        <button
                                            type="submit"
                                            className="btn btn-style w-100"
                                            onClick={submitData}
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact