import React, { useRef, useState } from 'react'

const Something = () => {
  const inputRef=useRef<HTMLHeadingElement>(null)
  const handleFunction=()=>{
    console.log(inputRef.current?.getBoundingClientRect().top)
  }
  return (
    <div className=''>
      <h1 ref={inputRef} onClick={handleFunction} className='absolute top-[50%] left-[50%]'>Hiiiiiiiiii</h1>
    </div>
  )
}

export default Something
