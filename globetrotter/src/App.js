import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Recommendation from './Recommendation';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommendation />} />
      </Routes>
    </Router>
  );
}

export default App;