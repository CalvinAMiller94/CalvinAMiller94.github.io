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
        <input type="text" class="form-control" id="fullNameControl" name="fullName" required>
      </div>
      <div class="col-md-6">
        <label for="emailControl" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="emailControl" name="email" required>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <Label for="messageControl" class="form-label">Message</Label>
        <textarea class="form-control" rows="6" id="messageControl" name="message" required></textarea>
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
  let contactForm = document.querySelector('form');
  let fullName = contactForm.fullName.value;
  let emailAddress = contactForm.email.value;
  let message = contactForm.message.value;
  Email.send({
    SecureToken: "ef7cbd87-0d4c-4dba-8864-7cbe283f238d",
    To: "andrewmcc1120@gmail.com",
    From: "workbench@apguitars.com",
    Subject: "Contact Form Submission",
    Body: `Name: ${fullName} <br/> email address: ${emailAddress} <br/> ${message}`
  }).then(
    message => alert(adjustMessage(message)),
    contactForm.reset()
  );
}

function adjustMessage(message) {
  if (message === "OK") {
    // sendConfirmationEmail();
    return message = "Thank you for your email!";
  } else {
    return message;
  }
}

// function sendConfirmationEmail() {
//   let contactForm = document.querySelector('form');
//   let emailAddress = contactForm.email.value;
//   Email.send({
//     SecureToken : "ef7cbd87-0d4c-4dba-8864-7cbe283f238d",
//     To : `${emailAddress}`,
//     From : "workbench@apguitars.com",
//     Subject : "Contact Form Submission",
//     Body : "Thank you for reaching out! I'll be in contact with you as soon as possible. Don't hesitate to add more"
// });
// }

// SMTPJS and elasticEmail server
