const courseDetails = {
    cpr_blended_adult: {
        name: "Adult CPR/AED-BL-R.21",
        price: 70.00,
        descriptionFile: "schedule_folder/descriptions/ara/1.cpr_blended_adult.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00",
        ],
    },
    cpr_blended_first_aid: {
        name: "Adult First Aid/CPR/AED-BL-R.21",
        price: 89.00,
        descriptionFile: "schedule_folder/descriptions/ara/1.cpr_blended_first_aid.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00",
        ],
    },
    cpr_blended_pediatric: {
        name: "Adult And Pediatric First Aid/CPR/AED-BL-R.21",
        price: 99.00,
        descriptionFile: "schedule_folder/descriptions/ara/1.cpr_blended_pediatric.html",
        dates: [
            "2024-02-15T10:00:00",
            "2024-02-20T11:30:00",
        ],
    },
    cpr_classroom_adult: {
        name: "Adult CPR/AED-R.21",
        price: 75.00,
        descriptionFile: "schedule_folder/descriptions/ara/2.cpr_classroom_adult.html",
        dates: [
            "2024-03-10T13:00:00",
            "2024-03-15T15:30:00",
        ],
    },
    cpr_classroom_first_aid: {
        name: "Adult First Aid/CPR/AED-R.21",
        price: 95.00,
        descriptionFile: "schedule_folder/descriptions/ara/2.cpr_classroom_first_aid.html",
        dates: [
            "2024-03-10T13:00:00",
            "2024-03-15T15:30:00",
        ],
    },
    cpr_classroom_pediatric: {
        name: "Adult And Pediatric First Aid/CPR/AED-R.21",
        price: 105.00,
        descriptionFile: "schedule_folder/descriptions/ara/2.cpr_classroom_pediatric.html",
        dates: [
            "2024-03-10T13:00:00",
            "2024-03-15T15:30:00",
        ],
    },
    cpr_sessions_adult: {
        name: "Adult CPR/AED Skills Session-R.21",
        price: 37.00,
        descriptionFile: "schedule_folder/descriptions/ara/3.cpr_sessions_adult.html",
        dates: [
            "2024-03-22T09:00:00",
            "2024-03-25T11:30:00",
        ],
    },
    cpr_sessions_first_aid: {
        name: "Adult And Pediatric First Aid/CPR/AED Skills Session-R.21",
        price: 62.00,
        descriptionFile: "schedule_folder/descriptions/ara/3.cpr_sessions_first_aid.html",
        dates: [
            "2024-03-22T09:00:00",
            "2024-03-25T11:30:00",
        ],
    },
    cpr_sessions_pediatric: {
        name: "Pediatric First Aid/CPR/AED Skills Session-R.21",
        price: 77.00,
        descriptionFile: "schedule_folder/descriptions/ara/3.cpr_sessions_pediatric.html",
        dates: [
            "2024-03-22T09:00:00",
            "2024-03-25T11:30:00",
        ],
    },
    bls_blended: {
        name: "Basic Life Support-BL R.21",
        price: 85.00,
        descriptionFile: "schedule_folder/descriptions/ara/4.bls_blended.html",
        dates: [
            "2024-04-05T10:30:00",
            "2024-04-10T12:00:00",
        ],
    },
    bls_classroom: {
        name: "Basic Life Support-R.21",
        price: 90.00,
        descriptionFile: "schedule_folder/descriptions/ara/4.bls_classroom.html",
        dates: [
            "2024-04-15T14:00:00",
            "2024-04-20T16:30:00",
        ],
    },

    babysitter_classroom: {
        name: "Basic Life Support-R.21",
        price: 130.00,
        descriptionFile: "schedule_folder/descriptions/ara/5.babysitter_classroom.html",
        dates: [
            "2024-04-15T14:00:00",
            "2024-04-20T16:30:00",
        ],
    },
};

