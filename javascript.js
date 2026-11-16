const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (username != "" && email != "") {

    document.getElementById("form-message").textContent =
      "Thank you for visiting, " + username +
      "! We will contact you at " + email + ".";

  }

});



const rows = document.querySelectorAll(".menu-row");

rows.forEach(function(row) {

  row.addEventListener("mouseover", function() {
    row.style.backgroundColor = "#f0d8c5";
  });

  row.addEventListener("mouseout", function() {
    row.style.backgroundColor = "";
  });

});




const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

  document.body.classList.toggle("dark-mode");

});




const menuItems = document.querySelectorAll(".menu-item");
const total = document.getElementById("total");

menuItems.forEach(function(item) {

  item.addEventListener("change", function() {

    let price = 0;

    menuItems.forEach(function(menuItem) {

      if (menuItem.checked) {
        price = price + parseInt(menuItem.dataset.price);
      }

    });

    total.textContent = "Total: Rs. " + price;

  });

});




const birthYear = document.getElementById("birth-year");

birthYear.addEventListener("change", function() {

  const year = parseInt(birthYear.value);
  const age = 2026 - year;

  const message = document.getElementById("discount-message");

  if (age >= 60) {

    message.textContent =
      "You qualify for a senior discount!";

  } else if (age >= 18 && age <= 25) {

    message.textContent =
      "You qualify for a student discount!";

  } else {

    message.textContent =
      "You do not qualify for a special discount.";

  }

});




const readMoreButton = document.getElementById("readMoreButton");
const extraStory = document.getElementById("extraStory");

readMoreButton.addEventListener("click", function() {

  if (extraStory.style.display === "none") {

    extraStory.style.display = "block";
    readMoreButton.textContent = "Read Less";

  } else {

    extraStory.style.display = "none";
    readMoreButton.textContent = "Read More";

  }

});




const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const category = button.dataset.category;

    rows.forEach(function(row) {

      if (category === "All" ||
          row.dataset.category === category) {

        row.style.display = "";

      } else {

        row.style.display = "none";

      }

    });

  });

});




const status = document.getElementById("status");

const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 22) {

  status.textContent = "We are Open!";
  status.style.color = "lightgreen";

} else {

  status.textContent = "Closed - Open at 8 AM";
  status.style.color = "red";

}




const specialNotes = document.getElementById("special-notes");
const characterCount = document.getElementById("character-count");

specialNotes.addEventListener("input", function() {

  const remaining = 100 - specialNotes.value.length;

  characterCount.textContent =
    remaining + " characters remaining";

});