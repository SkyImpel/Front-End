/* 
    Optional Parameter
*/

function findAreaCircle(r: number, xyz?: number) {
    let PI: number = 3.14;
    let total = PI * (r * r) + " cm";
    console.log(total);
}

// findAreaCircle(20);








/*
    Default Parameter
*/

function fullName(firstName?: string, lastName = 'Usman') {
    console.log(`${firstName} ${lastName}`);
}
fullName('Ali'); // both are correct
fullName('Ali', 'Umar');








/* 
    Rest Parameter

    The rest parameter is an array which receives the arguments, store them into index order (start from 0)
*/

function getNames(firstName: string, ...argList: string[]) {
    console.log(`${firstName} ${argList} `);
    // console.log(argList[0]);    
}
getNames('Lists', 'foo', 'bar', 'baz');


function getList(...argNames: string[]) {

    for (let index = 0; index < argNames.length; index++) {
        console.log(`Args Names ${index} : ${argNames[index]}`);
    }
}
getList('TypeScript', 'JavaScript', 'C#', 'C++');








/*
    Custom Types
*/
type NumberString = number | string;
type CallbackFunction = (x: number, y: number) => number;

function demoFunction(value: NumberString) {
}
demoFunction(12);
demoFunction('This is paragraph...');

let demoFunction2: CallbackFunction = function (x: number, y: number): number {
    return x * y;
}
demoFunction2(12,1)



