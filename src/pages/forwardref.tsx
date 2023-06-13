import React from 'react'
import { ForwardedInput } from '~/components/Forwardedcomponent'

const Forwardref = () => {
  const inputRef=React.useRef<HTMLInputElement>(null)
  const selectText=()=>{
    inputRef.current?.select()
    console.log(inputRef.current?.value)
  }
  return (
    <div>
      <ForwardedInput ref={inputRef} placeholder='typeHere'/>
      <button className='ml-4 bg-zinc-300 text-green-500' onClick={selectText}>selectText</button>
    </div>
  )
}

export default Forwardref
