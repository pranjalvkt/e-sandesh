import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Conversations from "./components/Conversations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restricted from "./components/Restricted";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? ( <Welcome />) : (<Conversations />)}/>
          {/* <Route path="/" element={<Welcome />}/>
          <Route path="/chats" element={<Restricted child={<Conversations/>}/>}/> */}
          <Route exact path="/chatbox" element={<Restricted child={<ChatBox/>}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
