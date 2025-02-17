document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('projectList');
    const addProjectButton = document.getElementById('addProjectButton');
    const deleteProjectButton = document.getElementById('deleteProjectButton');
    const projectNameInput = document.getElementById('projectName');
    const projectDescriptionInput = document.getElementById('projectDescription');

    // Function to add a new project
    addProjectButton.addEventListener('click', function() {
        const projectName = projectNameInput.value.trim();
        const projectDescription = projectDescriptionInput.value.trim();

        if (projectName && projectDescription) {
            const newProjectItem = document.createElement('li');
            newProjectItem.innerHTML = `
                <h4>${projectName}</h4>
                <p>${projectDescription}</p>
            `;

            // Append the new project to the list
            projectList.appendChild(newProjectItem);

            // Clear the input fields after adding the project
            projectNameInput.value = '';
            projectDescriptionInput.value = '';
        } else {
            alert('Please enter both project name and description.');
        }
    });

    // Function to delete the last project
    deleteProjectButton.addEventListener('click', function() {
        const lastProject = projectList.lastElementChild;
        if (lastProject) {
            projectList.removeChild(lastProject);
        } else {
            alert('No projects to delete!');
        }
    });
});


