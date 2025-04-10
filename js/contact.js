document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const namn = document.getElementById("namn").value;
    const epost = document.getElementById("epost").value;
    const meddelande = document.getElementById("meddelande").value;
    const bekräftelse = document.getElementById("bekräftelse");

    if (namn && epost && meddelande) {
      bekräftelse.innerText = `Tack för ditt meddelande, ${namn}! Vi återkommer så snart vi kan.`;

      document.getElementById("contact-form").reset();

      setTimeout(() => {
        bekräftelse.innerText = "";
      }, 8000);
    }
  });