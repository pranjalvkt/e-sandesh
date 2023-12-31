import { useNavigate } from "react-router-dom";

const Conversations = () => {
    const navigate = useNavigate();
    const moveToChatBox = () => {
        navigate('/chatbox')
    }
    return(
        <div className="conversations-parent">
            <div className="conversations" >
                <div className="conversation" onClick={moveToChatBox}>
                    <img className="conversation-img" alt='chat logo' src={'https://ui-avatars.com/api/?name=Mavericks'} />
                    <p>Mavericks</p>
                </div>
            </div>
            <div className="conversations-expanded"></div>
        </div>
    )
}
export default Conversations;