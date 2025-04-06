const VideoCard=(props)=>{
    return (<div className="h-70 w-85 bg-gray-200 rounded-2xl shadow-xl mt-7 ml-7 mb-3">   
<video class="w-full" controls>
  <source src="https://youtu.be/r8bbwJ2xAys?si=ykXmeoG7ESppruT9" type="video/mp4"/>
</video>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-2 "><img src={props.videoimg} className="rounded-full w-15 h-15 items-center pt-1 "></img></div>
            <div className="col-span-10 pl-2">
            <div>
                 {props.title}
                 </div>
                 <div className="text-base text-gray-600">
                    {props.name}
                 </div>
                 <div className="text-gray-600 text-base">
                    {props.views} | {props.time}
                 </div>
            </div>
            </div>
        </div>
        )     
}
export default VideoCard ;