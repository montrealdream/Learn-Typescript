// Number
const a:number = 10;
const  a1: number = 100.05;

console.log("a =", a);
console.log("typeof a:", typeof a);

console.log("a =", a1);
console.log("typeof a:", typeof a1);

// String
const s:string = "xin chào";
console.log(s);

// Boolean 
const b:boolean = false;
console.log(b);

// object
const obj : {
    // define type variable
    fullName: string,
    email: string,
    tel: string
} = {
    fullName: "Ke Lu Hanh",
    email: "keluhanh@gmail.com",
    tel: "123"
};

console.log(obj);

// interface
interface User {
    fullName: string,
    email: string,
    age: number,
    tel: string
};

const user1 : User = {
    fullName: "Ke lu hanh 1",
    email : "keluhanh@gmail.com",
    tel: "khong co",
    age: 15
};

console.log(user1);

//Extend interface (kế thừa interface)
interface ITF1 {
    id: string,
    name: string,
} 

interface ROLE1 extends ITF1 {
    role_id: string,
    permission: string,
}

const userRole : ROLE1 = {
    id: "123",
    name: "Nhan",
    role_id: "1",
    permission: "khong"
}

// Array
const arr: number[] = [];
arr.push(1);
arr.push(1);
arr.push(1);
console.log(arr);

const arrStr: string[] = [];
arrStr.push("123");
console.log(arrStr);

// tuple
let infoUse : [string, number, boolean];
infoUse = ["Le Van A", 10, true,];
console.log(infoUse);

// readonly
interface UserX {
    fullName: string,
    age?: number,
    readonly tel: string
};

const userX : UserX = {
    fullName: "Dung Tan",
    tel: "1"
};

userX.fullName = "Nguyen Dung";
// userX.tel = "100"; // thông báo lỗi
console.log(userX);

// declaration function
function sum1 (a: number, b: number): number {
    return a + b;
}

console.log(sum1(1, 3));

// expression function 
const sum2 = function(a: number, b:number): number {
    return a + b;
}

console.log(sum2(5, 6));

// arrow function
const sum3 = (a: number, b: number): number => {
    return a + b;
}

console.log(sum3(5, 6));

// enum
enum statusConfig {
    INITIAL,
    ACTIVE,
    INACTIVE
};

console.log (statusConfig.INITIAL);
console.log (statusConfig.ACTIVE);
console.log (statusConfig.INACTIVE);

enum statusStr {
    INITIAL = "initial",
    ACTIVE = "active",
    INACTIVE =  "inactive"
};

console.log(statusStr.INITIAL);
console.log(statusStr.ACTIVE);
console.log(statusStr.INACTIVE);

// Any
let varia:any = 20;
console.log(varia);
varia = " heloo";
console.log(varia);

// Unknown
let kno:unknown = 50;
console.log(kno);

// Vì sao unknown an toàn hơn any
const getLengthAny = (variable:any): number => {
    return variable.length;
}

const getLengthUnknow = (variable:unknown): number => {
    if(typeof variable == "string") {
        return variable.length;
    }
}

const temp1:string = "hello world";
const temp2:number = 123;

console.log(getLengthAny(temp1));
console.log(getLengthAny(temp2));

console.log(getLengthUnknow(temp1));
console.log(getLengthUnknow(temp2));

// default parameter
const sumDefault = (a:number = 0, b:number = 10):number => {
    return a + b;
}

console.log(sumDefault());

// rest parameters
const sumRest = (...numbers:number[]): number => {
    let sum:number = 0;
    for(let value of numbers){
        sum += value;
    }
    return sum;
}

console.log(sumRest(1, 2, 3, 4, 5));

// Không sử dụng generic
const reverseINT = (arr: number[]): number[] => {
    const arrReverse = arr.reverse();
    return arrReverse;
} 

const reverseSTR = (arr: string[]): string[] => {
    const arrReverse = arr.reverse();
    return arrReverse;
}


console.log(reverseINT([1, 2, 3]));
console.log(reverseSTR(["1", "2", "3"]));

// sử dụng generic
const reverseGeneric = <T>(arr: T[]): T[] => {
    const reverseArray = arr.reverse();
    return reverseArray;
}

console.log(reverseGeneric([5, 6, 7]));
console.log(reverseGeneric(["5", "6", "7"]));

// union type
interface Task {
    id: string,
    title: string,
    content: string,
    status: "initial" | "doing" | "finish" | "pending" | "notFinish"
    // tạo ra 1 kiểu dữ liệu mới chỉ chứa các trường này (status), nếu dùng khác sẽ bị lỗi
};

const task1 : Task = {
    id: "123",
    title: "Công việc 1",
    content: "Xong prj api",
    status: "doing" 
}

console.log(task1);


// Type alias, giống như union type nhưng sẽ đóng gói lại
// Lưu ý dùng dấu ||
type statusTask = "active" | "inactive";

interface TaskTask {
    id: string,
    title: string,
    content?: string,
    status: statusTask
}

const tasktask1 : TaskTask = {
    id: "123",
    title: "Công việc 2",
    status: "active",
}


// Intersection type (hợp nhiều interface làm 1), dùng dấu &
interface Usser {
    readonly id: string,
    fullName: string,
    age?:number
}

interface Social {
    facebook: string,
    instagram?: string,
    zalo?: string,
}

interface Contact {
    email: string,
    address: string
}

type UsserSocial = Usser & Social;
type UserContact = User & Contact;

const usersocial1 : UsserSocial = {
    id: "123",
    fullName: "Truong",
    facebook: "http"
}

// Declaration merging (hợp 2 interface trùng tên thành 1)
interface SameName {
    fullName: string,
    age?: number
};

interface SameName {
    email: string,
    address: string
}


const samename : SameName = {
    fullName: "ABC",
    age: 12,
    email: "str@gmail",
    address: "109"
}

