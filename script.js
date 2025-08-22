// A flexible way to manage projects. Just add or remove objects from this array.
const projects = [
    {
        title: "Homemade High-Precision Multimeter",
        description: "A detailed description of the Homemade High-Precision Multimeter project, its purpose, components, and my role in its development.",
        videoUrl: "https://youtu.be/_sRhAzU18t8?si=tk9NENuRtdIZRf2m", // Placeholder video
        documents: [
            { name: "Project Report (PDF)", url: "#" }, // Placeholder link
            { name: "Schematics (PDF)", url: "#" }     // Placeholder link
        ]
    },
    {
        title: "Linear Solar Charge Controller",
        description: "An overview of the Linear Solar Charge Controller. It was designed to manage charging solar batteries efficiently.",
        videoUrl: "https://www.youtube.com/embed/j_hD2DqS-sU",
        documents: [
            { name: "Design Document (PDF)", url: "#" },
            { name: "Circuit Diagram (PDF)", url: "#" }
        ]
    },
    {
        title: "Voltage-Sensitive Circuit Breaker",
        description: "Description of a circuit breaker similar to an MCB, with an emphasis on its voltage-sensitive features and how it protects circuits.",
        videoUrl: "https://www.youtube.com/embed/j_hD2DqS-sU",
        documents: [
            { name: "Project Document (PDF)", url: "#" }
        ]
    },
    {
        title: "IoT-Based Energy Monitoring System",
        description: "A system designed to monitor and manage energy consumption using IoT technology, providing real-time data.",
        videoUrl: "https://www.youtube.com/embed/j_hD2DqS-sU",
        documents: [
            { name: "Code Snippets", url: "#" },
            { name: "System Architecture", url: "#" }
        ]
    },
    {
        title: "MPPT Solar Charge Controller",
        description: "A more advanced solar charge controller using Maximum Power Point Tracking (MPPT) to maximize power from solar panels.",
        videoUrl: "https://www.youtube.com/embed/j_hD2DqS-sU",
        documents: [
            { name: "MPPT Theory", url: "#" },
            { name: "Schematics", url: "#" }
        ]
    },
    {
        title: "Home Automation System",
        description: "A smart home system that uses microcontrollers and IoT to automate lights, appliances, and security.",
        videoUrl: "https://www.youtube.com/embed/j_hD2DqS-sU",
        documents: [
            { name: "Source Code", url: "#" },
            { name: "Installation Guide", url: "#" }
        ]
    }
];

// Get elements from the DOM
const projectGrid = document.querySelector(".project-grid");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalVideo = document.getElementById("modal-video");
const modalDocsList = document.getElementById("modal-docs-list");
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
    modalVideo.src = project.videoUrl;

    // Clear previous documents
    modalDocsList.innerHTML = "";
    project.documents.forEach(doc => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = doc.url;
        link.textContent = doc.name;
        link.target = "_blank";
        listItem.appendChild(link);
        modalDocsList.appendChild(listItem);
    });

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    // Pause the video when closing
    modalVideo.src = "";
}

// Close the modal when the close button is clicked
closeButton.addEventListener("click", closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Build the project grid when the page loads
document.addEventListener("DOMContentLoaded", () => {
    projects.forEach(project => {
        createProjectCard(project);
    });

});
