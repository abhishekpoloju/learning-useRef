import { type NextPage } from "next";
import React from "react";
import { useRef } from "react";
const Home: NextPage = () => {
  const inputRef=useRef<HTMLInputElement>(null)
  const onClick=()=>{
    console.log(inputRef.current?.value)
  }
  const onClickFocus=()=>{
    console.log('focus input')
    inputRef.current?.focus()
  }
  return (
    <div>
      <input ref={inputRef} className="bg-slate-200 "/>
      <button onClick={onClick} className="mr-2 ">LogValue</button>
      <button onClick={onClickFocus} className="ml-2">Focus on Input</button>
    </div>
  );
};

export default Home;
