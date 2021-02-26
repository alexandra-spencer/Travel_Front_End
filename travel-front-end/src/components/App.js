import React from 'react';
import '../App.css';
import Header from "./Header";
import CountryPage from "./CountryPage";
import Login from "./Login";

function App() {
  return (
    <div >
      <Header />
      <CountryPage />
      <Login />
    </div>
  );
}

export default App;