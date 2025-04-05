import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VideoCard from './componenets/videoCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <VideoCard  title={"India should watch this"} channel={"Career420"}/>
  </StrictMode>,
)
