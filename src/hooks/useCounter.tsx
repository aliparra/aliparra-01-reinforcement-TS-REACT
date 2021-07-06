//CUSTOM HOOK --> NOS PERMITE USAR LA MISMA LÓGICA EN VARIOS COMPONENTES

import { useState } from 'react';

//Aquí va la lógica de los hooks del contador (El estado y el acumulador)
//El igualar el parámetro a 0 es para que en caso de que no se le pase nada se ponga 0 por defecto

export const useCounter = (start: number = 0) => {
    const [value, setValue] = useState(start)

    const accum = (num: number) => {
        setValue(value + num)
    }

    return {
        value,
        accum
    }
}
