# Tips and code slices

### Capture Additional Errors
You can manually capture errors or log additional data using Sentry:
```javascript
import * as Sentry from '@sentry/react';

try {
  // Your code here
} catch (error) {
  Sentry.captureException(error);
}
```

### Adding More Detailed Error Logging in Error Boundaries
You can enhance your ErrorBoundary to send more detailed information to Sentry when an error occurs:

```javascript
componentDidCatch(error, errorInfo) {
  // Log to Sentry
  Sentry.captureException(error, {
    extra: errorInfo,
  });
}
```

### Setting Up Performance Monitoring
Sentry can also monitor application performance by tracking things like load times, transaction spans, and more. The initial configuration you’ve already set up includes performance monitoring via the tracesSampleRate option.

You can track specific operations in your app:

```javascript
const transaction = Sentry.startTransaction({ name: "My Transaction" });

Sentry.configureScope(scope => {
  scope.setSpan(transaction);
});

// Your code here

transaction.finish();
```

### Use these env variables in your app:

```javascript
const apiUrl = process.env.REACT_APP_API_BASE_URL;
```




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
