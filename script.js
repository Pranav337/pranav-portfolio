// A flexible way to manage projects.
const projects = [
    {
        title: "Homemade High-Precision Multimeter",
        description: "A detailed description of the Homemade High-Precision Multimeter project, its purpose, components, and my role in its development.",
        driveLink: "https://drive.google.com/drive/folders/your_dummy_link_here_1"
    },
    {
        title: "Linear Solar Charge Controller",
        description: "An overview of the Linear Solar Charge Controller. It was designed to manage charging solar batteries efficiently.",
        driveLink: "https://drive.google.com/drive/folders/your_dummy_link_here_2"
    },
    {
        title: "Voltage-Sensitive Circuit Breaker",
        description: "Description of a circuit breaker similar to an MCB, with an emphasis on its voltage-sensitive features and how it protects circuits.",
        driveLink: "https://drive.google.com/drive/folders/your_dummy_link_here_3"
    },
    {
        title: "IoT-Based Energy Monitoring System",
        description: "A system designed to monitor and manage energy consumption using IoT technology, providing real-time data.",
        driveLink: "https://drive.google.com/drive/folders/your_dummy_link_here_4"
    },
    {
        title: "MPPT Solar Charge Controller",
        description: "A more advanced solar charge controller using Maximum Power Point Tracking (MPPT) to maximize power from solar panels.",
        driveLink: "https://drive.google.com/drive/folders/your_dummy_link_here_5"
    },
    {
        title: "Home Automation System",
        description: "A smart home system that uses microcontrollers and IoT to automate lights, appliances, and security.",
        driveLink: "https://drive.google.com/drive/folders/your_dummy_link_here_6"
    }
];

// Get elements from the DOM
const projectGrid = document.querySelector(".project-grid");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDriveLink = document.getElementById("modal-drive-link"); 
const closeButton = document.querySelector(".close-button");

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
        <div class="project-card-content">
            <h3>${project.title}</h3>
            <p>${project.description.slice(0, 100)}...</p>
        </div>
    `;
    card.addEventListener("click", () => {
        openModal(project);
    });
    projectGrid.appendChild(card);
}

// Function to open the modal and populate with project data
function openModal(project) {
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalDriveLink.href = project.driveLink;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal when the close button is clicked
closeButton.addEventListener("click", closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Build the project grid and set up nav menu when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Build project cards
    projects.forEach(project => {
        createProjectCard(project);
    });

    // --- New code for the navigation menu ---
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
