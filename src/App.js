import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contact";
import Navbar from "./componets/Navbar";
import Post from "./componets/pages/Post";
import Dashboard from "./componets/pages/Dashboard";
import Login from "./componets/pages/Login";
import Logout from "./componets/pages/Logout";

function App() {
  let a=true;
  const d1={
    st:"kirlum de pirlum"
  }
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {/*<Route path="/" element={<h1>hello router </h1>}/> */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/post/:category" element={<Post/>} />
          <Route path="/post/:category/:id" element={<Post/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/dashboard" element={a?<Dashboard/>:<Navigate to="/login" replace state={d1} />}/>   {/*dashboard*/}


          <Route path="*" element={<h1>404 not found</h1>}/>
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
