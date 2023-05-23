import React, { useEffect, useState } from "react";
import firebase, { signInWithGoogle } from "../../firebase/firebase";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    return (
      <div>
        <h1>Welcome to the app! Please sign in.</h1>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.displayName}!</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
