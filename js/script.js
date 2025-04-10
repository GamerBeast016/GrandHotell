/*hamburgermenu*/
// JavaScript to toggle the hamburger menu
document.getElementById('menu-button').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('show');
});



/*search bar for the hambuergermenu*/
// Toggle dropdown visibility
function toggleDropdown(dropdownId) {
  document.getElementById(dropdownId).classList.toggle("shown");
}

// Filter search results
function filterFunction(inputId, dropdownId) {
  const input = document.getElementById(inputId);
  const filter = input.value.toUpperCase();
  const div = document.getElementById(dropdownId);
  const a = div.getElementsByTagName("a");

  for (let i = 0; i < a.length; i++) {
    const txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// Handle "Enter" key event for redirection
function handleKeyDown(event, inputId, dropdownId) {
  if (event.key === "Enter") {
    const input = document.getElementById(inputId).value.toLowerCase();
    const div = document.getElementById(dropdownId);
    const a = div.getElementsByTagName("a");

    for (let i = 0; i < a.length; i++) {
      const linkText = a[i].textContent.toLowerCase();
      if (linkText.startsWith(input) && a[i].style.display !== "none") {
        // Redirect to the first matching link
        window.location.href = a[i].href;
        break;
      }
    }
    event.preventDefault(); // Prevent the default form submission
  }
}

// Toggle mobile menu
document.getElementById("menu-button").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("showne");
});






console.log("Navbar script loaded");

document.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector('nav');

  if (!navbar) return; // Skydd om <nav> inte finns

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.classList.add('hide');
    } else {
      navbar.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});

