
import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
    //Importo las funciones de estado y de sumar 
    const {value,accum} = useCounter(5);

    return (
        <>
          <h3>Counter with Hooks: <small>{value}</small></h3>  
          <button className="btn btn-primary m-2" onClick={() => accum(1)}>
              +1
          </button>
          
          <button className="btn btn-primary" onClick={() => accum(-1)}>
              -1
          </button>
        </>
    )
}
