import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(++counter)
    }
    return (
        <div>
            {counter}
            <br />
            <button onCanPlay={increase()}>Increase</button>
        </div>
    )
}