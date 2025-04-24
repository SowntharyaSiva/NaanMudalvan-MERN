import React, { useState } from 'react'
import './index.css'
import './App.css'

 function App() {
  const [name,setName]=useState("")
  const [list,setList] =useState([]);

  function namechange(value){
    setName(value);
  }

  function addList(){
    setList([...list, name])
    console.log(list);
    
  }

  function removeList(){
      setList(list.filter((val) =>{
        if(name !== val) return val
      }))
      console.log(list)
  }
  

  return (
    <><div>
    <h1>{name}</h1>
    <input type="text" onChange={(event) => namechange(event.target.value)} />
    <button onClick={addList}>Change Name</button>
    
    
    <button onClick={addList}>Add</button>

    <button onClick={removeList}> X </button>
    
    </div>
    <div>
      {/* {list.map((value)=>{
         <h1>{value} <button onClick={() => {removeList(value)}}> X </button></h1>
          }
         )}
      */}   
    </div>
    </>
  )
}

export {App}