// ... your courseDetails object ...
function updateDateButtons() {
    const selectedCourse = document.getElementById("courseOption").value;
    const dateSelectionDiv = document.getElementById("date-selection");

    // Clear existing buttons
    dateSelectionDiv.innerHTML = '';

    // Add new buttons based on the selected course's dates
    courseDetails[selectedCourse].dates.forEach(date => {
        const button = document.createElement("button");
        button.innerHTML = new Date(date).toLocaleString();

        // Attach an event listener to each date button
        button.addEventListener("click", () => {
            // Call redirectToConfirmation when the button is clicked
            redirectToConfirmation(selectedCourse, date);
        });

        dateSelectionDiv.appendChild(button);
    });
}
// ... rest of your code ...


// Function to update course description based on user selection
function updateCourseDescription() {
    const selectedCourse = document.getElementById("courseOption").value;

    const courseDetail = courseDetails[selectedCourse];

    // Load course description from HTML file
    fetch(courseDetail.descriptionFile)
        .then(response => response.text())
        .then(descriptionHtml => {
            document.getElementById("course-description").innerHTML = descriptionHtml;
        })
        .catch(error => console.error("Error loading description:", error));
        
}


function updateCourseAndDate() {

    document.getElementById('date-selection').innerHTML = '';
    document.getElementById('course-description').innerHTML = '';
    const selectedCertificate = document.getElementById('certificateOption').value;
    const selectedMainOption = document.getElementById('mainOption').value;
    const selectedCourseOption = document.getElementById('courseOption').value;

    // Check if any of the options is empty
    const isAnyOptionEmpty = !selectedCertificate || !selectedMainOption || !selectedCourseOption;

    // Hide or show description and date div based on the condition
    const descriptionSection = document.getElementById("course-description");
    const dateSelectionDiv = document.getElementById("date-selection");

    if (isAnyOptionEmpty) {
        descriptionSection.style.display = 'none';
        dateSelectionDiv.style.display = 'none';
    } else {
        descriptionSection.style.display = 'block';
        dateSelectionDiv.style.display = 'block';
    }

    updateCourseDescription();
    updateDateButtons();
}



fetch('schedule_folder/descriptions/description.html')
    .then(response => response.text())
    .then(descriptionHtml => {
        document.getElementById("description").innerHTML = descriptionHtml;


    })
    .catch(error => console.error("Error loading description:", error));



// Set American Red Cross as the default certificate option
document.getElementById('certificateOption').value = '';

// Initial population of courses based on the default certificate option
populateCourses('');



// Update main options and course options accordingly
document.getElementById('certificateOption').addEventListener('change', updateMainOptions);
document.getElementById('mainOption').addEventListener('change', updateCourseOptions);

function updateMainOptions() {
    document.getElementById('mainOption').value = '';
    document.getElementById('courseOption').value = '';
    document.getElementById('date-selection').innerHTML = '';
    document.getElementById('course-description').innerHTML = '';
    var certificateOption = document.getElementById('certificateOption').value;
    populateCourses(certificateOption);

}


function updateCourseOptions() {
    document.getElementById('courseOption').value = '';
    document.getElementById('date-selection').innerHTML = '';
    document.getElementById('course-description').innerHTML = '';
    var selectedCourse = document.getElementById('mainOption').value;
    populateFinalOption(selectedCourse);


}

