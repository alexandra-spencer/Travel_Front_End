import React from 'react';
import '../App.css';
import Header from "./Header";
import CountryPage from "./CountryPage";
import 'semantic-ui-css/semantic.min.css';



function App() {
  return (
    <div >
      <Header />
      <br></br>
      <CountryPage />
      <br></br>
    </div>
  );
}

export default App;