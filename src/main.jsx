import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalContext from './GlobalContext';
import './index.css';
import './styles/heading.css';
import './styles/input.css';
import './styles/Input/title.css';
import './styles/Input/controls.css';
import './styles/Input/input-field.css';
import './styles/Input/info.css';
import './styles/Input/run.css';
import './styles/category.css';
import './subComponents/button.css';
import './subComponents/alert.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>
);
