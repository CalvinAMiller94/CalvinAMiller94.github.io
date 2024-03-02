import data from './models/faq-list.object.json' assert { type: 'json' }

window.onload = (event) => {
  generateList(data);
}

function generateList(faqList) {
  let listContainer = document.getElementById('faq-accordion-container');
  faqList.forEach(faqItem => {
    let accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-item');
    accordionItem.innerHTML = `
    <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#collapse${faqItem.ID}" aria-expanded="false" aria-controls="collapse${faqItem.ID}">
      ${faqItem.Question}
    </button>
  </h2>
  <div id="collapse${faqItem.ID}" class="accordion-collapse collapse" data-bs-parent="#faq-accordion-container">
    <div class="accordion-body">
    ${faqItem.Answer}
    </div>
  </div>
    `;
    listContainer.append(accordionItem);
  });
}