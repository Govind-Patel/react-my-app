// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  let showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }

  const toggleMode = () =>{
        if(mode === 'light'){
          setMode('dark')
          document.body.style.backgroundColor = '#042743'; // Dark gray
          showAlert("Dark mode has been enable","success");
          document.title = 'textUtile - Light Mode';
        }else{
          setMode('light')
          document.body.style.backgroundColor = '#fff'; // Dark gray 
          showAlert("Light mode has been enable" ,"success");
          document.title = 'textUtile -Dark Mode';
        }
  }
  return (
   <>
   
        <Navbar title="textUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm showAlert={showAlert} heading ="Enter the text analyze below" mode={mode} />
        </div>
    
   </>
  );
}

export default App;
