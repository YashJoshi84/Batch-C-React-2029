// https://jsonplaceholder.typicode.com/users

import React, { useEffect, useState } from "react";

function UserComponent() {
  const [count, setCount] = useState(0);
  const [userData , setUserData] = useState([])
  const [id , setId] = useState(1)

  useEffect(() => {
    async function getData() {
      let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      let results = await data.json();
      console.log(results);
      setUserData(results)
    }

    getData();
  } , [id]);

  function increment() {
    setCount(count + 1);
  }

  function incrementId(){
    setId(id+1)
  }

  return (
    <div>
      {/* <button onClick={increment}>Increment</button>
      <h4>{count}</h4> */}
       {/* <ol>
       {userData.map((user)=>(
            <li>{user.name}</li>
       ))}
       </ol> */}


       <button onClick={incrementId}>chnageId</button>
       <h5>{id}</h5>

     <h1>{userData.name}</h1>  


        
    </div>
  );
}

export default UserComponent;
