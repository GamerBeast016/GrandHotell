document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('review-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the page from reloading

        // Get the values of name and review
        const name = document.getElementById('name').value;
        const reviewText = document.getElementById('reviewInput').value;

        // Check if both fields are filled
        if (name && reviewText) {
            // Add the review to the page
            document.getElementById("reviews").innerHTML += `<p><strong>${name}:</strong> "${reviewText}"</p>`;

            // Clear the input fields
            document.getElementById("name").value = ""; 
            document.getElementById("reviewInput").value = "";
        } else {
            // If either name or review is missing, show an alert
            alert("Var vänlig och fyll i både namn och recension.");
        }
    });
});
