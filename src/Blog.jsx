import React,{Component} from 'react';
import Footer from './Footer.js';
import './Blog.css';
import {Card} from 'react-bootstrap';

class Blog extends Component {
    render(){
        return(
            <>
                <div>
                <div className="bg">
                   <div className="ndiv2">
                        <h4> Blog </h4>
                   </div>
                </div>
                <div className="main4">
                    <div className="inside4">
                        <div className="left3">
                            <div>
                           
                            <Card.Img className="cimg" variant="top" src="card10.jpg" />
                            <Card.Body className="cbody">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                           
                            </Card.Body>
                           
                            </div>
                            <div>
                           
                           <Card.Img className="cimg" variant="top" src="card11.jpg" />
                           <Card.Body className="cbody">
                           <Card.Title>Card Title</Card.Title>
                           <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                           </Card.Text>
                          
                           </Card.Body>
                          
                           </div>
                           <div>
                           
                           <Card.Img className="cimg" variant="top" src="card12.jpg" />
                           <Card.Body className="cbody">
                           <Card.Title>Card Title</Card.Title>
                           <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                           </Card.Text>
                          
                           </Card.Body>
                          
                           </div>
                           <div>
                           
                           <Card.Img className="cimg" variant="top" src="card13.jpg" />
                           <Card.Body className="cbody">
                           <Card.Title>Card Title</Card.Title>
                           <Card.Text>
                           Some quick example text to build on the card title and make up the bulk of
                           the card's content.
                           </Card.Text>
                          
                           </Card.Body>
                          
                           </div>

                        </div>
                    





                        < div className=" rightside">
                        <div className="right3">
                            <div className="tp">
                               <h2 > Comments </h2>
                              <div className="statue">
                                  <p>Emily on</p>
                              <p>Thomas on</p>
                              <p>marela on</p>
                              </div>
                              
                            </div>
                            
                        </div>
                        <div className="right5">
                            <div className="tp">
                               <h2> Tags </h2>
                            </div>
                        </div>
                        <div className="border1">
                        <div  className="right4">

                        </div>
                        </div>
                       
                         <div>
                        < Footer />
                        </div>
                    </div>
                </div>

                </div>
                </div>
            </>
        );
    }
}

export default Blog;