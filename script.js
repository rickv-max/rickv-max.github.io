document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("h1");
    const images = document.querySelectorAll(".gallery-image");

    // Fungsi untuk menambah kelas saat scroll
    function checkScroll() {
        // Periksa judul
        const h1Rect = h1.getBoundingClientRect();
        if (h1Rect.top < window.innerHeight && h1Rect.bottom > 0) {
            h1.classList.add("visible");
        }

        // Periksa gambar
        images.forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                image.classList.add("visible");
            }
        });
    }

    // Event listener untuk scroll
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Panggil fungsi saat pertama kali memuat
});
