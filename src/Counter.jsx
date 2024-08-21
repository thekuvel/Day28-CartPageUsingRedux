import { useDispatch, useSelector } from "react-redux"

const Counter = () =>{

    const countReducer = useSelector( state => state.countReducer)
    const dispatch = useDispatch();

    return(
        <div>
            {console.log("rendering Counter Component")}
            <h1>Count : {countReducer.count}</h1>
            {console.log(countReducer.count)}
            <button onClick={() => dispatch({type : "inc"})}>Inc</button>
            <button onClick={() => dispatch({type : "dec"})}>Dec</button>
            <button onClick={() => dispatch({type : "reset"})}>Reset</button>
        </div>
    )
}

export default Counter