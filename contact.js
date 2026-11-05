// Lightweight client-side validation for the contact form.
// No backend exists yet, so a real submission isn't sent — this simply
// validates the fields and shows a confirmation message in place.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      status.textContent = "Please fill in every field before sending.";
      status.style.color = "#e8a33d";
      return;
    }

    if (!emailPattern.test(email)) {
      status.textContent = "That email address doesn't look right — please check it.";
      status.style.color = "#e8a33d";
      return;
    }

    status.textContent = `Thanks, ${name.split(" ")[0]} — your message has been noted. We'll reply to ${email} soon.`;
    status.style.color = "#4fb0c6";
    form.reset();
  });
});
