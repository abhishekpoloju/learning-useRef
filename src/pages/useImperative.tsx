import React, { useRef } from 'react'
import { Box } from '~/components/Box'
export type IncrementedRef={
  getYLocation:()=> number | undefined
  current: HTMLDivElement | null
}
const data =["","",""]
const UseImperative = () => {
  const refs=[useRef<IncrementedRef>(null), useRef<IncrementedRef>(null), useRef<IncrementedRef>(null)]
  const goToBox=(position:number)=>{
    console.log('go to box: ',refs[position]?.current?.current)
    const boxTop=refs[position]?.current?.getYLocation();
    console.log(boxTop)
    window.scrollTo({top: boxTop,behavior: 'smooth'})
  }
  return (
    <>
      <div>
        <button onClick={()=>goToBox(0)} className='mr-3'>go to 1st box</button>
        <button onClick={()=>goToBox(1)} className='mr-3'>go to 2nd box</button>
        <button onClick={()=>goToBox(2)}className=''>go to 3rd box</button>
      </div>
      <Box size='500' color='bg-red-500' ref={refs[0]}/>
      <Box size='500' color='bg-blue-500' ref={refs[1]}/>
      <Box size='500' color='bg-green-500' ref={refs[2]}/>
    </>
  )
}

export default UseImperative
