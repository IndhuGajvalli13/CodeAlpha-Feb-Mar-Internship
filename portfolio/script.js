document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            
            // Add active class to the clicked link
            this.classList.add("active");
            
            // Get the target section based on href attribute
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
