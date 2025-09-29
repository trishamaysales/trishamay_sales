// Simple form submission handling
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thanks for your message, ${name}! I'll get back to you soon.`);

  // Clear the form
  form.reset();
});
