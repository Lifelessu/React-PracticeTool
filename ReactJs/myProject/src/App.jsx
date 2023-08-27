//import React, { useState } from 'react';
import Greeting from './Components/createElement';
import BookList from './Components/Books';
import Book from './Components/Books';
import './css/BookStyle.css';
import Sum from './Components/Addition.jsx';
import Display from './practiceComponents/Display';
import Insert from './practiceComponents/Insert';
import TotalCount from './practiceComponents/TotalCount';

function App() {
  
  {
    return(
      <div>
        {/*<Greeting/>*/}
        {/* <Book /> */}
        {/* <Sum/> */}
        <Display/>
        <Insert/>
        <TotalCount/>
      </div>
    );
  }
}

export default App;
