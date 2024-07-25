import AllPosts from './components/AllPosts.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create.jsx';
import Edit from './components/Edit.jsx';
import Layout from './components/Layout.jsx';

function App() {

  return (
    <div className="bg-stone-900">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}> 
            <Route index element={<AllPosts />} />
            <Route path="create" element={<Create />} />
            <Route path="edit" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
