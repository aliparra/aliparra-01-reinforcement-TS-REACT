import { useState } from "react"

export const Counter = () => {

    const [value, setValue] = useState(0)

    const accum = (num: number) => {
        setValue(value + num)
    }

    return (
        <>
          <h3>Counter <small>{value}</small></h3>  
          <button className="btn btn-primary m-2" onClick={() => accum(1)}>
              +1
          </button>
          
          <button className="btn btn-primary" onClick={() => accum(-1)}>
              -1
          </button>
        </>
    )
}
