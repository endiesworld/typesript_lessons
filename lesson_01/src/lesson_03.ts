type One = string
type Two = string | number
type Three = 'hello'

// Convert to more or less specific types
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

const add_or_concat = (a: number, b: number, c: 'add'|'concat'): number | string => {
    return  (c === 'add') ? a + b : '' + a + b 
} 

let my_val:string = add_or_concat(1, 2, 'concat') as string // This works well

let my_val_2: number = add_or_concat(1, 2, 'concat') as number // This does not works well and will create problems

// The DOM
const img = document.querySelector('img')!
console.log(img.src) // This only worked because of the '!' character

const my_img = document.getElementById('#my_img') as HTMLImageElement
console.log(my_img.src) // This only worked because we have told typescript that we know the type better

