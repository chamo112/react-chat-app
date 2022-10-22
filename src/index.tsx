import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from '/Users/rika/develop/practice/react-chat-app/src/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Routes />
    <div>Hello World</div>
  </React.StrictMode>
);
