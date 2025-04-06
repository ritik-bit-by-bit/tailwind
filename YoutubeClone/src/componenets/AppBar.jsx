
import SearchBar from "./SearchBar.jsx"
const AppBar=()=>{
 return(<div className="grid grid-cols-14 bg-red-400 mb-1 h-15 w-full">
        <div className=" flex col-span2 pl-2 pr-1 pt-2 ">
          <div >
            <img src="https://th.bing.com/th/id/OIP.x6ORNet4b7neljiZFZw_FQHaHa?rs=1&pid=ImgDetMain"></img>
          </div>
          <div className="font-sans text-lg font-bold text-white">Youtube</div>
        </div>
        <div className="col-span-10 pt-1 pb-1">
          <SearchBar></SearchBar>
        </div>
        <div className=" col-span-2 pl-2 pr-3 pt-2 justify-items-end">
           Sign In
        </div>
 </div>)
}
export default AppBar ;


