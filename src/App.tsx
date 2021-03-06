import { BasicTypes } from './typescript/BasicTypes';
import { LiteralObjects } from './typescript/LiteralObjects';
import { Functions } from './typescript/Functions';
import { Counter } from './components/Counter';
import { CounterWithHook } from './components/CounterWithHook';

 const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a typescript react</h1>
      <hr />
      {/* <BasicTypes/> */}
      {/* <LiteralObjects/> */}
      {/* <Functions/> */}
      {/* <Counter/> */}
      <CounterWithHook/>
    </div>
  )
}

export default App