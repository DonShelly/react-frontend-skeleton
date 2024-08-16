import { useState } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import './styles/global.css';


function App() {
  const [count, setCount] = useState(0)

  return (
      <ErrorBoundary>
        <div>
          <Navbar />
          <AppRoutes />
        </div>
      </ErrorBoundary>
  )
}

export default App
