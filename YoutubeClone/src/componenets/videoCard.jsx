const VideoCard=(props)=>{
    return (<div className="mt-2 ml-2 h-85 w-65 bg-gray-100  item-centre rounded-md border-2 border-solid" >
        <div className="h-60 w-full mb-5"><img src= "./images/flip.jpeg" alt="image"></img> </div>
        <div className="w-65 flex grid grid-cols-5">
            <div className="rounded-full h-10 w-10 pl-3 mb-2 col-span-1 "><img src= "./images/flip.jpeg" alt="image" className="mb-1 mt-1"></img></div>
            <div className="ml-2 mt-2 col-span-4 text-gray-600">{props.title}</div>
        </div>
        <div className="ml-15 ">{props.channel}</div>
    </div>)     
}
export default VideoCard ;