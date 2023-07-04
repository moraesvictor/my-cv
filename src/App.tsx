import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './views/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-projects" />
          <Route path="/contact-me" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
