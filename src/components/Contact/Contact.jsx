import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () =>{


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c586990c-2c18-4a87-8add-1bd8bad3c459");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        //Calling external api for sending email
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {

            alert(res.message);
            console.log("Success", res);
        }
      };
    return (
        <div id = 'contact' className="contact">
            <div className="contact-title">
                <h2>Reach Out</h2>
                <img src={theme_pattern} alt="Space for Theme Pattern" />
            </div>
            <div className="contact-session">
                <div className="contact-left">
                    <h2>Let's talk</h2>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. you can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Space for mail icon" /><p>akhilpgvr@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Space for call icon" /><p>+919072350972</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Spacce for location icon" /><p>Guruvayoor, Thrissur, Kerala, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" id=""></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact