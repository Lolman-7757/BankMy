import Login from './Pages/Login/Login';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Main from './Pages/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
