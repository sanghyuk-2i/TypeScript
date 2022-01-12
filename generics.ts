{
    // Only Number만 가능
    function checkNotNullBad(arg: number | null): number {
        if(arg == null){
            throw new Error('not valid number!')
        }
        return arg;
    }

    // 타입 보장 X
    function checkNotNullAnyBad(arg: any | null): any {
        if(arg == null){
            throw new Error('not valid number!')
        }
        return arg;
    }

    // 이럴 때, 제네릭을 사용하면 유용!
    function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
        if(arg == null){
            throw new Error('not valid number!')
        }
        return arg;
    }

    // const result = checkNotNullBad(1234);
    // console.log(result);
    // checkNotNull(null);

    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

interface Either<L, R> {
    left: () => L;
    right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
        return this.leftValue;
    }
    right(): R {
        return this.rightValue;
    }
}

const either: Either<number, number>= new SimpleEither(4, 5);
either.left();
either.right();

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!`);
    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time!!`);
    }
    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 별로...
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
    name: 'ellie',
    age: 20,
};

const obj2 = {
    animal: '🦮' ,
};

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}