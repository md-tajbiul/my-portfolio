import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import React from "react";
import './Contact.css';
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_bl6nwre', 'portfolio', e.target, 'user_4BGTZ6ys7Zj1ssM5pCHcN')
    .then((result) => {
        alert('🙌 Message Send Successfully!');
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
  return (
    <div className="contact" id="contact">
      <div className="container">
      <div className="common">
                <h1 className="mainHeader">Contact</h1>
                <div className="commonBorder"></div>
            </div>
            <div className="text-center">
            <h6 className="text-white"><FontAwesomeIcon icon={faPhoneAlt} /> &nbsp; +880 1745-435487</h6>
            <h6>or</h6>
            </div>
            <form onSubmit={sendEmail}>
                <div className="row pt-2 mx-auto text-right">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" value="To: contact.tajbiul@gmail.com" name="name" style={{backgroundColor:"#1f2235", color:"#fff"}}/>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Your Name" name="name" style={{backgroundColor:"#1f2235", color:"#fff"}}/>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="email" className="form-control" placeholder="Your Email" name="email" style={{backgroundColor:"#1f2235", color:"#fff"}}/>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="10" placeholder="Your message" name="message" style={{backgroundColor:"#1f2235", color:"#fff"}}></textarea>
                    </div>
                    <div className="col-8 mx-auto">
                        <input type="submit" className="btn btn-outline sendBtn"  value="Send Message"></input>
                    </div>
                </div>
            </form>
      </div>
    </div>
  );
};

export default Contact;
