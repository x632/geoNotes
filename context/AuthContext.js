import React, { createContext, useState, useEffect } from 'react';
import {auth} from '../firebase';

export const AuthContext = createContext();

export default function AuthContextProvider({children}){

    const [isLoading, setIsLoading]=useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log("user: ", user);
        setUser(user);
        setIsLoading(false);
        })
        return unsubscribe;
    })

    const logIn = async(email, password) =>{
        console.log("calling log in");

       try{ 
        await auth.signInWithEmailAndPassword(email, password);
            console.log("log in ");     
        } catch (error) {
            console.log("Error: ",error);
        }
    };

    const signOut = async () => {
        try{
            await auth.signOut();
            console.log("You are signed out")
        } catch (error) {
            console.log("error", error)
        }
    };

    const createUser = async (email,password) => {
        console.log("Calling createuser");
        try{ 
           await auth.createUserWithEmailAndPassword(email, password);
            console.log("Created user" );
        } catch (error){
            console.log("error :",error)
        }
    }
    
    return (
        <AuthContext.Provider value={{user, logIn, signOut, createUser, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
}