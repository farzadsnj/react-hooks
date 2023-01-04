import React, {useContext} from 'react'
import { CountContex } from '../App'

function CompA() {
    const countContex = useContext(CountContex)
  return (
    <div>
        {/* <div>Count - {count}</div> */}
        Component A - {countContex.countState}
        <button onClick={() => countContex.countDispatch('increase')}>increase</button>
        <button onClick={() => countContex.countDispatch('decrease')}>decrease</button>
        <button onClick={() => countContex.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default CompA