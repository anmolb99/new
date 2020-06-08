import React,{Component} from 'react';
import './Chat.css';



class Chat extends Component {
    render(){
        return(
            <>
                <div className="page">
                <div className="fullpage">
                    <div className="top1">

                    </div>
                    <div className="leftside1">
                        <div className="back">
                        <input type="text" placeholder="Search or start new chat" className="input0"></input>
                        </div>
                    </div>
                    <div className="realchat">

                    </div>
                    <div className="bottom0">
                    <div className="emoji"></div>
                    <input type="text" placeholder="Type a message..." className="input"></input>
                    <div className="send"></div>
                    </div>
                </div> 
                </div>
            </>
        );
    }
}

export default Chat;