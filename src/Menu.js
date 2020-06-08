import React,{Component} from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Menu extends Component  {
    render(){
        return(
            <>
            
                <div className="menu">
                    <div className="logo"></div>
                    <ul>
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="profiles"> Profiles </Link> </li>
                        <li> <Link to="stories"> Stories </Link> </li>
                        <li> <Link to="blog"> Blog </Link> </li>
                        <li> <Link to="about"> About </Link> </li>
                    </ul>
                    <div className="btn1" >
                    <Button variant="info" size="sm">Sign In</Button>
                    </div>
                    <div className="btn2">
                    <Link to="registration"><Button variant="secondary" size="sm">Register</Button></Link>
                    </div>
                </div>
               
            </>
        );
    }
}

export default Menu;