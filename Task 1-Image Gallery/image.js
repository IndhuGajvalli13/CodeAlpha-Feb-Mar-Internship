document.addEventListener("DOMContentLoaded", () => {
    const fullImgBox = document.getElementById("fullImgBox");
    const fullImg = document.getElementById("fullImg");
    const images = document.querySelectorAll(".sub img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            fullImgBox.style.display = "flex";
            fullImg.src = img.src;
        });
    });

    function closeFullImg() {
        fullImgBox.style.display = "none";
    }

    document.querySelector("#fullImgBox span").addEventListener("click", closeFullImg);
});