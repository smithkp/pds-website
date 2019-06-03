import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class About extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="content-section">
                <h1>About</h1>
                <hr className="hidden-xs hidden-sm"/>
                <p className="abt-text d-inline-block col-lg-12">Patrick's Driving School is a family owned business established in 1994 by owner Patrick Smith. Our mission and goal is to provide customers with safe and effective driving skills.  We provide services to all ages 16 +. We strive to ensure all students with efficient skills to obtain and maintain a motor vehicle liscense in the state of Connecticut. We want nothing more than to provide you with the best education to become confident and skilled drivers. We ensure the quality service you deserve.
                </p>
                <div className="d-inline-block">
                    <img className=" rounded mx-auto d-block img-fluid winton" src={require('./imgs/winton.JPG')} alt="sports car" />
                </div>
            </div>
        )
    }
}
export default About;
