// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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

  const removeBodyClass = ()=>{
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls) =>{
      removeBodyClass();
      document.body.classList.add('bg-'+cls);
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
  const heading = "Try TextUtils - Word Counter, Character Counter, Remove extra spaces";
  return (
   <>
      <Router>
        <Navbar title="textUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading={heading} mode={mode} />} />
            {/* <Route exact path="/" element={<TextForm />} showAlert={showAlert} heading ="Enter the text analyze below" mode={mode} /> */}
          </Routes>
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading ="Enter the text analyze below" mode={mode} />
            </Route>
          </Switch> */}
        </div>
      </Router>
   </>
  );
}

export default App;
