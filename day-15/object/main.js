let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email: "abc@gmail.com",
    address: {
        city: "Hà Nội",
        district: "Thanh Xuân",
    },
    position: ["Nhân viên", "Trường phòng", "Giám đốc"],
    sayHello() {
        console.log("Xin chào");
    },
    eat(food) {
        console.log("Hôm nay ăn " + food);
    }
}
console.log(user);
console.log(user.name);
console.log(user.address.district);
console.log(user.position[2]);
user.sayHello(); // function và method
user.eat("PHỞ");

user.age = 30;
console.log(user);

delete user.email;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty("abc"));
console.log(user.hasOwnProperty("name"));

for (const key in user) {
    console.log(user[key]);
}

let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
const showInfo = arr => {
    arr.forEach(p => {
        console.log(`${p.name} - ${p.price} - ${p.brand} - ${p.count}`);
    })
}
showInfo(products);

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findByBrand = (arr, brand) => {
    return arr.filter(p => p.brand === brand);
}
console.log(findByBrand(products, "Apple"));
console.log(findByBrand(products, "Samsung"));


// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findByName = (arr, keyword) => {
    return arr.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
}
console.log(findByName(products, "pRo"));

const sortByPrice = (arr) => {
    return arr.sort((p1, p2) => p1.price - p2.price)
}
console.log(sortByPrice(products))
