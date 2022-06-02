import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBCyv9vqpgA67l1Y6e4vpuxwBv0-kVxs3M",
  authDomain: "tiendita-chanampe.firebaseapp.com",
  projectId: "tiendita-chanampe",
  storageBucket: "tiendita-chanampe.appspot.com",
  messagingSenderId: "761255625995",
  appId: "1:761255625995:web:17c9681120f5aa5fe70e0e"
};

initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
