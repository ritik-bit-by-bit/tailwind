import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VideoCard from './componenets/videoCard.jsx'
import AppBar from './componenets/AppBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppBar></AppBar>
    <App/>
  </StrictMode>,
)
