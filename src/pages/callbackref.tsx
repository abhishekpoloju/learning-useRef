import React, { useRef } from 'react'

const Test = () => {
  let inputRef:HTMLInputElement|null
  const Onclick=()=>{
    console.log(inputRef?.value)
  }
  const Onfocus=()=>{
    inputRef?.focus()
    console.log("focused")
  }
  console.log("rendering")
  return (
    <div>
      <input ref={node=>{inputRef=node}} className='mr-2'/>
      <button className='ml-2 mr-2' onClick={Onclick}>log value</button>
      <button className='ml-2 mr-2' onClick={Onfocus}>focusing on Input</button>
    </div>
  )
}

export default Test
