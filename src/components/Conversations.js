import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    query,
    collection,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { db } from "../firebase";
const Conversations = () => {
    const [groups, setGroups] = useState([]);
    useEffect(() => {
        const q = query(
            collection(db, "usergroupmap"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let groupsArray = []
            QuerySnapshot.forEach((doc) => {
                groupsArray.push({ ...doc.data(), id: doc.id });
            });
            setGroups(groupsArray)
        });
        return () => unsubscribe;
    }, [])

    const navigate = useNavigate();
    const moveToChatBox = (group) => {
        navigate('/chatbox', {state:{groupname: group}})
    }
    return (
        <div className="conversations-parent">
            <div className="conversations" >
                {
                    groups.map((ele) => (
                        <div key={ele.id} className="conversation" onClick={()=>moveToChatBox(ele.group)}>
                            <img className="conversation-img" alt='chat logo' src={'https://ui-avatars.com/api/?name='+ ele.group+'&background=random'} />
                            <div style={{margin: 'auto'}}><p>{ele.group}</p></div>
                        </div>
                    ))
                }

            </div>
            <div className="conversations-expanded"></div>
        </div>
    )
}
export default Conversations;