import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Shop_Context_Provider } from './context/Context.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Shop_Context_Provider>
   <App />
   </Shop_Context_Provider>
  </React.StrictMode>,
)
