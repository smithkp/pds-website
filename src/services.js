import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class Services extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1 className="text-center services-section">Services</h1>
                <hr className="hidden-xs hidden-sm"/>
                <dl className="row text-left">
                    <dt className="col-sm-3">8 hour safe driving course (classroom)</dt>
                    <dd className="col-sm-9"><p>Required course for all adults and 16-17 year olds by state law. By the end of this course students are expected to have learned the effects that drugs and alcohol have on operating a motor vehicle and safe/defensive driving practices. Classroom sessions are on saturday mornings or monday through friday by appointment.</p></dd>

                    <dt className="col-sm-3">Behind the wheel lessons</dt>
                    <dd className="col-sm-9"><p>Behind the wheel lessons are offered monday through friday by appointment.</p></dd>

                    <dt className="col-sm-3">30 hour classroom</dt>
                    <dd className="col-sm-9"><p>Package that includes a combination of 8 hour safe driving course and behind the wheel trainning.</p></dd>
                </dl>
            </div>
        )
    }
}
export default Services;
