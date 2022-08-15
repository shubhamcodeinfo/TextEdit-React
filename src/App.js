import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import Alert from './component/Alert';

function App() {
    const [mode, setMode] = useState('light');
    const changeMode = () => {
      if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = '#383735'
  
        showAlert('Dark mode Enable', 'success')
      }
      else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
  
        showAlert('Light mode Enable', 'light')
      }
    }
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
  
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1000)
    }
  
    return (
    <>
      
    <Navbar title="TextUtile" mode={mode} toggleMode={changeMode} />
        <Alert alert={alert} />
        <TextForm heading='Analyze the text hear' mode={mode} showAlert={showAlert} />
    </>
  
      
    );
  
}

export default App;
