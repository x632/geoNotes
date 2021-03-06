/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('user: ', user);
      setUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  });

  const logIn = async (email, password) => {
    console.log('calling log in');

    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('log in ');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(`${error}`);
      console.log('my error:', error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setErrorMessage('');
      console.log('You are signed out');
    } catch (error) {
      setErrorMessage(`${error}`);
      console.log('my error:', error);
    }
  };

  const createUser = async (email, password) => {
    console.log('Calling createuser');
    setErrorMessage('');
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setErrorMessage('');
      console.log('Created user');
    } catch (error) {
      setErrorMessage(`${error}`);
      console.log('my error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        signOut,
        createUser,
        isLoading,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
