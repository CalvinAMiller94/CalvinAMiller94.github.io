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
    <div class="row">
      <div class="col">
        <Label for="messageControl" class="form-label">Message</Label>
        <textarea class="form-control" rows="6" id="messageControl"></textarea>
      </div>
    </div>
  `;
  contactFormContainer.append(contactForm);
}

// Initial SendGrid API call below

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }

// sgMail
//   .send(msg)
//   .then((response) => {
//     console.log(response[0].statusCode)
//     console.log(response[0].headers)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// Other options are SMTPJS and smtp.gmail server
