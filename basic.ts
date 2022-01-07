
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

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Array
const names: string[] = ['apple', 'banana'];
const sccor: Array<number> = [1, 2, 4];
// readonly -> 수정할 수 없음, Array<string>는 안됨
function printArray(fruits: readonly string[]) {}

// Tuple
let student: [string, number];
student = ['name', 123];
console.log(student[0]);
console.log(student[1]);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// type alias

type Texts = string;
const nammmme: Texts = 'Eddy';
type Car = {
    name : string;
    sn: number;
};
const new_car: Car = {
    name: 'benz',
    sn: 12345,
};

// String Literal Types -> 선언된 값만 할당할 수 있다.
type JON = 'json';
const json: JON = 'json';

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Union Types: OR

type Direction = 'left' | 'right' | 'up' | 'down';
function move(direction: Direction) {
    console.log(direction);
}
move('down');

type SuccessState = {
    response: {
        body: string;
    };
};
type FailState = {
    reason: string;
};

type LoginState = SuccessState | FailState;

function login(): LoginState {
    return {
        response: {
            body: "logged in!",
        }
    };
}

function printLoginState(state: LoginState) {
    if('response' in state){
        console.log(`goood!`);
    }else {
        console.log(`oh no!`);
    }
}

// Discriminated Union

type TrainState = {
    result: 'success';
};

type TestState = {
    result: 'fail';
};

function printCheckingState(state: TrainState | TestState) {
    if(state.result){
        console.log(`goood!`);
    }else {
        console.log(`oh no!`);
    }
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Intersection Types: AND

type Person = {
    name: string;
    id: number;
};

type Animal = {
    feedNumber: number;
    sound: () => void;
};

function giveFood(person: Person & Animal) {
    console.log(person.name, person.feedNumber, person.sound());
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Enum (비추천)
// Problem -> 할당 할때, Days 타입 뿐만 아니라 숫자도 넣을 수 있음

enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
}
console.log(Days.Satarday);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Type Inference(타입 추론) 
// 원시 타입은 사실 타입 추론을 활용해도 되지만, 프로젝트 진행하는 것에 대해서는 타입을 반드시 선언하는 것을 추천

let text = 'hello';
text = 'hi';

function printLetter(message = 'hello') {
    console.log(message);
}

function calAdd(x: number, y: number) {
    return x + y;
}
const check_result = add(1, 2);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Type Assertion (비추천)

function jsStrFunc(): any {
    return 'hello';
}
const nedCheck = jsStrFunc();
console.log((nedCheck as string).length);
console.log((<string>nedCheck).length);

const wrong: any = 5;
console.log((wrong as Array<number>).push(1)) // 😱

function findNumbers(): number[] | undefined {
    return undefined;
}
const numb = findNumbers();
numb!.push(2); // 😱