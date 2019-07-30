const state = {
  filterBy: '',
  filterFor: '',
  sortBy: 'last_name',
}

const addresses = [
  {
    "id":1,
    "first_name":"Tillie",
    "last_name":"Axworthy",
    "email":"taxworthy0@tinyurl.com",
    "street_address":"32 Sauthoff Junction",
    "city":"Des Moines",
    "state":"IA",
    "zip_code":"50981"
  },
  {"id":2,"first_name":"Devy","last_name":"Govinlock","email":"dgovinlock1@elegantthemes.com","street_address":"6 Muir Point","city":"Rochester","state":"NY","zip_code":"14639"},
  {"id":3,"first_name":"Adelice","last_name":"Tomini","email":"atomini2@cbc.ca","street_address":"683 Logan Parkway","city":"Lansing","state":"MI","zip_code":"48919"},
  {"id":4,"first_name":"Dorolice","last_name":"Ride","email":"dride3@ca.gov","street_address":"6 Ohio Park","city":"El Paso","state":"TX","zip_code":"79989"},
  {"id":5,"first_name":"Aurelea","last_name":"Scanes","email":"ascanes4@amazonaws.com","street_address":"0425 Express Parkway","city":"Fort Worth","state":"TX","zip_code":"76121"},
  {"id":6,"first_name":"Bidget","last_name":"Herries","email":"bherries5@wiley.com","street_address":"9 Park Meadow Circle","city":"Fayetteville","state":"NC","zip_code":"28314"},
  {"id":7,"first_name":"Dane","last_name":"Duxbarry","email":"dduxbarry6@ow.ly","street_address":"4597 Crest Line Road","city":"Washington","state":"DC","zip_code":"20041"},
  {"id":8,"first_name":"Stanfield","last_name":"Eisikowitch","email":"seisikowitch7@ehow.com","street_address":"8 Lakewood Gardens Place","city":"Boston","state":"MA","zip_code":"02216"},
  {"id":9,"first_name":"Angeli","last_name":"Braney","email":"abraney8@jigsy.com","street_address":"6428 Hallows Terrace","city":"Woburn","state":"MA","zip_code":"01813"},
  {"id":10,"first_name":"Jerrilee","last_name":"Wherry","email":"jwherry9@posterous.com","street_address":"4 Eagle Crest Road","city":"Jackson","state":"TN","zip_code":"38308"},
  {"id":11,"first_name":"Craggy","last_name":"Conboy","email":"cconboya@tinyurl.com","street_address":"8327 Katie Circle","city":"Lees Summit","state":"MO","zip_code":"64082"},
  {"id":12,"first_name":"Baily","last_name":"Bourchier","email":"bbourchierb@trellian.com","street_address":"3 Melvin Drive","city":"Columbia","state":"SC","zip_code":"29203"},
  {"id":13,"first_name":"Stefanie","last_name":"Bannister","email":"sbannisterc@arizona.edu","street_address":"7 Arizona Court","city":"Lubbock","state":"TX","zip_code":"79405"},
  {"id":14,"first_name":"Philipa","last_name":"Genn","email":"pgennd@google.ca","street_address":"2722 Logan Alley","city":"Springfield","state":"IL","zip_code":"62764"},
  {"id":15,"first_name":"Sid","last_name":"Daniele","email":"sdanielee@joomla.org","street_address":"00557 Moose Circle","city":"Chicago","state":"IL","zip_code":"60686"},
  {"id":16,"first_name":"Beatrisa","last_name":"Billinge","email":"bbillingef@unicef.org","street_address":"009 Brown Plaza","city":"Charlotte","state":"NC","zip_code":"28247"},
  {"id":17,"first_name":"Yurik","last_name":"Coleridge","email":"ycoleridgeg@answers.com","street_address":"421 Independence Plaza","city":"Bronx","state":"NY","zip_code":"10459"},
  {"id":18,"first_name":"Brandyn","last_name":"Asals","email":"basalsh@bluehost.com","street_address":"604 Fremont Avenue","city":"Torrance","state":"CA","zip_code":"90505"},
  {"id":19,"first_name":"Whitney","last_name":"Soots","email":"wsootsi@google.pl","street_address":"14 Dwight Crossing","city":"Salt Lake City","state":"UT","zip_code":"84152"},
  {"id":20,"first_name":"Marian","last_name":"Gisbye","email":"mgisbyej@ted.com","street_address":"9815 Logan Trail","city":"Pasadena","state":"CA","zip_code":"91103"},
  {"id":21,"first_name":"Horatia","last_name":"Minerdo","email":"hminerdok@reddit.com","street_address":"4691 Lakeland Street","city":"Phoenix","state":"AZ","zip_code":"85040"},
  {"id":22,"first_name":"Jasmine","last_name":"Cocklie","email":"jcockliel@surveymonkey.com","street_address":"91750 Lawn Point","city":"Washington","state":"DC","zip_code":"20566"},
  {"id":23,"first_name":"Cecilla","last_name":"Blazek","email":"cblazekm@lulu.com","street_address":"09 Menomonie Street","city":"Jacksonville","state":"FL","zip_code":"32244"},
  {"id":24,"first_name":"Rodie","last_name":"Rapinett","email":"rrapinettn@xinhuanet.com","street_address":"4988 Bunting Road","city":"Washington","state":"DC","zip_code":"20220"},
  {"id":25,"first_name":"Henryetta","last_name":"Ceely","email":"hceelyo@furl.net","street_address":"32 Pierstorff Lane","city":"Memphis","state":"TN","zip_code":"38119"},
  {"id":26,"first_name":"Maurise","last_name":"Essex","email":"messexp@yolasite.com","street_address":"64256 Florence Court","city":"Midland","state":"MI","zip_code":"48670"},
  {"id":27,"first_name":"Ernesta","last_name":"Antosik","email":"eantosikq@tiny.cc","street_address":"196 Hooker Place","city":"Memphis","state":"TN","zip_code":"38168"},
  {"id":28,"first_name":"Raynell","last_name":"Paireman","email":"rpairemanr@nymag.com","street_address":"20 Calypso Circle","city":"Birmingham","state":"AL","zip_code":"35290"},
  {"id":29,"first_name":"Ichabod","last_name":"Plumb","email":"iplumbs@lycos.com","street_address":"889 Bartillon Center","city":"Shawnee Mission","state":"KS","zip_code":"66225"},
  {"id":30,"first_name":"Emeline","last_name":"Cordingly","email":"ecordinglyt@photobucket.com","street_address":"0749 Alpine Park","city":"Bethesda","state":"MD","zip_code":"20816"},
  {"id":31,"first_name":"Barny","last_name":"Iacovino","email":"biacovinou@dyndns.org","street_address":"5073 Ryan Avenue","city":"Charleston","state":"SC","zip_code":"29403"},
]

//filter list
function filterAddressList(filterBy, filterFor, list) {
  if (filterBy === '') {
    return list;
  }
  return list.filter(address => {
    if (address[filterBy] === undefined) {
      return false;
    }
    return address[filterBy].includes(filterFor)
  })
}

//sort list

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

//generate html
function generateHTML(state, list) {
  const filteredList = filterAddressList(state.filterBy, state.filterFor, list);
  const sortedList = sortAddressList(state.sortBy, filteredList);

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

//console.log(generateHTML(state, addresses));
//console.log(sortAddressList("no", addresses))
//console.log(filterAddressList("", "", addresses))

document.querySelector('.address-list').innerHTML = generateHTML(state, addresses);