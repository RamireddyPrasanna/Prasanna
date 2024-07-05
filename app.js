import React,{useState}from 'react';
function app(){
    const[count, setCount]=useState(0);
    function increment(){
        setCount(count+1);
    };
    function app(){
        const decrement=()=>{
            setCount(count-1);
        };
    }
    return(
        <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>


    );
}
export default app;