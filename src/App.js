import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/Header/Header'
import './components/Footer/Footer'
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Homepage from '../src/pages/Homepage/Homepage';
import Resume from '../src/pages/Resume/Resume';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
