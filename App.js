
import React, { useState } from 'react';
import AuthContextProvider from './context/AuthContext';
import AuthNavigation from './navigation/AuthNavigation.js'


export default function App() {
  return (
    <AuthContextProvider>
  <AuthNavigation />
  </AuthContextProvider>
  );
}
