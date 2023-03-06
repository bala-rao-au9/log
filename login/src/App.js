
import './App.css';
import Login  from "./Login";
import Dashboard from "./Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
