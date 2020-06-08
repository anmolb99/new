import React,{Component} from 'react';
import './Home.css';
import {Form, Button} from 'react-bootstrap';
import Footer from './Footer.js';

class Home extends Component {
    render(){
        return(
            <>
                <div >
                    <div className="hom">
                        <div className="img">

                        </div>
                        <div className="ndiv">
                            <div className="one" > Hello, I am a </div>
                            <div className="two" >
                            <Form  >
                           
                           <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                           <Form.Control style={{width:"102px"}} as="select" size="md" custom>
                               <option value="man" selected="selected" >Man</option>
                               <option value="woman">Woman</option>
                               
               
                           </Form.Control>
                           </Form.Group>
                           </Form>
                            </div>
                            <div className="three" >
                                seeking a
                            </div>
                            <div className="four" >
                            <Form>
                           
                           <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                           <Form.Control style={{width:"102px"}} as="select" size="md" custom>
                               <option value="man"  >Man</option>
                               <option value="woman" selected="selected">Woman</option>
                               
               
                           </Form.Control>
                           </Form.Group>
                           </Form>
                            </div>
                            <div className="five" >from</div>
                            <div className="six" >
                            <Form>
                           
                           <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                           <Form.Control style={{width:"80px"}} as="select" size="md" custom>
                               <option value="18" selected="selected" >18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>
                               <option value="31">31</option>
                               <option value="32">32</option>
                               <option value="33">33</option>
                               <option value="34">34</option>
                               <option value="35">35</option>
                               <option value="36">36</option>
                               <option value="37">37</option>
                               <option value="38">38</option>
                               <option value="39">39</option>
                               <option value="40">40</option>
                               <option value="41">41</option>
                               <option value="42">42</option>
                               <option value="43">43</option>
                               <option value="44">44</option>
                               <option value="45">45</option>
                               <option value="46">46</option>
                               <option value="47">47</option>
                               <option value="48">48</option>
                               <option value="49">49</option>
                               <option value="50">50</option>
                               <option value="51">51</option>
                               <option value="52">52</option>
                               <option value="53">53</option>
                               <option value="54">54</option>
                               <option value="55">55</option>
                               <option value="56">56</option>
                               <option value="57">57</option>
                               <option value="58">58</option>
                               <option value="59">59</option>
                               <option value="60">60</option>
               
                           </Form.Control>
                           </Form.Group>
                           </Form>
                            </div>
                           <div className="seven" >
                               to
                           </div>
                            
                            <div className="eight" >
                            <Form>
                           
                            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                            <Form.Control style={{width:"80px"}} as="select" size="md" custom>
                                <option value="18"  >18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35" selected="selected" >35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                                <option value="60">60</option>
                
                            </Form.Control>
                            </Form.Group>
                            </Form>
                            </div>
                            <div  className="find">
                            <Button variant="success" size="md">Find my matches</Button>
                            </div>
                            

                        </div>
                        
                    </div>
                    <div className="ftr">
                        <div className="inside">
                            <div className="steps" ><h5>Steps to Find Your Match</h5></div>
                        <div className="divs">
                            <div className="first">
                                <div className="img1"></div>
                                <h5>Create Profile</h5>
                                <p >Maecenas molestie dignissim lacinia. Nullam a nulla a mi 
                                    semper viverra eu ac diam. Fusce quis est eu dolor feugiat v
                                    olutpat venenatis.
                                    </p>
                            </div>
                            <div className="second">
                            <div className="img2"></div>
                            <h5>Find matches</h5>
                            <p>Maecenas molestie dignissim lacinia. Nullam a nulla a mi 
                                    semper viverra eu ac diam. Fusce quis est eu dolor feugiat v
                                    olutpat venenatis.
                                    </p>
                            </div>
                            <div className="third" >
                            <div className="img3"></div>
                            <h5>Start Dating</h5>
                            <p>Maecenas molestie dignissim lacinia. Nullam a nulla a mi 
                                    semper viverra eu ac diam. Fusce quis est eu dolor feugiat v
                                    olutpat venenatis.
                                    </p>
                            </div>
                        </div>
                            <div className="left">
                            <div className="part"><h4>Success Stories</h4></div>
                                <div className="part1">
                                    
                                    <div className="cover"><div className="image1"></div></div>
                                    <div className="story1">
                                        <h5>Science of Love</h5>
                                        <p>Nullam ornare fermentum pharetra. Sed iaculis quam id al
                                            iquam volutpat a lorem amet diam sollicitudin quisque 
                                            nulla tellus cursus.Quisque sem tellus, tristique non pul
                                            vinar eu, malesuada elementum tortor. 
                                            
                                        </p>
                                    </div>
                                </div>
                                <div className="part2">
                                    
                                    <div className="cover"><div className="image2"></div></div>
                                    <div className="story1">
                                        <h5>More than Friends</h5>
                                        <p>Nullam ornare fermentum pharetra. Sed iaculis quam id al
                                            iquam volutpat a lorem amet diam sollicitudin quisque 
                                            nulla tellus cursus.Quisque sem tellus, tristique non pul
                                            vinar eu, malesuada elementum tortor. 
                                            
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="right">
                            <div className="part"><h4>Featured Profiles</h4></div>
                                <div className="part3">
                                    <div className="cover1">
                                        <div className="image3">
                                        </div>
                                        
                                    </div>
                                    <div className="story2">
                                        <h5>Brian Peterson</h5>
                                        <p>Nullam lacinia ultrices diam, ullamcorper pulvinar felis commodo 
                                            eget. Pellentesque in lorem ipsum amet. Suspendisse malesuada sed
                                             tellus vel mollis.
                                        </p>
                                    </div>
                                </div>
                                <div className="part4">
                                <div className="cover1">
                                        <div className="image4">
                                        </div>
                                    </div>
                                    <div className="story2">
                                        <h5>Mary Lockhart </h5>
                                        <p>Nullam lacinia ultrices diam, ullamcorper pulvinar felis commodo 
                                            eget. Pellentesque in lorem ipsum amet. Suspendisse malesuada sed
                                             tellus vel mollis.
                                        </p>
                                    </div>
                                </div>
                                <div className="part5">
                                <div className="cover1">
                                        <div className="image5">
                                        </div>
                                </div>
                                <div className="story2">
                                        <h5>Thomas Hinton</h5>
                                        <p>Nullam lacinia ultrices diam, ullamcorper pulvinar felis commodo 
                                            eget. Pellentesque in lorem ipsum amet. Suspendisse malesuada sed
                                             tellus vel mollis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                < Footer/>
                            </div>
                          
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Home;