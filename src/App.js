import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Conversations from "./components/Conversations";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? ( <Welcome />) : (<Conversations />)}/>
          <Route path="/chatbox" element={<ChatBox></ChatBox>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
