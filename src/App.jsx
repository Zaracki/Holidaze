import './index.css'; 
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Layout } from './components/Layout';
import { Venue } from './pages/Venue';
import { Profile } from './pages/Profile';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Venue/:id" element={<Venue />}/>
          <Route path="/Profile" element={<Profile />}/>
        </Route>
      </Routes>
    </>

  )
}

export default App
