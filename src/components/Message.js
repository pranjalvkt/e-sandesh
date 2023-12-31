import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './message.css';

const Message = ({message}) => {
  const [user] = useAuthState(auth);
  let nameArray = message.name.split(' ');
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img className="chat-bubble__left" src={'https://ui-avatars.com/api/?name='+ nameArray[0]+'+'+nameArray[1]+'&background=random'} alt="user avatar" />
      <div className="chat-bubble__right">
        <div className="messge-header">
          <p className="user-name">{message.name}</p>
          {message.createdAt ? <p className="timestamp">{message.createdAt.toDate().toLocaleTimeString('en-US')}</p> : null}
        </div>
        <p className="user-message">
        {message.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
