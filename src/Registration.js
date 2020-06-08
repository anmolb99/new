import React,{Component} from 'react';
import './Registration.css';
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import Footer from './Footer.js';

class Registration extends Component {
    render(){
        return(
            <>
                <div className="bg">
                   <div className="ndiv2">
                        <h4> Registration </h4>
                   </div>
                </div>
                <div className="main1">
                    <div className="inside2">
                    <div className="left1">
                        <div className="text1"><h4>Register</h4></div>
                        <div className="input1">
                            
                            <InputGroup size="sm">
   
                            <FormControl  placeholder="Username"   />
                            </InputGroup>
                           
                        </div>
                        <div className="input2">
                            <InputGroup size="sm">
   
                            <FormControl  placeholder="Password"   />
                            </InputGroup>
                        </div>
                        <div className="input3">
                            <InputGroup size="sm">
   
                            <FormControl  placeholder="Email"   />
                            </InputGroup>
                        </div>
                        <div className="input4">
                            <InputGroup size="sm">
   
                            <FormControl  placeholder="Repeat Password"   />
                            </InputGroup>
                        </div>
                        <div className="btn3">
                        <Button variant="secondary" size="sm">Register</Button>
                        </div>



                    </div>
                    <div className="right1">
                        <div className="text1"><h4>Sign In</h4></div>
                        <div className="input5">
                            <InputGroup size="sm">
   
                            <FormControl  placeholder="Username"   />
                            </InputGroup>
                        </div>
                        <div className="input6">
                            <InputGroup size="sm">
   
                            <FormControl  placeholder="Password"   />
                            </InputGroup>
                        </div>
                        <div className="btn4">
                        <Button variant="secondary" size="sm">Sign In</Button>
                        </div>




                    </div>


                    <div >
                        < Footer/>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Registration;