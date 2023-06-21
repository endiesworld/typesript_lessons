let username: string = 'Emmanuel';
let age: number = 36 ;
let isMarried: boolean = true ;
let weight: number | string ; // Union string or numbers
let career: any ;

const sum = (x: number, y:number): number => {
    return (x + y)
}

console.log('sum of 5 & 9 is: ', sum(6, 9))

// Array
let arr_1: string[] = ["A", "B", "C", "D",];
let arr_2: (string | number)[] = [username, age]
let arr_3: (string | number | boolean)[] = [...arr_1, ...arr_2, isMarried];

//Tupple like python tupple but with type
let my_tupple: [string, number, boolean] = [username, age, isMarried]; //Position matters

// Object
let my_object: object ;
my_object = arr_1; 
my_object = arr_3;
my_object = my_tupple; //

const my_object_2 = {
    name: "Emmanuel",
    age: 36,
    isMarried: true
}

type Mamal = {
    name?: string,
    age: number,
    isMarries: boolean,
    weight?: number // '?' indicates that the weight key is optional
}

interface Person {
    name: string,
    age: number,
    isMarries: boolean,
    weight?: number // '?' indicates that the weight key is optional
}

let my_person: Mamal = {
    name: "Emmanuel",
    age: 36,
    isMarries: true
}

const get_mamal_name = (mamal: Mamal) => {
    // Checks name property is defined
    return mamal.name?.toLowerCase()
}

const get_person_name = (person: Person): string => {
     return person.name ? person.name : "" ; // Uses Tenary operator
}

console.log('The user name is: ', get_mamal_name(my_person))