function populateCourses(certificateOption) {
    const dateSelectionDiv = document.getElementById("date-selection");
    const courseDescriptionDiv = document.getElementById("course-description");

    // Simulate fetching courses based on the certificate option
    var courses;

    if (certificateOption === 'red_cross') {
        courses = ['CPR Blended (online + Classroom)', 'CPR Classroom', 'CPR Sessions with prerequisite', 'BLS Blended', 'BLS Classroom', 'Babysitter Classroom'];
    } else if (certificateOption === 'heart_association') {
        courses = ['BLS Provider', 'Heartsaver CPR/AED', 'Heartsaver First Aid CPR/AED', 'HeartSaver Pediatric First Aid CPR/AED', 'Heartsaver for K-12 Schools', 'Heartsaver First Aid Only', 'Heartsaver Bloodborne Pathogens'];

        // Handle 'AHA' case
        const notAvailableMessage = "AHA Courses Not available at the moment. Please check another time. ";

        // Set inner HTML for date selection
        dateSelectionDiv.innerHTML = `<p>${notAvailableMessage}</p>`;

        // Set inner HTML for course description
        courseDescriptionDiv.innerHTML = `<p>${notAvailableMessage}</p>`;
        
        // Return early as we don't need to populate the dropdown
        return;
    } else {
        // Handle other cases or leave courses empty if needed
        courses = [];
    }


    var mainOptionDropdown = document.getElementById('mainOption');
    mainOptionDropdown.innerHTML = '';

    // Add an empty option for mainOption
    var emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.text = '';
    mainOptionDropdown.appendChild(emptyOption);

    courses.forEach(function(course) {
        var option = document.createElement('option');
        option.value = course;
        option.text = course;
        mainOptionDropdown.appendChild(option);
    });

    // Trigger the change event to populate final options based on the selected course
    mainOptionDropdown.dispatchEvent(new Event('change'));
}

function populateFinalOption(selectedCourse) {
    var courseOptionDropdown = document.getElementById('courseOption');
    courseOptionDropdown.innerHTML = '';

    // Add an empty option
    var emptyOption = document.createElement('option');
    emptyOption.value = ''; // Empty value
    emptyOption.text = ''; // Empty text content
    courseOptionDropdown.appendChild(emptyOption);

    if (selectedCourse) {
        // Simulate fetching final options based on the selected course
        var finalOptions = getFinalOptionsForCourse(selectedCourse);

        finalOptions.forEach(function(finalOption) {
            var option = document.createElement('option');
            option.value = finalOption.id;
            option.text = finalOption.name;
            courseOptionDropdown.appendChild(option);
        });
    }
}














function getFinalOptionsForCourse(course) {
    // Simulate fetching final options based on the selected course
    var finalOptions = [];

    switch (course) {
        case 'CPR Blended (online + Classroom)':
            finalOptions = [
                { id: 'cpr_blended_adult', name: 'Adult CPR/AED-BL-R.21' },
                { id: 'cpr_blended_first_aid', name: 'Adult First Aid/CPR/AED-BL-R.21' },
                { id: 'cpr_blended_pediatric', name: 'Adult And Pediatric First Aid/CPR/AED-BL-R.21' }
            ];
            break;

        case 'CPR Classroom':
            finalOptions = [
                { id: 'cpr_classroom_adult', name: 'Adult CPR/AED-R.21' },
                { id: 'cpr_classroom_first_aid', name: 'Adult First Aid/CPR/AED-R.21' },
                { id: 'cpr_classroom_pediatric', name: 'Adult And Pediatric First Aid/CPR/AED-R.21' }
            ];
            break;

        case 'CPR Sessions with prerequisite':
            finalOptions = [
                { id: 'cpr_sessions_adult', name: 'Adult CPR/AED Skills Session-R.21' },
                { id: 'cpr_sessions_pediatric', name: 'Adult And Pediatric First Aid/CPR/AED Skills Session-R.21' },
                { id: 'cpr_sessions_first_aid', name: 'Adult First Aid/CPR/AED Skills Session-R.21' }
            ];
            break;

        case 'BLS Blended':
            finalOptions = [
                { id: 'bls_blended', name: 'Basic Life Support-BL R.21' }
            ];
            break;

        case 'BLS Classroom':
            finalOptions = [
                { id: 'bls_classroom', name: 'Basic Life Support-R.21' }
            ];
            break;

        case 'Babysitter Classroom':
            finalOptions = [
                { id: 'babysitter_classroom', name: "Babysitter's Training And Pediatric First Aid/CPR" }
            ];
            break;

        default:
            // Handle other cases or leave finalOptions empty if needed
            break;
    }

    return finalOptions;
}








// Attach updateDateButtons function to the course selection change event
document.getElementById("course").addEventListener("change", () => {
    updateDateButtons();
    updateCourseDescription(); // Update description for the default date
});




function redirectToConfirmation(course, date) {
    const selectedCourse = courseDetails[course];
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
