function showLevel2() {
    var contactType = document.getElementById("contactType").value;
    var suggestionFields = document.getElementById("suggestionFields");
    var complaintFields = document.getElementById("complaintFields");

    if (contactType === "make_suggestion") {
        suggestionFields.style.display = "block";
        complaintFields.style.display = "none";
    } else if (contactType === "make_complaint") {
        suggestionFields.style.display = "none";
        complaintFields.style.display = "block";
    }

    document.getElementById("level2").style.display = "block";

    // Clear any existing messages
    document.getElementById("responseMessage").innerHTML = "";
}

function submitForm() {
    var contactType = document.getElementById("contactType").value;
    var formData = {
        contactType: contactType,
    };

    if (contactType === "make_suggestion") {
        formData.brand = document.getElementById("brand").value;
        formData.productName = document.getElementById("productName").value;
        formData.suggestion = document.getElementById("suggestion").value;
        formData.firstName = document.getElementById("firstName").value;
        formData.lastName = document.getElementById("lastName").value;
        formData.email = document.getElementById("email").value;
    } else if (contactType === "make_complaint") {
        formData.productNameComplaint = document.getElementById("productNameComplaint").value;
        formData.productCode = document.getElementById("productCode").value;
        formData.purchaseDate = document.getElementById("purchaseDate").value;
        formData.firstNameComplaint = document.getElementById("firstNameComplaint").value;
        formData.lastNameComplaint = document.getElementById("lastNameComplaint").value;
        formData.emailComplaint = document.getElementById("emailComplaint").value;
    }

    // Make an AJAX POST request to the API endpoint
    fetch("https://gey8e1wjqj.execute-api.eu-north-1.amazonaws.com/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the API response here
        var responseMessage = document.getElementById("responseMessage");
        if (data.success) {
            responseMessage.innerHTML = "Success: " + data.message;
            responseMessage.style.color = "green"; // Set success message color
        } else {
            responseMessage.innerHTML = "Error: " + data.message;
            responseMessage.style.color = "red"; // Set error message color
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

function goBack() {
    document.getElementById("level2").style.display = "none";
    document.getElementById("suggestionFields").style.display = "none";
    document.getElementById("complaintFields").style.display = "none";
}
