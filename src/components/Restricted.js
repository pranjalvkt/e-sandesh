import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
const Restricted = ({child}) => {
    const [user] = useAuthState(auth);
    return user ? child : <Navigate to='/' replace/>
}
export default Restricted;