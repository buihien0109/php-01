// Viết hàm cho phép truyền vào 1 mảng các số
// kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Vd : modulo2([4,2,5,6,2,7]) => [0,0,1,0,0,1]

const modulo2 = arr => {
    let rs = [];
    for (let i = 0; i < arr.length; i++) {
        rs.push(arr[i] % 2);
    }
    return rs;
}
console.log(modulo2([4,2,5,6,2,7]));

const modulo2_1 = arr => {
    return arr.map(e => e % 2);
}
console.log(modulo2_1([4,2,5,6,2,7]));

const ex1 = arr => {
    return arr.map((e, i) => {
        if(i % 2 == 0) {
            return e.toLowerCase()
        }
        return e.toUpperCase()
    })
}

const ex1_1 = arr => {
    return arr.map((e, i) => i % 2 == 0 ? e.toLowerCase() : e.toUpperCase())
}
console.log(ex1(['apple', 'banana', 'orange', 'aghdjd', 'jaja', 'kakai']));
console.log(ex1_1(['apple', 'banana', 'orange', 'aghdjd', 'jaja', 'kakai']));