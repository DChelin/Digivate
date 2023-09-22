function showLevel2() {
    // Hide level 1 and show level 2
    document.getElementById('level1').style.display = 'none';
    document.getElementById('level2').style.display = 'block';
}

function goBack() {
    // Hide level 2 and show level 1
    document.getElementById('level2').style.display = 'none';
    document.getElementById('level1').style.display = 'block';
}

function submitForm() {
    // Get user input from level 2 form
    const contactType = document.getElementById('contactType').value;
    const productName = document.getElementById('productName').value;
    const productCode = document.getElementById('productCode').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a JSON object with the form data
    const formData = {
        contactType: contactType,
        productName: productName,
        productCode: productCode,
        purchaseDate: purchaseDate,
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    };

    // Send the data to the API endpoint via AJAX
    fetch('https://gey8e1wjqj.execute-api.eu-north-1.amazonaws.com/items', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Check the API response for success or error
        if (data.success) {
            // Display a success message
            document.getElementById('responseMessage').textContent = 'Form submitted successfully!';
        } else {
            // Display an error message
            document.getElementById('responseMessage').textContent = 'Error: Form submission failed.';
        }
        // Show the response message
        document.getElementById('responseMessage').style.display = 'block';
    })
    .catch(error => {
        // Display an error message if the API request fails
        document.getElementById('responseMessage').textContent = 'Error: Form submission failed.';
        document.getElementById('responseMessage').style.display = 'block';
    });
}
