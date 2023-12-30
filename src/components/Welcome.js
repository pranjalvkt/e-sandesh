import React, { useEffect, useState } from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  useEffect(() => {
    setLoadingFlag(true);
  }, [])
  getRedirectResult(auth).then(() => {
    console.log('resolved');
    setLoadingFlag(false);
  })
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const [loadingFlag, setLoadingFlag] = useState(false);

  return (
    <div className="welcome">
      {
        loadingFlag ?
          <div className="loadingbg">
            <img className="loadinggif" src='/XOsX.gif' />
            <h1>Loading...</h1>
          </div> :
          <main>
            <h2>Welcome to e-Sandesh.</h2>
            <img src="sandesh.svg" alt="App logo" width={100} height={100} />
            <p>Sign in with Google.</p>
            <button className="sign-in">
              <img
                onClick={googleSignIn}
                src={GoogleSignin}
                alt="sign in with google"
                type="button"
              />
            </button>
          </main>
      }

    </div>
  );
};

export default Welcome;
