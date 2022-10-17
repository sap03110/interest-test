import { Route, Routes } from 'react-router-dom';

import './styles/global.css';
import Intro from './pages/Intro';
import Main from './pages/Main';
import Result from './pages/Result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/main" element={<Main />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
