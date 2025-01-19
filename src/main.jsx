import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HashRouter basename={process.env.NODE_ENV === 'production' ? '/LIN16/' : '/'}> */}
   <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
