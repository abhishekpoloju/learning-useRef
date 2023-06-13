import React, { useRef } from 'react'
import { forwardRef, useImperativeHandle } from 'react'
import { IncrementedRef } from '~/pages/useImperative'

type BoxProps = {
  size: string,
  color: string
}

export const Box = forwardRef<IncrementedRef, BoxProps>(({size, color}, ref)=>{
    const divRef=useRef<HTMLDivElement>(null)
    useImperativeHandle(ref,()=>({
      getYLocation:()=>divRef.current?.getBoundingClientRect().top,
      current:divRef.current
    }))
    return(
      <div className={`h-[${size}px] w-[${size}px] ${color} my-0 mx-auto`} ref={divRef}></div>)
    })
