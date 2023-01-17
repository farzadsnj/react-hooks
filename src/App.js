import './App.css';
import React, {useReducer} from 'react'
// import DataFetchingUseState from './components/DataFetchingUseState';
// import DataFetchingUseReducer from './components/DataFetchingUseReducer';
// import ParentComp from './components/ParentComp';
// import CallbackCounter from './components/CallbackCounter';
// import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
// import DataFetching from './components/DataFetching';
// import ComponentC from './components/ComponentC';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';
// import CompA from './components/CompA';
// import CompB from './components/CompB';
// import CompC from './components/CompC';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounterFive from './components/HookCounterFive';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalCounter from './components/IntervalCounter';
// import IntervalHook from './components/IntervalHook';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// export const CountContex = React.createContext()

// const initialState = 0
// const reducer = (state, action) =>{
//     switch(action){
//         case 'increase':
//             return state + 1
//         case 'decrease':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (

    // <CountContex.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      <HookTimer />
      <ClassTimer />
      {/* <FocusInput /> */}
      {/* <CallbackCounter /> */}
      {/* <ParentComp /> */}
      {/* <DataFetchingUseReducer /> */}
      {/* <DataFetchingUseState /> */}
    {/* //   Count - {count}
    //   <CompA />
    //   <CompB />
    //   <CompC /> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={'farzad'}>
        <ChannelContext.Provider value={'Sanjarani'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne />
      <HookCounterFive /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalCounter />
      <IntervalHook /> */}
    </div>
    // </CountContex.Provider>
  )
}

export default App;
