import { useState } from 'react'
import './App.css'
import VideoCard from './componenets/videoCard'

function App() {
  const VIDEOS=[{
    videoimg:'https://picsum.photos/600/400' ,
    title:"hey theis is tutorial for react js" ,
    name: "Raju Ranjan Yadav",
    views: "2 M" ,
    time: "1 hr ago",
  },{
    videoimg: 'https://picsum.photos/600/400',
    title: "Mastering React Hooks in 20 Minutes",
    name: "Priya Sharma",
    views: "850 K",
    time: "3 hrs ago",
  },
  
  {
    videoimg: 'https://picsum.photos/600/400',
    title: "Build a Portfolio Website with React",
    name: "Dev Journey",
    views: "1.2 M",
    time: "2 days ago",
  },
  
  {
    videoimg: 'https://picsum.photos/600/400',
    title: "Top 10 React Interview Questions",
    name: "CodeWithRavi",
    views: "560 K",
    time: "5 hrs ago",
  },
  
  {
    videoimg: 'https://picsum.photos/600/400',
    title: "React JS Crash Course for Beginners",
    name: "Anjali CodeSpace",
    views: "3.1 M",
    time: "1 week ago",
  },
  {
    videoimg: 'https://picsum.photos/600/400',
    title: "Understanding Redux with React",
    name: "Techie Abhi",
    views: "990 K",
    time: "10 hrs ago",
  }
  ]
  return (
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
      {VIDEOS.map((video)=><VideoCard videoimg={video.videoimg} title={video.title} name={video.name} views={video.views} time={video.time}/>)}
      </div>
  )
}

export default App;
