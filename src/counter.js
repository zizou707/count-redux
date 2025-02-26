import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "./counterSlice";

function Counter(){
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <div>count : {count}</div>
            <button onClick={()=>dispatch(increment())}> Plus +</button>
            <button onClick={()=>dispatch(decrement())}> Moin -</button>
        
        </div>
    )
}

export default Counter;