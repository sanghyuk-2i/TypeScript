// Type alias   VS   Interface

type PositionType = {
    x: number;
    y: number;
};
interface PositionInterface {
    x: number;
    y: number;
}

const obj1: PositionType = {
    x: 1, 
    y: 1,
};
const obj2: PositionInterface = {
    x: 1, 
    y: 1,
    z: 1,
};

class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

interface ZPositionInterface extends PositionInterface {
    z: number;
}
type ZPositionType = PositionType & { z: number };

// only interface can be merged!
interface PositionInterface {
    z: number;
}

// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}
type Name = Person['name'];

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// Utility Types

// Index

const check = {
    name: 'eddy',
}
check.name;
check['name'];

type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
}

type AnimalName = Animal['name']; // string
const text: AnimalName = 'hello';

type Gender = Animal['gender']; // male or female

// Check this out!!!!!!!!
type Keys = keyof Animal; // name | age | gender

// Mapped

type Video = {
    title: string;
    author: string;
    describtion: string;
};

// Check this out!!!!!!!!
type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
};
type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
    title: 'hello!'
};
// type VideoOptional = {
//     title?: string;
//     author?: string;
//     describtion?: string;
// }
// type VideoReadOnly = {
//     readonly title: string;
//     readonly author: string;
// }

// Conditional 

type Check<T> = T extends string? boolean : number;
type Type = Check<string>; // boolean

// Readonly

type ToDo = {
    title: string;
    description: string;
};

function display(todo: Readonly<ToDo>) {} // Check the utility guideline with using command button(mac).

// Partial

type ToDo2 = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
};

function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {...todo, ...fieldsToUpdate};
}

// Pick

type Video2 = {
    id: string;
    title: string;
    url: string;
    data: string;
}

function getVideo(id: string): Video2 {
    return {
        id, 
        title: 'video',
        url: 'https://...',
        data: 'byte-data..'
    };
}

function getVideoMetadata(id: string): Pick<Video2, 'id' | 'title'> {
    return {
        id: id,
        title: 'title',
    };
}

// Omit

type Video3 = {
    id: string;
    title: string;
    url: string;
    data: string;
}

function getVideo2(id: string): Video3 {
    return {
        id, 
        title: 'video',
        url: 'https://...',
        data: 'byte-data..'
    };
}

function getVideoMetadata2(id: string): Omit<Video3, 'url' | 'data' | 'h'> {
    return {
        id: id,
        title: 'title',
    };
}

// Record

type PageInfo = {
    title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
    home: {title: 'Home'},
    about: {title: 'About'},
    contact: {title: 'Contact'}
};

// Else

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>;