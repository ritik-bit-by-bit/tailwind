import { useState } from "react";
import "./App.css";
import { RevenueCard } from "./components/revenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    // flex layout

    /*<div className='flex justify-between ' >
      <div className='bg-red-50 w-75 h-10 justify-items-center '>
hey
      </div>
      <div className='bg-blue-50'>
hello
      </div>
      <div className='bg-green-50'>
yes
      </div>
      </div>*/

    // grid layout

    /*<div className="grid grid-cols-10">
      <div className="bg-amber-600 col-span-4 justify-items-center ">hey</div>
      <div className="bg-green-500 col-span-4">hello</div>
      <div className="bg-yellow-400 col-span-2">yes</div>
    </div>*/

    /*<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      <div>hello</div>
      <div>hi</div>
      <div>hey</div>
      <div>hello</div>
      <div>hi</div>
      <div>hey</div>
      <div>hi</div>
      <div>hey</div>
    </div>*/
    <div className="grid grid-cols-3">
      <RevenueCard title={'Amount Pending'} amount={'92,312.20'} orderCount={13}/>
      <RevenueCard title={'Amount Pending'} amount={'92,312.20'} orderCount={false}/>
      <RevenueCard title={'Amount Pending'} amount={'92,312.20'} orderCount={false}/>
    </div>
  );
}

export default App;
