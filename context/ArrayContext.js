import React, { createContext, useState } from 'react';


export const ArrayContext = createContext();

export default function ArrayContextProvider({children}){

const [array, setArray] = useState([]);


return (
    <ArrayContext.Provider value = {{array,setArray}}>
        {children}
    </ArrayContext.Provider>
);

}