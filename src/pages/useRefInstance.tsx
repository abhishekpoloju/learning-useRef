import React from 'react'
import { useState,useRef } from 'react'
export default function UseRefInstance() {
  const[show,setShow]=useState(false)
  let count=0
  let refCount=useRef(0)
  const increment=()=>{
    refCount.current++;
    count++
    console.log(count)
    console.log(refCount)
  }
  const showCounter=()=>{
    setShow(true)
    
  }
  console.log(`rendering simple value with ref ${refCount.current}, without ref ${count}`)
  return (
    <div>
      <button onClick={increment} className='p-2 bg-red-500 text-white m-4'>Increment</button>
      <button onClick={showCounter} className='p-2 bg-blue-600 text-white m-4'>show counter</button>
      {show && <p>Times you clicked on button: with ref {refCount.current}, without ref {count}</p>}
    </div>
  )
}
