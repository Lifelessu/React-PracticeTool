import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/count.jsx';
import UseState from './components/UseState.jsx';
import UseStateArray from './components/UseStateArray.jsx';
import UseStateObject from './components/UseStateObject';
import UseEffect from './components/UseEffect.jsx';
import TernaryOperator from './components/TernaryOperator';
import FormSubmit from './components/FormSubmit';
function App() {

  return (
    <>
      <div>
        {/* <UseStateObject/> */}
        {/* <Count/> */}
        {/* <UseEffect/> */}
        {/* <TernaryOperator/> */}
        <FormSubmit/>
      </div>
    </>
  )
}

export default App
