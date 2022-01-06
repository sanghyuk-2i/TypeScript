
// primitive check
const num:number = 1;
const str:string = 'hello world!';
const bol:boolean = true;

// object check
function goCheck(): string | undefined {
    return 'hello';
}

// undefined & null
let named: undefined; // 이렇게 쓰지는 않음
let namedd: null; // 이렇게 쓰지는 않음

let age: number | undefined; // 의미상 이게 적절한 방법
let agee: number | null;

// unknown(비추천)
let isSure: unknown = 0;
isSure = 'hello';
isSure = true;

// any(비추천)
let anything: any = 0;
anything = 'hello';

// void -> 사실 생략해서 가능
function checkPrint(): void {
    console.log('hello');
    return;
}

// never
function throwError(msg: string): never {
    throw new Error(msg);
}

// object
let obj: object;
function checkObject(obj: object) {}
checkObject({ what: 'object'});
checkObject({ which: 'typescript'});


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


// About Function

// JavaScript Version
function jsAdd(num1, num2) {
    return num1 + num2;
}

function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
        resolve(100);
    });
}

// TypeScript Version
function add(num1: number, num2: number): number {
    return num1 + num2;
}

function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
        resolve(100);
    });
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Optional parameter -> ?
// "last?"을 확인 
function printName(first: string, last?: string) {
    console.log(first);
    console.log(last);
}

printName("Eddy", "Lee");
printName("Eddy");


// Default parameter
function printMessage(message: string = "default message") {
    console.log(message);
}
printMessage();

// Rest parameter
function addNumbers(...numbers: number[]): number{
    return numbers.reduce((a,v) => a + v);
}
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3));
console.log(addNumbers(1, 2, 3, 4, 5));




