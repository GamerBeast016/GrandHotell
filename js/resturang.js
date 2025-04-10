document.getElementById('reservation-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const confirmation = document.getElementById('confirmation');
  
    if (name && email && date) {
      confirmation.innerText = `Tack, ${name}! Din bokning för ${date} är nu bokad. Det kommer att skickas en bekräftelse via mail.`;
  
      // Clear the input fields
      document.getElementById('reservation-form').reset();
  
      // Remove confirmation message after 10 seconds
      setTimeout(() => {
        confirmation.innerText = "";
      }, 10000);
    }
  });