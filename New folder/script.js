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
}

function submitForm() {
    var contactType = document.getElementById("contactType").value;
    var formData = {
        contactType: contactType,
    };

    if (contactType === "make_suggestion") {
        formData.suggestion = document.getElementById("suggestion").value;
    } else if (contactType === "make_complaint") {
        formData.complaint = document.getElementById("complaint").value;
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
        if (data.success) {
            document.getElementById("responseMessage").innerHTML = "Success: " + data.message;
        } else {
            document.getElementById("responseMessage").innerHTML = "Error: " + data.message;
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
