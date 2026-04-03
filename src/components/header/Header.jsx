
import {useState} from "react";

import Navbar from "./Navbar";



export default function Header({ getKeywords }) {
  const onChangeHandler = (event)=>{
    const value = event.target.value === ``? false:true;
setKeywords(event.target.value);
setActive(value);
getKeywords(event);
  }

  const [active,setActive] =useState(false);
 const [keywords,setKeywords]=useState(``)
  

  return (

    <>
      <header style ={{background : `${active ? "pink" : ""}`}}>
        <div
          className="logo"
          >
          AWESOME NEWS
        </div>
        <input
          
          onChange={onChangeHandler}
        />

        {/* <p>The keyword are : {keyword}</p> */}

        <Navbar />
      </header>
    </>
  );
}