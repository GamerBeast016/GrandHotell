


function updateCountdown() {
    const eventDate = new Date("2025-12-31T23:59:59").getTime(); // Use ISO format
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerText = "Evenemanget har börjat!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText =
        `Nästa stora event (Ny år) om: ${days} dagar, ${hours} timmar, ${minutes} minuter och ${seconds} sekunder!`;
}

function updatevin() {
    const eventDate = new Date("2025-04-19T23:59:59").getTime(); // Use ISO format
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        document.getElementById("vin").innerText = "Evenemanget har börjat!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("vin").innerText =
        `Nästa event (vin) om: ${days} dagar, ${hours} timmar, ${minutes} minuter och ${seconds} sekunder!`;
}

function updatejazz() {
    const eventDate = new Date("2025-04-23T23:59:59").getTime(); // Use ISO format
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        document.getElementById("jazz").innerText = "Evenemanget har börjat!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("jazz").innerText =
        `Nästa event (jazzKväll) om: ${days} dagar, ${hours} timmar, ${minutes} minuter och ${seconds} sekunder!`;
}

// Run once immediately, then every second
updateCountdown();
updatevin();
updatejazz();
setInterval(updateCountdown, 1000);

document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const eventSelected = document.getElementById('event').value;
    const guests = document.getElementById('guests').value;
    const confirmation = document.getElementById('confirmation');

    if (name && eventSelected && guests) {
        confirmation.innerText = `Tack, ${name}! Din bokning för ${eventSelected} med ${guests} gäster är bekräftad.`;
        document.getElementById('booking-form').reset();
        setTimeout(() => { confirmation.innerText = ""; }, 10000);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitReview');
    const nameInput = document.getElementById('name1');
    const reviewInput = document.getElementById('reviewInput');

    if (!submitButton || !nameInput || !reviewInput) {
        console.error("One or more elements are missing!");
        return;
    }

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const name = nameInput.value;
        const reviewText = reviewInput.value;

        if (name.trim() && reviewText.trim()) {
            const reviewsDiv = document.getElementById('reviews');
            if (reviewsDiv) {
                reviewsDiv.innerHTML += `<p><strong>${name}:</strong> "${reviewText}"</p>`;
                nameInput.value = "";
                reviewInput.value = "";
            }
        } else {
            alert("Var vänlig och fyll i både namn och recension.");
        }
    });
});




// Ensure JavaScript runs after the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('vip').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission (page reload)

        const email = document.getElementById('vipEmail').value; // Get email value
        const confirmation = document.getElementById('confirmationer'); // Get confirmation element

        if (email) {
            ("Tack för din anmälan!"); // Log the confirmation message

            // Show confirmation message on the page
            confirmation.innerText = "Tack för din anmälan!";

            // Clear the form input fields
            document.getElementById('vip').reset();
        } else {
            console.log("Var vänlig och fyll i en giltig e-postadress.");
        }
    });
});