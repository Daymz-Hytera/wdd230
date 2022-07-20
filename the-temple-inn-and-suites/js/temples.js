const requestURL= "https://damianhunt.github.io/wdd230/the-temple-inn-and-suites/json/temples.json";
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temple = jsonObject['temples'];
    temple.forEach(displayTemples);
  });

  function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p1');
    let p2 = document.createElement('p2');
    let picture = document.createElement('img');
    let p3 = document.createElement('p3');
    let p4 = document.createElement('p4');
    let p5 = document.createElement('p5');
    let p6 = document.createElement('p6');
    let p7 = document.createElement('p7');  
  
    // Change the textContent property of the h2 element to contain the temple name
    h2.textContent = `${temple.name}`

    //Change the textContent property of the h3 element to contain the temple address
    h3.textContent = `${temple.address}`

    //Change the textContent property of the p1 element to contain the temple phone
    p1.textContent = `${temple.phone}`

    //Change the textContent property of the p2 element to contain the temple email
    p2.textContent = `${temple.email}`

    //Change the textContent property of the p3 element to contain the temple services
    p3.textContent = `Services: ${temple.services}`

    //Change the textContent property of the p4 element to contain the temple ordinance schedule
    p4.textContent = `Ordinance Schedule: ${temple.ordinance}`

    //Change the textContent property of the p5 element to contain the temple session information
    p5.textContent = `Sessions: ${temple.session}`

    //Change the textContent property of the p6 element to contain the temple history
    p6.textContent = `History: ${temple.history}`

    //Change the textContent property of the p7 element to contain the temple closure information
    p7.textContent = `Closures: ${temple.closures}`

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    picture.setAttribute('src', temple.imageurl);
    picture.setAttribute('alt', `Picture of ${temple.name}`);
  
    // Add/append the section(card) with the various elements 
    card.appendChild(picture);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.classList.add("sectiontemple")
    card.classList.add("imgtemple")
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
