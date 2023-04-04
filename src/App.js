import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Adminhome from './components/Adminhome';
import AdminRoutes from './Routes/AdminRoutes';
import Sign from './components/Login/Sign';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login />} />
          {/* <Route path='/' element={<Sign/>}/> */}
          <Route path='/home' element={<Home />} />
          <Route path='/admin' element={<AdminRoutes />}>
            {/* <Route path='/admin' element={</>}> */}
            <Route path='dashboard' element={<Adminhome />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
