import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class Contact extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="contact-section">
                <h1>Contact</h1>
                <hr className="hidden-xs hidden-sm"/>
                <p>We are located in room 326 of 45 Wintonbury avenue. Feel free to call or email with any additional questions. I am available monday through friday by appointment.</p>


                <div className="embed-responsive embed-responsive-16by9 allowfullscreen map">
                    <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11494.233590980375!2d-72.73321690602329!3d41.83270365026753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7aac27ec5f6cd%3A0x845a99d5862df036!2s45+Wintonbury+Ave%2C+Bloomfield%2C+CT+06002!5e0!3m2!1sen!2sus!4v1549117847715"></iframe>
                </div>

                <div className="text-center">
                    <address>
                        <strong>Patrick's Driving School</strong><br/>
                        45 Wintonbury Ave<br/>
                        Bloomfield, CT 06002<br/>
                        Phone: (860)243-2845<br/><br/>
                        Email: <a href="mailto:#"> patricksdrivingschoolct@gmail.com</a><br/>



                        <a href="https://www.google.com/maps/dir//45+Wintonbury+Ave,+Bloomfield,+CT+06002/@41.8324309,-72.7352937,17z/data=!4m16!1m7!3m6!1s0x89e7aac27ec5f6cd:0x845a99d5862df036!2s45+Wintonbury+Ave,+Bloomfield,+CT+06002!3b1!8m2!3d41.8324309!4d-72.733105!4m7!1m0!1m5!1m1!1s0x89e7aac27ec5f6cd:0x845a99d5862df036!2m2!1d-72.733105!2d41.8324309"> Directions</a>

                    </address>

                </div>
            </div>
        )

    }
}
export default Contact;
