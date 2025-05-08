
// Form Validation and Booking Alert
document.addEventListener("DOMContentLoaded", function () {
    const bookBtn = document.querySelector(".book");
    const destinationInput = document.querySelector("input[list='mylist']");
    const dateInput = document.querySelector(".date");

    bookBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const destination = destinationInput.value.trim();
        const date = dateInput.value;

        if (!destination || !date) {
            alert("Please fill in both the destination and date.");
            return;
        }

        alert(`Tour to ${destination} on ${date} is being booked!`);
    });

    // Toggle Menu (mobile-friendly example - needs button in HTML)
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // Smooth scroll to sections if using anchor IDs in future
    const navLinks = document.querySelectorAll(".menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
