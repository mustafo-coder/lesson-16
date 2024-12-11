import { useContext } from "react";
import { Context } from "../Context";

const Counter = () => {
  // Context Providerdagi value ga murojat qildik, useContext ichiga o'zimiz yaratgan Context ni qo'ydik, u bizga object objectda value bo'ladi bo'adi.  
  const { state, setState } = useContext(Context);
    const getRandom = () => {
        const res = (Math.random() * 10 | 0)
        console.log(res); 
        
        return res
    }
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => setState({ type: "INCREASE" })}>Increase</button>
      <button onClick={() => setState({ type: "DECREASE" })}>Decrease</button>
      {/* Payload orali o'zimiz malumot jo'natdik */}
      <button onClick={() => setState({ type: "UPTOMY", payload: getRandom() })}>UPTOMY</button>
    </div>
  );
};

export default Counter;
