import logo from './logo.svg';
import './App.css';
import'./components/Header.css';
import './components/Navbar.css';
import './components/Home.css';
import './components/TV.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import TV from './components/TV';



function App() {
  return (
   
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/TV" element={<TV/>} />
     </Routes>
    </div>
   
  
    
  );
}

export default App;
