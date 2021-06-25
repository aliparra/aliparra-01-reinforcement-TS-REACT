

export const BasicTypes = () => {

    
    const name: string = "Alicia";
    const age: number = 25
    const active: boolean = true
    //Puedes definir el tipo de dato que va a aceptar el string aunque aún no haya nada dentro. 
    const powers: string[] = []

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
