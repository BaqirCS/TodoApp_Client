import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import ShowTodo from './component/showTodo';
import Navbar from './component/Navbar';
import CreateTodo from './component/CreateTodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<ShowTodo />} />
          <Route path="/create" element={<CreateTodo />} />
          <Route path="/update/:id" element={<CreateTodo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
