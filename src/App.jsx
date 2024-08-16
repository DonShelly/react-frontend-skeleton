import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import { store } from './store'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </Provider>
  )
}

export default App
