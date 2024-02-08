import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    query,
    collection,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { auth, db } from "../firebase";
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
                console.log(doc.data().users);
                doc.data().users.forEach(groupUser => {
                    if(groupUser == auth.currentUser.uid) {
                        groupsArray.push({ ...doc.data(), id: doc.id });
                    }
                });
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
                    groups.length !=0 ? groups.map((ele) => (
                        <div key={ele.id} className="conversation" onClick={()=>moveToChatBox(ele.group)}>
                            <img className="conversation-img" alt='chat logo' src={'https://ui-avatars.com/api/?name='+ ele.group+'&background=random'} />
                            <div style={{margin: 'auto'}}><p>{ele.group}</p></div>
                        </div>
                    )) : <h3 style={{margin: '1vw'}}>Oops! No group found, Contact the Admin for more information.</h3>
                }
            </div>
            <div className="conversations-expanded"></div>
        </div>
    )
}
export default Conversations;