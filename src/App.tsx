import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './views/Home';
import { NavigateTo } from './utils/NavigateTo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NavigateTo path="/my-profile" />} />
          <Route path="/my-profile" element={<Home />} />
          <Route path="/my-projects" />
          <Route path="/contact-me" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
