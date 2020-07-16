let data = 42;

data = 42;

export interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}


const car1: ICar = {
    color: 'blue',
    model: 'BMW'
}


const car2: ICar = {
    color: 'red',
    model: 'Mercedes',
    topSpeed: 200
}

const multiply = (x: number, y: number): string => {
    return (x + y).toString();
}

export const cars = [car1, car2]