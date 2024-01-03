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
        fetch('cancelation.html')
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
        window.location.href = "schedule.html";
    });

    // Add event listener for "Confirm and Pay" button click
    document.querySelector(".confirm-button").addEventListener("click", function() {
        const parameters = getQueryParameters();
        console.log("Confirm and Pay button clicked for course:", parameters.course);
        if (handleCheckboxChange()){
            handleConfirmAndPay(parameters.course);
        } else{
            alert("You must agree with the terms and policies to proceed.");
        }
    });

    // Function to handle "Confirm and Pay" button click
    function handleConfirmAndPay(course) {
        let redirectLink;

        switch (course) {
            case 'ARC Adult And Pediatric First Aid/CPR/AED-BL-R.21 - BLENDED':
                redirectLink = courseSquareLinks['adult_pediatric_bl'];
                break;
            case 'ARC Adult First Aid/CPR/AED-BL-R.21 - BLENDED':
                redirectLink = courseSquareLinks['adult_bl'];
                break;
            case 'ARC Adult CPR/AED-BL-R.21  - BLENDED':
                redirectLink = courseSquareLinks['ault_cpr_bl'];
                break;
            case 'ARC Basic Life Support-BL R.21':
                redirectLink = courseSquareLinks['basic_life_bl'];
                break;
            case 'ARC Basic Life Support-R.21 - CLASSROOM':
                redirectLink = courseSquareLinks['basic_life_cl'];
                break;
            case 'ARC Babysitter Training And Pediatric First Aid/CPR':
                redirectLink = courseSquareLinks['baby_sitting_firstaid'];
                break;
            case 'ARC Babysitters Training':
                redirectLink = courseSquareLinks['baby_sitting_training'];
                break;
            case 'ARC Adult & Pediatric First Aid/CPR/AED Blended r.21 - VIRTUAL':
                redirectLink = courseSquareLinks['virtual_pediatriic'];
                break;
            case 'ARC Adult First Aid/CPR/AED Blended r.21 - VIRTUAL':
                redirectLink = courseSquareLinks['virtual_firstaid'];
                break;
            default:
                //course not found
                alert('Please try again. ');
                return;
        }

        // Redirect to the selected Square checkout link
        window.location.href = redirectLink;
    }

    // Object mapping course names to Square checkout links
    const courseSquareLinks = {
        'adult_pediatric_bl': 'https://square.link/u/Hj5zV6BQ',
        'adult_bl': 'https://square.link/u/2XtYoreg',
        'ault_cpr_bl': 'https://square.link/u/CJuMDBVP',
        'basic_life_bl': 'https://square.link/u/CgkOFvEF',
        'basic_life_cl': 'https://square.link/u/t0O5fekL',
        'baby_sitting_firstaid': 'https://square.link/u/Y1VohNP2',
        'baby_sitting_training': 'https://square.link/u/fnw6K2M0',
        'virtual_pediatriic': 'https://square.link/u/pM929NrY',
        'virtual_firstaid': 'https://square.link/u/nzf6MeHE',
    };
});
