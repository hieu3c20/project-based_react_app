import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home'
import Login from './components/pages/log_in'
import SignUp from './components/pages/sign_up'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign_up" exact element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
