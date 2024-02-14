import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import Button from '../Button';

const LoginAuth = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if (currentUser) {
          // Reset error state upon successful login
          setError('');
        }
      });
      return () => unsubscribe();
    }, [auth]);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError(''); // Reset error before attempting to log in
      if (!email || !password) {
        setError('Please fill in both email and password.');
        return;
      }
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail('');
        setPassword('');
      } catch (error) {
        // Handle different error codes here (e.g., 'auth/user-not-found')
        setError(error.message); // Display a generic error message or a customized one based on error.code
      }
    };
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Error signing out", error);
        setError("Failed to log out. Please try again.");
      }
    };
  
    return (
      <div className='login-auth'>
        {user ? (
          <div>
            <p>Welcome, {user.email}</p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <form className='login-form flex-col' onSubmit={handleLogin}>
            <input className='edit-form-input'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
            className='edit-form-input'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        )}
      </div>
    );
  ;
};

export default LoginAuth;
