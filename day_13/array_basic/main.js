// Khai báo array rỗng
let arr = [];
console.log(arr);

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Bùi Hiên";
number[2] = true;
number[3] = [10, 20, 30]
console.log(number);
console.log(number[3][1]);

// Khai báo và khởi tạo giá trị cho array
const myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];
console.log(myArr);

myArr[0] = 10;
myArr[1] = 20;
console.log(myArr);

// Lấy độ dài
console.log(myArr.length); // 7
console.log(myArr[myArr.length - 1]);

// Cắt chuỗi : slice(begin, end), subString(begin, end), subStr(begin, length)
// indexOf, lastIndexOf, includes, slice(begin, end)

// includes
console.log(myArr.includes(10));
console.log(myArr.includes(30));

let data = myArr.push("abc");
console.log(myArr);
console.log(data);

let data1 = myArr.pop();
console.log(data1);

let subArr = myArr.slice()
let subArr1 = myArr.slice(1)
let subArr2 = myArr.slice(1, 4)

console.log(subArr); // clone
console.log(subArr1);
console.log(subArr2);

// Đảo ngược mảng
console.log(subArr.reverse());

// splice
myArr.splice(1, 0, 200, 300);
console.log((myArr));

myArr.splice(5, 2);
console.log((myArr));

myArr.splice(1, 1, 2000, 3000);
console.log((myArr));

// Sắp xếp
let numbers = [4, 1, 5, 7, 2, 11, 23];
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
console.log(numbers.sort((a, b) => a - b).reverse());

// Duyệt mảng
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Tính tổng phần tử trong mảng
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    // sum += numbers[i];
    if(numbers[i] % 2 == 1) {
        sum += numbers[i];
    }
}
console.log(sum);

// Tính tổng phần tử lẻ trong mảng

// ForEach
numbers.forEach((e) => { // e = numbers[i]
    console.log(e);
})

let sum1 = 0;
numbers.forEach((e) => { // e = numbers[i]
    sum1 += e;
})
console.log(sum1);

// Lấy ra 1 mảng bao gồm toàn bộ số lẻ trong mảng
let newArr = [];
numbers.forEach((e) => { // e = numbers[i]
    if(e % 2 == 1) {
        newArr.push(e)
    }
})
console.log(newArr);

// filter : for + if
let newArr1 = numbers.filter(e => e % 2 == 1);
console.log(newArr1);