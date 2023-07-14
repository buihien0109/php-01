// Lắng nghe sự kiện keydown
// document.addEventListener("keydown", function (e) {
//     console.log(e);
// });

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });

// document.addEventListener("keydown", function (event) {
//     if (event.keyCode == 13) {
//         console.log("Bạn thật đẹp trai!");
//     } else {
//         console.log("Bấm phím Enter đi, có điều bất ngờ đó!")
//     }
// });

// Ẩn/Hiện nút "Back to Top"
const btnTop = document.querySelector(".btn-top")
window.addEventListener("scroll", function () {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 250) {
        btnTop.style.display = "inline-block"
    } else {
        btnTop.style.display = "none"
    }
});

// Quay trở về đầu trang
btnTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})