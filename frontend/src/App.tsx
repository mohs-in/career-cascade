import AllPosts from './components/AllPosts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Edit from './components/Edit';

function App() {

  return (
    <div className="bg-stone-900">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPosts/>}/>
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
