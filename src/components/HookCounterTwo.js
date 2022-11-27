import React, {useState} from 'react'

function HookCounterTwo() {
    const initioalVal = 0
    const [count, setCounter] = useState(initioalVal)

    const incrementFive = ()=>{
        for(let i=0; i<5; i++){
            setCounter(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
        count: {count}
        <button onClick={()=> setCounter(initioalVal)}>Reset</button>
        <button onClick={()=> setCounter(prevCount => prevCount + 1)}>Increase</button>
        <button onClick={()=> setCounter(prevCount => prevCount - 1)}>Decrease</button>
        <button onClick={incrementFive}>Increase 5</button>
    </div>
  )
}

export default HookCounterTwo