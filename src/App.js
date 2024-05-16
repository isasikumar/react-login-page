import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Login from "./Login/Login";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
