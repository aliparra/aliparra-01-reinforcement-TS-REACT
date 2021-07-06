

export const BasicTypes = () => {

    
    const name: string = "Alice";
    const age: number = 25
    const active: boolean = true
    const powers: string[] = []
    const hours: number[] = []

    return (
        //I use a fragment
        <>
         <h3>Basic types</h3>  
         {name}, {age},{(active) ? "is active" : "Is unactive"}
         <br />
         {powers.join(", ")}
        </>
    )
}
