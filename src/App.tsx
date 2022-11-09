import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/globalStyle';
import Enroll from './pages/Enroll';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Enroll />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
