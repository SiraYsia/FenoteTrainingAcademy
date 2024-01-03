// confirm.js



window.addEventListener('load', function() {
    // Function to parse query parameters from the URL
    function getQueryParameters() {
        const queryString = window.location.search.substring(1);
        const parameters = {};
        queryString.split("&").forEach(param => {
            const [key, value] = param.split("=");
            parameters[key] = decodeURIComponent(value);
        });
        return parameters;
    }

    // Function to display confirmation details
    function displayConfirmationDetails() {
        const confirmationDetailsDiv = document.getElementById("confirmation-details");
        const parameters = getQueryParameters();

        console.log("HERE");
        console.log(parameters);

        const formattedDate = parameters.date;
        const formattedStartTime = parameters.startTime;
        const formattedEndTime = parameters.endTime;

        // Display selected course details
        confirmationDetailsDiv.innerHTML = `
            <h2>${parameters.course}</h2>
            <p><strong>Price:</strong> $${parameters.price}</p>
            <p><strong>Date:</strong> ${formattedDate} </p>
            <p><strong>Time:</strong> ${formattedStartTime} - ${formattedEndTime}</p>
        `;
    }

    function loadCancellationInfo() {
        const cancellationInfoDiv = document.getElementById("cancellation-info");

        // Fetch cancellation.html content
        fetch('cancelation')
            .then(response => response.text())
            .then(html => {
                // Set the fetched HTML as the inner HTML of the cancellation-info div
                cancellationInfoDiv.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching cancellation information:', error);
            });
    }

    function handleCheckboxChange() {
        console.log("Checkbox changed");
        const agreementCheckbox = document.getElementById("agreementCheckbox");
    
        // Return true if the checkbox is checked, otherwise return false
        return agreementCheckbox.checked;
    }
    // Add event listener for checkbox change event
    document.getElementById("agreementCheckbox").addEventListener("change", handleCheckboxChange);

    // Initial display of confirmation details and cancellation information
    displayConfirmationDetails();
    loadCancellationInfo();

    document.querySelector(".back-button").addEventListener("click", function() {
        // Redirect to schedule.html
        window.location.href = "./schedule";
    });

// Add event listener for "Confirm and Pay" button click
document.querySelector(".confirm-button").addEventListener("click", function() {
    const parameters = getQueryParameters();
    console.log("Confirm and Pay button clicked for course:", parameters.course);
    if (handleCheckboxChange()){
        console.log("PRICE", parameters.price)
        redirectToConfirmation(parameters.course, parameters.price, parameters.date, parameters.startTime, parameters.endTime);
    } else{
        alert("You must agree with the terms and policies to proceed.");
    }
})

function redirectToConfirmation(course, price, date, startTime, endTime) {
    const confirmationDetails = {
        course: course,
        price: price,
        date: date,
        startTime: startTime,
        endTime: endTime,
    };
    const queryString = Object.entries(confirmationDetails)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&");

    window.location.href = `./pay?${queryString}`;
}
});