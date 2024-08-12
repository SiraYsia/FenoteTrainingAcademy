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
        const taxRate = 0.03;
        
        const parameters = getQueryParameters();
        const serviceFee = 0.0375 * parseFloat(parameters.price);
        const taxAmount = parseFloat(parameters.price)  * taxRate
        const totalPrice = parseFloat(parameters.price) + serviceFee + taxAmount
        console.log("HERE");
        console.log(parameters);

        const formattedDate = parameters.date;
        const formattedStartTime = parameters.startTime;
        const formattedEndTime = parameters.endTime;

        // Display selected course details
        // Display selected course details
// Display selected course details with animations and refined styles
confirmationDetailsDiv.innerHTML = `
    <div style="
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        font-family: 'Arial', sans-serif;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.5s forwards;
    ">
        <h2 style="
            text-align: center;
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
        ">${parameters.course}</h2>
        <div style="
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        ">
            <span style="font-weight: bold; color: #555;">Date:</span>
            <span style="color: #000000;">${formattedDate}</span>
        </div>
        <div style="
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        ">
            <span style="font-weight: bold; color: #555;">Time:</span>
            <span style="color: #000000;">${formattedStartTime} - ${formattedEndTime}</span>
        </div>
        <div style="
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        ">
            <span style="font-weight: bold; color: #555;">Course Price:</span>
            <span style="color: #000000; font-weight: bold;">$${parseFloat(parameters.price).toFixed(2)}</span>
        </div>
        <div style="
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        ">
            <span style="font-weight: bold; color: #555;">Service Fee:</span>
            <span style="color: #000000; font-weight: bold;">$${serviceFee.toFixed(2)}</span>
        </div>

        <div style="
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        ">
        <span style="font-weight: bold; color: #555;">Tax (${(taxRate * 100).toFixed(2)}%):</span>
        <span style="color: #000000; font-weight: bold;">$${taxAmount.toFixed(2)}</span>
        </div>
        

        <div style="
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-top: 2px solid #eee;
            margin-top: 20px;
            font-size: 18px;
            color: #000000;
        ">

            <span style="font-weight: bold;">Total Price:</span>
            <span style="color: #000000; font-weight: bold;">$${totalPrice.toFixed(2)}</span>
        </div>
    </div>
`;

// Add the CSS for the fadeInUp animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

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

    window.location.href = `./pay.html?${queryString}`;
}
});


