import { useDispatch, useSelector } from "react-redux";
import { increment, decrement,selectCount } from "./reducer";
export function Counter(){
    const dispatch = useDispatch();
    const currentCOunt = useSelector(selectCount);
    return (
        <div>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
            {currentCOunt}
        </div>
    )
}