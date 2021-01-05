import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./reducer";
export function Receiver(){
    const currentCOunt = useSelector(selectCount);
    return (
        <div>
           Received:  {currentCOunt}
        </div>
    )
}