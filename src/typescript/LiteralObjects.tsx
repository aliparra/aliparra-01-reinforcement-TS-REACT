
interface Person {
    firstName: string;
    age: number;
    adress: Adress
}

interface Adress {
    country: string;
    house: number
}

export const LiteralObjects = () => {

    const person: Person = {
        firstName: "Alice",
        age: 25,
        adress: {
            country:"Spain",
            house: 55
        }
    }

    return (
        <>
          <h3>Literal Objects</h3>  
          <code>
              <pre>
                  {JSON.stringify(person, null, 2)}
              </pre>
          </code>
        </>
    )
}
