
import React, { useState } from 'react';
import AuthContextProvider from './context/AuthContext';
import AuthNavigation from './navigation/AuthNavigation.js'




export default function App() {

  console.disableYellowBox = true;
  return (
    <AuthContextProvider>
  <AuthNavigation />
  </AuthContextProvider>
  );
}
