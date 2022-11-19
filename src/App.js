import Navbar from './components/Navbar';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AddStudent />} />
        <Route path='/allstudents' element={<AllStudents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
