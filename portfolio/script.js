document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("section");
    const githubLink = document.getElementById("github-link");
    const linkedinLink = document.getElementById("linkedin-link");

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                event.preventDefault(); // Prevent default anchor behavior
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Remove 'active' class from all links and add to the clicked one
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    // Ensure GitHub and LinkedIn links open in a new tab
    if (githubLink) {
        githubLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("https://github.com/IndhuGajvalli13", "_blank");
        });
    }

    if (linkedinLink) {
        linkedinLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("https://www.linkedin.com/in/indhu-gajvalli-5b2288331", "_blank");
        });
    }
});

