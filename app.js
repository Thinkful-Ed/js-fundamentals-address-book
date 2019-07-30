// stores info about how to display the page
const state = {
  // select a category to filter by: 'first_name', 'last_name', 'state', etc
  filterBy: '',
  // include a search term for the filter by category: 'Tillie', 'Axworthy', 'IA', etc
  filterFor: '',
  // select a category to sort by (all sorts are alphabetical) 
  sortBy: 'last_name',
}

// stores a list of addresses
const addresses = [
  {"id":1,"first_name":"Tillie","last_name":"Axworthy","email":"taxworthy0@tinyurl.com","street_address":"32 Sauthoff Junction","city":"Des Moines","state":"IA","zip_code":"50981"},
  {"id":2,"first_name":"Devy","last_name":"Govinlock","email":"dgovinlock1@elegantthemes.com","street_address":"6 Muir Point","city":"Rochester","state":"NY","zip_code":"14639"},
  {"id":3,"first_name":"Adelice","last_name":"Tomini","email":"atomini2@cbc.ca","street_address":"683 Logan Parkway","city":"Lansing","state":"MI","zip_code":"48919"},
  {"id":4,"first_name":"Dorolice","last_name":"Ride","email":"dride3@ca.gov","street_address":"6 Ohio Park","city":"El Paso","state":"TX","zip_code":"79989"},
  {"id":5,"first_name":"Aurelea","last_name":"Scanes","email":"ascanes4@amazonaws.com","street_address":"0425 Express Parkway","city":"Fort Worth","state":"TX","zip_code":"76121"},
  {"id":6,"first_name":"Bidget","last_name":"Herries","email":"bherries5@wiley.com","street_address":"9 Park Meadow Circle","city":"Fayetteville","state":"NC","zip_code":"28314"},
  {"id":7,"first_name":"Dane","last_name":"Duxbarry","email":"dduxbarry6@ow.ly","street_address":"4597 Crest Line Road","city":"Washington","state":"DC","zip_code":"20041"},
  {"id":8,"first_name":"Stanfield","last_name":"Eisikowitch","email":"seisikowitch7@ehow.com","street_address":"8 Lakewood Gardens Place","city":"Boston","state":"MA","zip_code":"02216"},
  {"id":9,"first_name":"Angeli","last_name":"Braney","email":"abraney8@jigsy.com","street_address":"6428 Hallows Terrace","city":"Woburn","state":"MA","zip_code":"01813"},
  {"id":10,"first_name":"Jerrilee","last_name":"Wherry","email":"jwherry9@posterous.com","street_address":"4 Eagle Crest Road","city":"Jackson","state":"TN","zip_code":"38308"},
]

// filters the address list based on the settings we include in `state` above
// this changes the size of the list - we only display addresses that match the search criteria
function filterAddressList(filterBy, filterFor, list) {
  // if we don't include a setting for filterBy, include all addresses in the list
  if (filterBy === '') {
    return list;
  }
  return list.filter(address => {
    // if the filterBy category isn't real, don't display any addresses
    if (address[filterBy] === undefined) {
      return false;
    }
    // create a list of addresses that match our search criteria
    return address[filterBy].toLowerCase().includes(filterFor.toLowerCase())
  })
}

// sorts the list alphabetically by the category we include in `state` above
function sortAddressList(sortBy, list) {
  return list.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  })
}

// creates a string of HTML elements for the address list
function generateHTML(state, list) {
  // filter the address list
  const filteredList = filterAddressList(state.filterBy, state.filterFor, list);
  // sort the filtered list
  const sortedList = sortAddressList(state.sortBy, filteredList);

  // create HTML elements for each address and add them together into one string
  const htmlString = sortedList.map(address => {
    return `
      <li class="address">
        <h2 class="full-name">${address.first_name} ${address.last_name}</h2>
        <a class="email-address" href="mailto:${address.email}">${address.email}</a>
        <p class="street-address">${address.street_address}</p>
        <p class="city-state-zip">${address.city}, ${address.state} ${address.zip_code}</p>
      </li>
    `;
  }).join('');

  return htmlString;
}

// insert the HTML elements for each address into the `<ul>` element on the page
document.querySelector('.address-list').innerHTML = generateHTML(state, addresses);