import React, { Component } from 'react';
import About from './about.js';
import Services from './services.js';
import Contact from './contact.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {display: "About"};
    this.handleClick = this.handleClick.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  handleClick = e =>{
    if(e.target.id === "about"){
      this.setState({display: "About"});
    }
    else if(e.target.id === "services"){
      this.setState({display: "Services"});
    }
    else{
      this.setState({display: "Contact"});
    }
  }



  showInfo(){
    if(this.state.display === "About"){
      return(
          <About />
      );
    }
    else if(this.state.display === "Services"){
      return(
          <Services />
      );
    }
    else{
      return(
          <Contact />
      );
    }

  }

  render() {
    return (
        <div className="App text-center">
          <img alt={'school img'} src={require('./imgs/PDS.png')} width='280'/>
          <div className="dropdown text-center">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.state.display}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="about">
              <a className="dropdown-item" href="#" onClick={this.handleClick} id="about">About</a>
              <a className="dropdown-item" href="#" onClick={this.handleClick} id="services">Services</a>
              <a className="dropdown-item" href="#" onClick={this.handleClick} id="contact">Contact</a>
            </div>
          </div>
          {this.showInfo()}

        </div>
    );
  }
}

export default App;

