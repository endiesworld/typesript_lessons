type string_or_number = string | number;

type string_or_number_array = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    album: string_or_number 
}

interface Guitarist_interface {
    name?: string,
    active: boolean,
    album: string_or_number 
}

// Literal types
let app_username: "Emmanuel" | "Adaobi"

type math_function = (x: number, y: number) => number

interface math_function_2 {
    (x: number, y: number): number
}

const multply_function: math_function = (x: number, y: number) =>{
    return x * y
}

// Optional parameters for functions
const add_all = (x: number, y: number, z?: number): number =>{
    if(typeof z !== "undefined"){
        return x + y + z;
    }

    return x + y;
}

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getWindowStat(): WindowStates{
    return "closed"
}