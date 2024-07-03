import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Programing1 } from './components/Programing1'
import { Programing2 } from './components/Programing2'
import { Programing3 } from './components/Programing3'
import { Programing4 } from './components/Programing4'
import { Programing5 } from './components/Programing5'
import { Programing6 } from './components/Programing6'
import { Programing7 } from './components/Programing7'
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3'>Proyecto Galería</h1>
        </div>
        <div>
          <Routes>
            <Route path="/Programing1" element={<Programing1 className='image-size' />} />
            <Route path="/Programing2" element={<Programing2 className='image-size' />} />
            <Route path="/Programing3" element={<Programing3 className='image-size' />} />
            <Route path="/Programing4" element={<Programing4 className='image-size' />} />
            <Route path="/Programing5" element={<Programing5 className='image-size' />} />
            <Route path="/Programing6" element={<Programing6 className='image-size' />} />
            <Route path="/Programing7" element={<Programing7 className='image-size' />} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
