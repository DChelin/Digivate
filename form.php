<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <div id="level1">
            <h1>I would like to:</h1>
            <form id="contactForm">    
                <select id="contactType" name="contactType">
                    <option value="make_suggestion">Make a suggestion</option>
                    <option value="make_complaint">Make a complaint</option>
                </select><br>
                <button type="button" onclick="showLevel2()">Next</button>
            </form>
        </div>

        <div id="level2">
            <h2>Please fill in the below fields:</h2>
            <div id="responseMessage"></div>
            <form id="submissionForm">
            <div id="suggestionFields">
                <input type="text" id="firstName" name="firstName" placeholder="First Name *" class="field" required><br>

                <input type="text" id="lastName" name="lastName" placeholder="Last Name *" class="field" required><br>

                <input type="email" id="email" name="email" placeholder="Email Address *" class="field" required><br>

                <input type="text" id="brand" name="brand" placeholder="Brand *" class="field" required><br>

                <input type="text" id="productName" name="productName" placeholder="Product Name *" class="field" required><br>

                <textarea id="suggestion" name="suggestion" placeholder="Suggestion *" class="paragraph" required></textarea><br>

            </div>

            <div id="complaintFields" style="display: none;">
                <input type="text" id="firstNameComplaint" name="firstNameComplaint" placeholder="First Name *" class="field" required><br>

                <input type="text" id="lastNameComplaint" name="lastNameComplaint" placeholder="Last Name *" class="field" required><br>

                <input type="email" id="emailComplaint" name="emailComplaint" placeholder="Email Address *" class="field"required><br>

                <input type="text" id="productNameComplaint" name="productNameComplaint" placeholder="Product Name *" class="field" required><br>

                <input type="number" id="productCode" name="productCode" placeholder="Product Code *" class="field" required><br>

                <input type="date" id="purchaseDate" name="purchaseDate" placeholder="Purchase Date *" class="field" required><br>

            </div>

            <button type="button" onclick="submitForm()">Submit</button>
            <button type="button" onclick="goBack()">Back</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>

