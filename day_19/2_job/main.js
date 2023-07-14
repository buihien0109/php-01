const btnShowAll = document.getElementById("show-all");
const searchEl = document.getElementById("search");
const jobCountEl = document.querySelector("#jobs-listed span");
const jobCardEl = document.querySelector(".job-card");

// 1. Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
const jobCardEl1 = jobCardEl.cloneNode(true)
const jobCardEl2 = jobCardEl.cloneNode(true)
const jobCardEl3 = jobCardEl.cloneNode(true)
jobCardEl.insertAdjacentElement("afterend", jobCardEl1)
jobCardEl.insertAdjacentElement("afterend", jobCardEl2)
jobCardEl.insertAdjacentElement("afterend", jobCardEl3)

// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
jobCardEl1.querySelector("h3").innerText = "Java Developer"
jobCardEl2.querySelector("h3").innerText = "Javascript Developer"
jobCardEl3.querySelector("h3").innerText = "Python Developer"

// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const jobs = document.querySelectorAll(".job-card");
console.log(jobs);
jobCountEl.innerText = jobs.length;

// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
searchEl.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        // Lấy ra value trong ô input
        let searchValue = e.target.value

        // Kiểm tra value có hợp lệ hay không
        if (searchValue.trim() === "") {
            alert("Nội dung không được để trống")
            return;
        }
        jobs.forEach(job => {
            // Lấy ra tên job
            let jobName = job.querySelector("h3").innerText

            // Kiểm tra tên job có chứa value hay không
            if (jobName.toLowerCase().includes(searchValue.toLowerCase())) {
                job.style.display = "block"
            } else {
                job.style.display = "none"
            }
        })
        searchEl.value = "" // clear dữ liệu trong ô input
    }
})

// 5. Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc
btnShowAll.addEventListener("click", () => {
    jobs.forEach(job => job.style.display = "block")
})