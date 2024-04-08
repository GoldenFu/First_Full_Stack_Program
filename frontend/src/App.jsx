import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage';
import AddStudent from './pages/AddStudent';
import ShowAllStudents from './pages/ShowAllStudents';
import FindStudentByName from './pages/FindStudentByName';
import DeleteStudentById from './pages/DeleteStudentById';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/add" element={<AddStudent/>}></Route>
    <Route path="/showAll" element={<ShowAllStudents/>}></Route>
    <Route path="/findByName" element={<FindStudentByName/>}></Route>
    <Route path="/deleteById" element={<DeleteStudentById/>}></Route>
    </Routes>
    



    </BrowserRouter>
  );
}

export default App;
