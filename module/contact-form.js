document.addEventListener("DOMContentLoaded", (event) => {
  generateContactForm();
});

function generateContactForm() {
  let contactFormContainer = document.getElementById('contact-form-container');
  let contactForm = document.createElement('form');
  contactForm.innerHTML = `
    <div class="row pb-3">
      <div class="col-md-6">
        <label for="fullNameControl" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="fullNameControl">
      </div>
      <div class="col-md-6">
        <label for="emailControl" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="emailControl">
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <Label for="messageControl" class="form-label">Message</Label>
        <textarea class="form-control" rows="6" id="messageControl"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="submit" class="btn custom-btn py-1 float-end" id="sendEmailButton">
          <small><i class="bi bi-send px-1"></i>send</small>
        </button>
      </div>
    </div>
  `;
  contactFormContainer.append(contactForm);
  contactForm.setAttribute('onsubmit', 'sendEmail()');
  contactForm.addEventListener('submit', sendEmail);
}

function sendEmail(event) {
  event.preventDefault();
  Email.send({
    SecureToken : "ef7cbd87-0d4c-4dba-8864-7cbe283f238d",
    To : "andrewmcc1120@gmail.com",
    From : "workbench@apguitars.com",
    Subject : "This is a test email",
    Body : "This test is being sent from the contact form. Please announce its delivery."
}).then(
  message => alert(message)
);
}

// SMTPJS and smtp.gmail server
