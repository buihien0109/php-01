// TH1 : Mỗi lần click sẽ xuất hiện 1 hình tròn mới hoàn toàn
// Th2 : Tạo mới lần đầu -> Những lần click tiếp theo thay đổi vị trí của hình tròn đến vị trí vừa click

// document.addEventListener('click', function (event) {
//     // Xóa hình tròn trước đó đi (nếu có)
//     const preCicrle = document.querySelector(".circle");
//     if(preCicrle) {
//         preCicrle.parentElement.removeChild(preCicrle)
//     }

//     // Tạo hình tròn
//     const circle = document.createElement("div");
//     circle.classList.add("circle");

//     // Gán vị trí
//     circle.style.top = `${event.offsetY - 50}px`;
//     circle.style.left = `${event.offsetX - 50}px`;

//     // Gắn vào DOM
//     document.body.appendChild(circle);
// })

document.addEventListener('click', function (event) {
    // Xóa hình tròn trước đó đi (nếu có)
    const preCicrle = document.querySelector(".circle");
    if (preCicrle) {
        // Gán vị trí
        preCicrle.style.top = `${event.offsetY - 50}px`;
        preCicrle.style.left = `${event.offsetX - 50}px`;
    } else {
        // Tạo hình tròn
        const circle = document.createElement("div");
        circle.classList.add("circle");

        // Gán vị trí
        circle.style.top = `${event.offsetY - 50}px`;
        circle.style.left = `${event.offsetX - 50}px`;

        // Gắn vào DOM
        document.body.appendChild(circle);
    }
})

// document.addEventListener('mousedown', function () {
//     console.log('mousedown');
// })

// document.addEventListener('mousemove', function () {
//     console.log('mousemove');
// })

// document.addEventListener('mouseup', function () {
//     console.log('mouseup');
// })