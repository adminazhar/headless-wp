import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderLayout } from './components/layout/header/header';
import { FooterLayout } from './components/layout/footer/footer';
function App() {
  return (
    <div>
      <HeaderLayout></HeaderLayout>
      <p>Yo WP!</p>
      <FooterLayout></FooterLayout>
    </div>
  );
}

export default App;
