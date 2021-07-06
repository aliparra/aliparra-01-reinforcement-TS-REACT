
export const Resume = () => {

    //BASICS
    const name: string = "Alice"
    const age: number = 25
    const active: boolean = true
    const powers: string[] = []
    const hours: number[] = []

    //INTERFACES FOR OBJECTS
    interface Person {
        firstName: string
        age: number
        adress: Adress
    }
    
    interface Adress {
        country: string
        house: number
    }

    const person: Person = {
        firstName: "Alice",
        age: 25,
        adress: {
            country:"Spain",
            house: 55
        }
    }
    //FUNCTIONS
    const sum = (a: number, b: number): number => {
        return a + b 
    }

    return (
        <div>
            
        </div>
    )
}
