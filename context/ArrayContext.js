/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';

export const ArrayContext = createContext();

export default function ArrayContextProvider({ children }) {
  const [array, setArray] = useState([]);
  const [note, setNote] = useState({});
  const [uidArray, setUidArray] = useState([]);
  const [showColor, setShowColor] = useState(false);
  return (
    <ArrayContext.Provider
      value={{ array, setArray, note, setNote, uidArray, setUidArray, showColor, setShowColor }}
    >
      {children}
    </ArrayContext.Provider>
  );
}
