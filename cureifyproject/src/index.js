import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutingApp from './RoutingApp';
import { LanguageProvider } from './context/LanguageContext';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
     <LanguageProvider>

    <RoutingApp />
     </LanguageProvider>
  </React.StrictMode>
);


// reportWebVitals();
