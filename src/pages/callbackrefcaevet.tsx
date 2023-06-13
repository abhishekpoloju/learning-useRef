import React, { useState } from 'react'

const CallBackRefCaevt = () => {
  let inputRef:HTMLInputElement
  const[count,setCount]=useState(0)
  const Onclick=()=>{
    console.log(inputRef.value)
  }
  const Onfocus=()=>{
    inputRef.focus()
    console.log("onFocused")
  }
  const OnRenderClick=()=>{
    console.log('clicked to re-render')
    setCount(count+1)
  }
  return (
    <div>
      <input ref={node=>{
        console.log("nodeValue is ",node)
        if(node){
          inputRef=node
        }
      }}
      className='mr-2 '
      />
      <button className='ml-2' onClick={Onclick}>LogValue</button>
      <button className='ml-2' onClick={Onfocus}>focusInput</button>
      <button className='ml-2' onClick={OnRenderClick}>rerender count {count}</button>
    </div>
  )
}

export default CallBackRefCaevt
