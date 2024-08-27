import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'react-router-dom';
import App from './App'; // or wherever your App component is located
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0, // Adjust based on your desired sampling rate
  environment: process.env.REACT_APP_ENV || 'development', // Optional: Track environment
});

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <App />
    </Routes>
  </React.StrictMode>,
  document.getElementById('root')
);
