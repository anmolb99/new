import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <>
                 <div className="last">
                                <div className="cp"><h6>LoveStory Theme © 2020</h6></div>
                            <ul>
                                <li> <Link to="/"> Home </Link> </li>
                                <li> <Link to="Profiles"> Profiles </Link> </li>
                                <li> <Link to="Stories"> Stories </Link> </li>
                                <li> <Link to="Blog"> Blog </Link> </li>
                                <li> <Link to="About"> About </Link> </li>
                            </ul>
                            </div>
            </>
        );
    }
}

export default Footer;