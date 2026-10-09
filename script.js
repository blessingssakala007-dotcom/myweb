// ======================================
// 1. CONTACT FORM VALIDATION AND PREVIEW
// ======================================

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formFeedback.textContent =
                "Please fill in your name, email address, and message.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formFeedback.textContent =
                "Please enter a valid email address.";
            return;
        }

        formFeedback.textContent =
            "Your details have been checked successfully. " +
            "Name: " + name +
            " | Email: " + email +
            " | Message: " + message +
            " | Browser demonstration only — no message is sent.";
    });
}


// ======================================
// 2. THEME SWITCH
// ======================================

const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeButton.textContent = "Switch to Light Theme";
        } else {
            themeButton.textContent = "Switch to Dark Theme";
        }
    });
}


// ======================================
// 3. PROJECT SEARCH
// ======================================

// Find the search box, projects, feedback area and reset button.
const projectSearch = document.getElementById("projectSearch");
const projects = document.querySelectorAll(".project-item");
const searchFeedback = document.getElementById("searchFeedback");
const resetSearch = document.getElementById("resetSearch");

// Search the projects and show only matching results.
function filterProjects() {
    const searchTerm = projectSearch.value.trim().toLowerCase();
    let visibleProjects = 0;

    projects.forEach(function (project) {
        const projectText = project.textContent.toLowerCase();
        const matches = projectText.includes(searchTerm);

        project.style.display = matches ? "" : "none";

        if (matches) {
            visibleProjects++;
        }
    });

    if (searchFeedback) {
        if (visibleProjects === 0) {
            searchFeedback.textContent = "No matching projects found.";
        } else {
            searchFeedback.textContent =
                visibleProjects + " project(s) found.";
        }
    }
}

// Run the search whenever the visitor types.
if (projectSearch) {
    projectSearch.addEventListener("input", filterProjects);
}

// Restore all projects when the reset button is clicked.
if (resetSearch) {
    resetSearch.addEventListener("click", function () {
        projectSearch.value = "";
        filterProjects();
    });
}

// Show the initial project count.
if (projectSearch) {
    filterProjects();
}

// ======================================
// 4. EXPANDABLE CONTENT
// ======================================

const expandButton = document.getElementById("expandButton");
const extraContent = document.getElementById("extraContent");

if (expandButton && extraContent) {
    expandButton.addEventListener("click", function () {
        const isHidden = extraContent.hidden;

        extraContent.hidden = !isHidden;

        expandButton.textContent = isHidden
            ? "Show Less"
            : "Read More";
    });
}

