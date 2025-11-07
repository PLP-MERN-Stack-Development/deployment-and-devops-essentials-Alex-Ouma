Sentry integration notes

1. Create a Sentry project for JavaScript and a second for Node (optional).
2. Install SDKs:
   - Backend: `npm install @sentry/node`
   - Frontend: `npm install @sentry/react @sentry/tracing`

3. Backend initialization (example):

```js
const Sentry = require('@sentry/node');
Sentry.init({ dsn: process.env.SENTRY_DSN, environment: process.env.NODE_ENV });

// capture errors
app.use(Sentry.Handlers.errorHandler());
```

4. Frontend initialization (example):

```js
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 0.2,
});
```

5. Add Release tracking and source maps upload in CI for precise stack traces.
