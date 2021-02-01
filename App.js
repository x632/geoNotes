
import React, { useState } from 'react';
import ArrayContextProvider from './context/ArrayContext';
import AuthContextProvider from './context/AuthContext';
import AuthNavigation from './navigation/AuthNavigation.js'

export default function App() {

  console.disableYellowBox = true;
  return (

    <AuthContextProvider><ArrayContextProvider>
  <AuthNavigation />
  </ArrayContextProvider></AuthContextProvider>
  );
}
