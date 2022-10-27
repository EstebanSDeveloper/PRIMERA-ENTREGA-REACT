import { useState } from "react"
import '../Counter_Button/counter.css';

function Counter() {
    const stock = 6
    const [numberCount, setnumberCount] = useState(0)
    
    return(
    <div className="container my-4">
        <div className="card text-center ">
            <div className="card-body d-flex flex-row justify-content-center">
                <button className="btn btn-danger mx-3" onClick={() => setnumberCount(numberCount - 1)}
                disabled={numberCount === 0}>-</button>
                    <h2 className="my-2">{numberCount}</h2>
                <button className="btn btn-success mx-3" onClick={() => setnumberCount(numberCount + 1)}
                disabled={numberCount === stock}>+</button>
                <button className="btn btn-secondary mx-3" onClick={() => setnumberCount(0)}>Reset</button>
            </div>
        </div>
    </div>)
}

export default Counter