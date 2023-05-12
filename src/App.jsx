import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Registration from './pages/Registration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Registration />} path="/registration" />
      </Routes>
    </Router>
  );
};

export default App;
