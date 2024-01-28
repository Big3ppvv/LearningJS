import { useState, useEffect } from "react";
import NumbersAndSimbols from "../NumbersAndSimbols";
const Calculator = () => {
  const [numberSimbol, setNumberSimbol] = useState('');
  
  
  useEffect(()=>{
    const input = document.getElementById('inside-numbers');
    input.value = numberSimbol;
  },[numberSimbol])

  return (
    <div>
      <div className="grid bg-slate-300 rounded-lg w-1/3 h-screen border-white border-2 m-auto mt-32">
        <input className="w-10/12 bg-slate-900 ml-10 mt-8 h-20 rounded-full text-white pl-8 text-2xl" type="text" id="inside-numbers"/>
        <NumbersAndSimbols insertNumbersSimbols={setNumberSimbol}/>
      </div>
    </div>
  )
}
export default Calculator;