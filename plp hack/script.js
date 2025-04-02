document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent default anchor behavior

        let section = this.getAttribute("data-section");
        let targetSection = document.getElementById(section);

        if (targetSection) {
            let targetSectionPosition = targetSection.offsetTop;
            window.scrollTo({ top: targetSectionPosition, behavior: 'smooth' });

            let message = section === "home" ? "Welcome to my Portfolio!" : "Welcome to my Contact Page!";
            let welcomeDiv = document.getElementById("welcome-message");

            welcomeDiv.textContent = message;
            welcomeDiv.style.opacity = "1";

            gsap.fromTo(welcomeDiv, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
        }
    });
});