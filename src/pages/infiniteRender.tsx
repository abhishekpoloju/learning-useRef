import React, { useEffect, useRef, useState } from 'react'

export default function InfiniteRender() {
  const count=useRef(0)
  const [value,setValue]=useState(0)
  useEffect(()=>{
    count.current=count.current+1
  })
  return (
    <>
    <input value={value} type='number' onChange={(event)=>{setValue(Number(event.target.value))}}/>
    <div>{count.current}</div>
    </>
  )
}
