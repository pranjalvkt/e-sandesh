import React from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import {useLocation} from 'react-router-dom';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const location = useLocation();
  useEffect(() => {
    const q = query(
      collection(db, location.state.groupname),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
      scroll.current.scrollIntoView({ behavior: "smooth" })
    });
    
    return () => unsubscribe;
    
  }, [location.state.groupname]);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
            <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll}/>
    </main>
  );
};

export default ChatBox;
