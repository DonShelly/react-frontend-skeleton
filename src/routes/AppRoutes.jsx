import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import Dashboard from '../pages/Dashboard'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
