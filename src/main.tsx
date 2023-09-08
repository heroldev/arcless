/*
* Authored by Andrew Herold (heroldev)
* Copyright 2023
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.less'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
