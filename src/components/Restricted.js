import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const Restricted = ({child}) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    return user ? child : navigate('/')
}
export default Restricted;