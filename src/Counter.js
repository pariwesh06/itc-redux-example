import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./reducer";
export function Counter(){
    const dispatch = useDispatch();
    const currentCOunt = useSelector(selectCount);
    return (
        <div>
            <button onClick={()=> dispatch(increment())}>increment</button>
            {currentCOunt}
        </div>
    )
}