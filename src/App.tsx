import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MyProfile } from './views/MyProfile';
import { NavigateTo } from './utils/NavigateTo';
import { MyProjects } from './views/MyProjects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NavigateTo path="/my-profile" />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/contact-me" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
