import React, { createContext, useState } from 'react';


export const ArrayContext = createContext();

export default function ArrayContextProvider({children}){

const [array, setArray] = useState([]);
const [note, setNote] = useState({})
const [uidArray, setUidArray] = useState([]);
return (
    <ArrayContext.Provider value = {{array,setArray, note, setNote,uidArray, setUidArray}}>
        {children}
    </ArrayContext.Provider>
);

}