// JavaScript : Error

// const array = new Array(1000000000000000000000); // Invalid array length!

// type Control = 'up' | 'down' | 'left' | 'right' | 'he';
// const position = { x: 0, y: 0 }
// function move(command: Control) {
//     switch(command){
//         case 'up':
//             position.y++;
//             break;
//         case 'down':
//             position.y--;
//             break;
//         case 'left':
//             position.x--;
//             break;
//         case 'right':
//             position.x++;
//             break;
//         default:
//             const invalid: never = command; // Check the red line that the variable cannot compile this code.
//             throw new Error(`unknown direction: ${invalid}`)
//     }
// }

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Error Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if(fileName === 'not exist!') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents!';
}

function closeFile(fileName: string) {
    // 
}

const fileName = `not exist!`;

try {
    console.log(readFile(fileName));
} catch(error) {
    console.log(`catched!!`);
} finally {
    closeFile(fileName);
    console.log(`finally!!`);
}

console.log(`!!!`);
closeFile(fileName);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

class TimeoutError extends Error {}
class OfflineError extends Error {}
type NetworkErrorState = {
    result: 'fail',
    reason: 'offline' | 'down' | 'timeout';
};

type SuccessState = {
    result: 'success'
};

type ResultState = SuccessState | NetworkErrorState;

class NetworkClient {
    tryConnect(): ResultState {
        throw new Error('no network!');
    }
}

class UserService {
    constructor(private client: NetworkClient) {}
    login() {
        this.client.tryConnect();
        // login.....
    }
}

class App {
    constructor(private userService: UserService) {}
    run() {
        try {
            this.userService.login();
        } catch(error) {
            // show dialog to user!
            if(error instanceof OfflineError) {

            }
        }
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();