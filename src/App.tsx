import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Watch from './pages/Watch';

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
