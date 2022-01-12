// {
//     type CoffeeCup = {
//         shots: number,
//         hasMilk: boolean
//     };

//     class CoffeeMaker {
//         static BEANS_GRAMM_PER_SHOT: number = 7;
//         coffeeBeans: number = 0;

//         constructor(coffeeBeans: number) {
//             this.coffeeBeans = coffeeBeans;
//         }

//         static makeMachine(coffeeBeans: number): CoffeeMaker {
//             return new CoffeeMaker(coffeeBeans)
//         }

//         makeCoffee(shots: number): CoffeeCup {
//             if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
//                 throw new Error('Not enough coffee beans!');
//             }
//             this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
//             return {
//                 shots,
//                 hasMilk: false,
//             };
//         }
//     }

//     const maker = new CoffeeMaker(32);
//     console.log(maker);

//     const maker2 = CoffeeMaker.makeMachine(3);
//     console.log(maker2);
// }

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// public, private, protected

// {
//     type CoffeeCup = {
//         shots: number,
//         hasMilk: boolean
//     };

//     class CoffeeMaker {
//         private static BEANS_GRAMM_PER_SHOT: number = 7;
//         private coffeeBeans: number = 0;

//         constructor(coffeeBeans: number) {
//             this.coffeeBeans = coffeeBeans;
//         }

//         static makeMachine(coffeeBeans: number): CoffeeMaker {
//             return new CoffeeMaker(coffeeBeans)
//         }

//         fillCoffeeBeans(beans: number) {
//             if(beans < 0) {
//                 throw new Error('value for beans should be greater than 0');
//             }
//             this.coffeeBeans += beans;
//         }

//         makeCoffee(shots: number): CoffeeCup {
//             if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
//                 throw new Error('Not enough coffee beans!');
//             }
//             this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
//             return {
//                 shots,
//                 hasMilk: false,
//             };
//         }
//     }

//     const maker = new CoffeeMaker(32);
//     maker.fillCoffeeBeans(8);

//     class User {
//         get fullName(): string {
//             return `${this.firstName} ${this.lastName}`;
//         }
//         private internalAge = 4;
//         get age(): number {
//             return this.internalAge;
//         }
//         set age(num: number) {
//             this.internalAge = num;
//         }
//         constructor(private firstName: string, public lastName: string) {}
//     }

//     const user = new User('Steve', 'Jobs');
//     user.age = 6;
//     console.log(user.fullName);
// }

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// {
//     type CoffeeCup = {
//         shots: number,
//         hasMilk: boolean
//     };

//     interface CoffeeMaker {
//         makeCoffee(shots: number): CoffeeCup;
//     }

//     interface CommercialCoffeeMaker {
//         makeCoffee(shots: number): CoffeeCup;
//         fillCoffeeBeans(beans: number): void;
//         clean(): void;
//     }

//     class CoffeeMachine implements CoffeeMaker {
//         static BEANS_GRAMM_PER_SHOT: number = 7;
//         coffeeBeans: number = 0;

//         constructor(coffeeBeans: number) {
//             this.coffeeBeans = coffeeBeans;
//         }

//         static makeMachine(coffeeBeans: number): CoffeeMachine {
//             return new CoffeeMachine(coffeeBeans)
//         }

//         clean() {
//             console.log(`Cleaning the machine... `);
//         }

//         fillCoffeeBeans(beans: number) {
//             if(beans < 0) {
//                 throw new Error('value for beans should be greater than 0');
//             }
//             this.coffeeBeans += beans;
//         }

//         private grindBeans(shots: number) {
//             console.log(`grinding beans for ${shots}`);
//             if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
//                 throw new Error(`Not enough coffee beans!`);
//             }
//             this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
//         }

//         private preheat(): void {
//             console.log(`heating up... 🔥`);
//         }

//         private extract(shots: number): CoffeeCup {
//             console.log(`Pulling ${shots} shots...`);
//             return {
//                 shots,
//                 hasMilk: false,
//             };
//         }

//         makeCoffee(shots: number): CoffeeCup {
//             this.grindBeans(shots);
//             this.preheat();
//             return this.extract(shots);
//         }
//     }

//     class CaffeLatteMachine extends CoffeeMachine {
//         private steamMilk(): void {
//             console.log(`Steaming some milk... `);
//         }

//         makeCoffee(shots: number): CoffeeCup {
//             const coffee = super.makeCoffee(shots);
//             this.steamMilk();
//             return {
//                 ...coffee,
//                 hasMilk: true,
//             };
//         }
//     }

//     // const maker: CoffeeMachine = CoffeeMachine.makeMachine(3);
//     // console.log(maker);

//     // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(3);
//     // maker2.fillCoffeeBeans(32);
//     // maker2.makeCoffee(2);
//     // maker2.clean();
//     // console.log(maker2);

//     const machine = new CoffeeMachine(32);
//     const latteMachine = new CaffeLatteMachine(23);
//     const coffee = latteMachine.makeCoffee(1);
//     console.log(coffee);
// }


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

{
    type CoffeeCup = {
        shots: number,
        hasMilk?: boolean,
        hasSugar?: boolean,
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7;
        coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        clean() {
            console.log(`Cleaning the machine... `);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error(`Not enough coffee beans!`);
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log(`heating up... 🔥`);
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string, private milkFpther: CheapMilkSteamer) {
            super(beans);
        }
        private steamMilk(): void {
            console.log(`Steaming some milk... `);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFpther.makeMilk(coffee);
        }
    }

    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log(`Steaming some milk... `);
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }

    class AutomaticSugarMixer {
        private getSugar() {
            console.log(`Getting some sugar from candy `);
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class SweetCoffeMaker extends CoffeeMachine {
        constructor(private beans: number, private sugar: AutomaticSugarMixer) {
            super(beans);
        };
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    // const maker: CoffeeMachine = CoffeeMachine.makeMachine(3);
    // console.log(maker);

    // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(3);
    // maker2.fillCoffeeBeans(32);
    // maker2.makeCoffee(2);
    // maker2.clean();
    // console.log(maker2);


}