import { useState } from "react";

const User=({name,location})=>{

    const [count,setCount]=useState(0)

    return (
        <div className="user-info">
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <h3>Email : kushaltmx@gmail.com</h3>
            <h4>Count : {count}</h4>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default User;