// Number
var a = 10;
var a1 = 100.05;
console.log("a =", a);
console.log("typeof a:", typeof a);
console.log("a =", a1);
console.log("typeof a:", typeof a1);
// String
var s = "xin chào";
console.log(s);
// Boolean 
var b = false;
console.log(b);
// object
var obj = {
    fullName: "Ke Lu Hanh",
    email: "keluhanh@gmail.com",
    tel: "123"
};
console.log(obj);
;
var user1 = {
    fullName: "Ke lu hanh 1",
    email: "keluhanh@gmail.com",
    tel: "khong co",
    age: 15
};
console.log(user1);
var userRole = {
    id: "123",
    name: "Nhan",
    role_id: "1",
    permission: "khong"
};
// Array
var arr = [];
arr.push(1);
arr.push(1);
arr.push(1);
console.log(arr);
var arrStr = [];
arrStr.push("123");
console.log(arrStr);
// tuple
var infoUse;
infoUse = ["Le Van A", 10, true,];
console.log(infoUse);
;
var userX = {
    fullName: "Dung Tan",
    tel: "1"
};
userX.fullName = "Nguyen Dung";
// userX.tel = "100"; // thông báo lỗi
console.log(userX);
// declaration function
function sum1(a, b) {
    return a + b;
}
console.log(sum1(1, 3));
// expression function 
var sum2 = function (a, b) {
    return a + b;
};
console.log(sum2(5, 6));
// arrow function
var sum3 = function (a, b) {
    return a + b;
};
console.log(sum3(5, 6));
// enum
var statusConfig;
(function (statusConfig) {
    statusConfig[statusConfig["INITIAL"] = 0] = "INITIAL";
    statusConfig[statusConfig["ACTIVE"] = 1] = "ACTIVE";
    statusConfig[statusConfig["INACTIVE"] = 2] = "INACTIVE";
})(statusConfig || (statusConfig = {}));
;
console.log(statusConfig.INITIAL);
console.log(statusConfig.ACTIVE);
console.log(statusConfig.INACTIVE);
var statusStr;
(function (statusStr) {
    statusStr["INITIAL"] = "initial";
    statusStr["ACTIVE"] = "active";
    statusStr["INACTIVE"] = "inactive";
})(statusStr || (statusStr = {}));
;
console.log(statusStr.INITIAL);
console.log(statusStr.ACTIVE);
console.log(statusStr.INACTIVE);
// Any
var varia = 20;
console.log(varia);
varia = " heloo";
console.log(varia);
// Unknown
var kno = 50;
console.log(kno);
// Vì sao unknown an toàn hơn any
var getLengthAny = function (variable) {
    return variable.length;
};
var getLengthUnknow = function (variable) {
    if (typeof variable == "string") {
        return variable.length;
    }
};
var temp1 = "hello world";
var temp2 = 123;
console.log(getLengthAny(temp1));
console.log(getLengthAny(temp2));
console.log(getLengthUnknow(temp1));
console.log(getLengthUnknow(temp2));
// default parameter
var sumDefault = function (a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log(sumDefault());
// rest parameters
var sumRest = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var value = numbers_1[_a];
        sum += value;
    }
    return sum;
};
console.log(sumRest(1, 2, 3, 4, 5));
// Không sử dụng generic
var reverseINT = function (arr) {
    var arrReverse = arr.reverse();
    return arrReverse;
};
var reverseSTR = function (arr) {
    var arrReverse = arr.reverse();
    return arrReverse;
};
console.log(reverseINT([1, 2, 3]));
console.log(reverseSTR(["1", "2", "3"]));
// sử dụng generic
var reverseGeneric = function (arr) {
    var reverseArray = arr.reverse();
    return reverseArray;
};
console.log(reverseGeneric([5, 6, 7]));
console.log(reverseGeneric(["5", "6", "7"]));
;
var task1 = {
    id: "123",
    title: "Công việc 1",
    content: "Xong prj api",
    status: "doing"
};
console.log(task1);
var tasktask1 = {
    id: "123",
    title: "Công việc 2",
    status: "active",
};
var usersocial1 = {
    id: "123",
    fullName: "Truong",
    facebook: "http"
};
;
var samename = {
    fullName: "ABC",
    age: 12,
    email: "str@gmail",
    address: "109"
};
