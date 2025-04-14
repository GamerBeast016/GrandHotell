document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const guests = document.getElementById("guests").value;
    const roomType = document.getElementById("roomType").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    const confirmation = document.getElementById("confirmation-message");

    // Reset styles
    confirmation.classList.remove("success", "error");

    if (name && email && guests && roomType && checkin && checkout) {
        confirmation.innerText = `Tack för din bokning, ${name}! Det kommer att skickas en orderbekräftelse via din mail.`;
        confirmation.classList.add("success");

        document.getElementById("booking-form").reset();

        setTimeout(() => {
            confirmation.classList.remove("success");
            confirmation.innerText = "";
        }, 5000);
    } else {
        confirmation.innerText = "Vänligen fyll i alla fält.";
        confirmation.classList.add("error");

        setTimeout(() => {
            confirmation.classList.remove("error");
            confirmation.innerText = "";
        }, 5000);
    }
});