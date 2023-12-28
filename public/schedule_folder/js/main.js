const courses = {
    aha_bls_blended: {
        name: "AHA Basic Life Support (BLS) - BLENDED",
        price: 58.00,
        descriptionFile: "schedule_folder/descriptions/aha_bls_blended_description.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00",
            // Add more date options as needed
        ],
    },
    ars_bls_classroom: {
        name: "ARC Basic Life Support (BLS) - CLASSROOM",
        price: 2.00,
        descriptionFile: "schedule_folder/descriptions/ars_bls_classroom_description.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00",        ],
    },
    ars_bls_blended: {
        name: "ARC Basic Life Support (BLS) - BLENDED",
        price: 69.00,
        descriptionFile: "schedule_folder/descriptions/ars_bls_blended_description.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00",        ],
    },
    ars_instructor: {
        name: "ARC First Aid/CPR/AED Instructor",
        price: 199.00,
        descriptionFile: "schedule_folder/descriptions/ars_instructor_description.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00",        ],
    },
    ars_adult_pediatric_blended: {
        name: "ARC Adult & Pediatric First Aid/CPR/AED - BLENDED",
        price: 69.00,
        descriptionFile: "schedule_folder/descriptions/ars_adult_pediatric_blended_description.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00", 
            // Add date options as needed
        ],
    },
    aha_bls_instructor: {
        name: "AHA BLS Instructor Course",
        price: 399,
        descriptionFile: "schedule_folder/descriptions/aha_bls_instructor_description.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00",        ],
    },
};


// Function to update date buttons based on user selection
function updateDateButtons() {
    const selectedCourse = document.getElementById("course").value;
    const dateSelectionDiv = document.getElementById("date-selection");

    // Clear existing buttons
    dateSelectionDiv.innerHTML = "";

    // Add new buttons based on the selected course's dates
    courses[selectedCourse].dates.forEach(date => {
        const button = document.createElement("button");
        button.innerHTML = new Date(date).toLocaleString();
        button.addEventListener("click", () => redirectToConfirmation(selectedCourse, date));
        dateSelectionDiv.appendChild(button);
    });
}

// Function to update course description based on user selection
function updateCourseDescription() {
    const selectedCourse = document.getElementById("course").value;
    const courseDetails = courses[selectedCourse];

    // Load course description from HTML file
    fetch(courseDetails.descriptionFile)
        .then(response => response.text())
        .then(descriptionHtml => {
            document.getElementById("course-description").innerHTML = descriptionHtml;
        })
        .catch(error => console.error("Error loading description:", error));
}

// Function to redirect to confirmation page
function redirectToConfirmation(course, date) {
    const selectedCourse = courses[course];
    const confirmationDetails = {
        course: selectedCourse.name,
        price: selectedCourse.price.toFixed(2),
        date: new Date(date).toLocaleString(),
    };

    // Redirect to confirmation page with selected course details as query parameters
    const queryString = Object.entries(confirmationDetails)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&");

    window.location.href = `confirmation.html?${queryString}`;
}

// Attach updateDateButtons function to the course selection change event
document.getElementById("course").addEventListener("change", () => {
    updateDateButtons();
    updateCourseDescription(); // Update description for the default date
});

// Initial update based on the default selected course
updateDateButtons();
updateCourseDescription();



fetch('schedule_folder/descriptions/description.html')
    .then(response => response.text())
    .then(descriptionHtml => {
        document.getElementById("description").innerHTML = descriptionHtml;
    })
    .catch(error => console.error("Error loading description:", error));