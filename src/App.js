import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/Header/Header'
import './components/Footer/Footer'
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Homepage from '../src/pages/Homepage/Homepage';
import Resume from '../src/pages/Resume/Resume';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='resume' element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
