const heading = document.getElementById("heading");
console.log(heading);

const heading1 = document.querySelector("#heading");
console.log(heading1);

// ? p1, p2, p3, ul1, ul2, li3
const p1 = document.querySelector("p");

const p2 = document.querySelector(".para");

const p3 = document.querySelector(".para + .para");

const ul1 = document.querySelector(".box ul");

const ul2 = document.querySelector(".box + ul");

const li3 = document.querySelector(".box + ul li:nth-child(3)");

const li3_1 = ul2.querySelector("li:nth-child(3)");

console.log(li3);
console.log(li3_1);
console.log(p1.nextElementSibling); // p2
console.log(ul2.children);
console.log(ul2.children[2]);
console.log(ul1.parentElement);

// Duyệt danh sách
const paraList = document.querySelectorAll("p");
console.log(paraList);

for (let i = 0; i < paraList.length; i++) {
    paraList[i].style.color = 'red';
}

Array.from(paraList).map(e => {
    e.style.backgroundColor = 'black';
})

paraList.forEach(e => {
    e.style.padding = '10px';
})

// Lấy ra nd của phần tử
console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

heading.innerHTML = "Hello";
heading.innerHTML = "<span>Hello World</span>";
p1.innerText = "<span>Hello World</span>";
p2.textContent = "<span>Hello World</span>";

// Thực hành
const socialMediaList = [
    {
        label: "Google",
        link: "https://google.com"
    },
    {
        label: "Facebook",
        link: "https://facebook.com"
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com"
    },
]

// Yêu cầu : Từ Object trên, tạo ra danh sách các thẻ a với href - link, nội dung - label và gắn vào trong class="social-media"
// Gợi ý : Sử dụng vòng lặp, mỗi vòng lặp cộng chuỗi -> Kết thúc vòng lặp set lại nd cho thẻ

/*
`<a href="https://google.com">Google</a>
<a href="https://facebook.com">Facebook</a>
<a href="https://www.instagram.com">Instagram</a>`
*/
const socialMediaEl = document.querySelector(".social-media");

let html = "";
socialMediaList.forEach(e => {
    html += `<a href="${e.link}">${e.label}</a>`
})
socialMediaEl.innerHTML = html;

// Insert
const newPara = document.createElement('p');
newPara.innerText = "New para";
document.body.appendChild(newPara);

// Copy
const newParaCopy = newPara.cloneNode(true);
document.body.prepend(newParaCopy);

const newParaCopy1 = newPara.cloneNode(true);
document.body.insertBefore(newParaCopy1, p3);

// Insert 2
// const btn = document.createElement("button");
// btn.innerText = "Click me";
// ul1.insertAdjacentElement("beforebegin", btn);

ul1.insertAdjacentHTML("beforebegin", "<button>Click me</button>")

// Xóa
document.body.removeChild(p1);
p2.parentElement.removeChild(p2);

// Thay thế
const h2 = document.createElement("h2");
h2.innerText = "Đây là thẻ h2";

// document.body.replaceChild(h2, heading);
heading.parentElement.replaceChild(h2, heading);

console.log(ul2.childNodes);