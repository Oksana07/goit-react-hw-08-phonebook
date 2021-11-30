import {Link, Routes, Route} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {PublicRoute} from "./rautes/PublicRoute";
import {PrivateRoute} from "./rautes/PrivateRoute";


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav> 
         <ul>
           <li>
             <Link to="/">Home</Link>
             </li>
             <li>
             <Link to="/login">Login</Link>
             </li>
             <li>
             <Link to="/register">Register</Link>
             </li>
           </ul>
         </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home}/>}/>
          <Route path="/login" element={<PublicRoute component={Login}/>}/>
          <Route path="/register" element={<PublicRoute component={Register}/>}/>

        </Routes>
      </main>
    </div>
  );
}

export default App;
