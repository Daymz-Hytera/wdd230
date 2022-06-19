const requestURL = 'https://damianhunt.github.io/WDD230/lesson09/data.json';
const cards = document.querySelector('.cards');


fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject["business"];
    business.forEach(displayBusiness);
  });

function displayBusiness(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let h6 = document.createElement('h6');
    let h7 = document.createElement('h7');
    let logo = document.createElement('img');

    // Change the textContent property of the each h property
    h2.textContent = business;
    h3.textContent = contact;
    h4.textContent = phonenumber;
    h5.textContent = email;
    h6.textContent = website;
    h7.textContent = membership;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    logo.setAttribute('src', company.imageurl);
    logo.setAttribute('alt', `Logo of ${company.business}`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(logo)
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);
    card.appendChild(h7);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

