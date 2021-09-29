/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/
let numStudentsDisplay = 9;

function showPage(list, page) {
   const startIndex = (page * numStudentsDisplay) - numStudentsDisplay;
   const endIndex = page * numStudentsDisplay;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for ( let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
               </div>
            </li>
         `;
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
}

/*
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let numOfPage = Math.ceil(list.length / numStudentsDisplay);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPage; i++) {
      let button = `
      <li>
         <button type="button">${i}</button>
      </li>
      `;
      linkList.insertAdjacentHTML('beforeend', button);
   }
   document.querySelector('.link-list li button').className = 'active';
   
   linkList.addEventListener('click', (e) => {
      if (e.target.type === 'button' ) {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      }
   });
   
}


showPage(data, 1);
addPagination(data);

/**
 * This create a search bar and accept input from users
 */

const searchBar = `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
`;
document.querySelector('.header').insertAdjacentHTML('beforeend', searchBar);


// Variables to store user's input
const search = document.querySelector('#search');
const submit = document.querySelector('.student-search button');
let match = [];



/** This function takes user's input and the array of names as parameters.
 *  
**/
function searchMatches (input, names) {
   match = [];
   for ( let i = 0; i < names.length; i++ ) {
      const studentName = names[i].name.first.toLowerCase() + ' ' + names[i].name.last.toLowerCase();
      if (studentName.includes(input.value.toLowerCase()) ) {
         match.push(names[i]);
      }
      
   }
   
}


// This event handlers improve users experience by filtering the search results either clicking or just typing.

submit.addEventListener('click', () => {
   searchMatches(search, data);
   showPage(match, 1);
   
   const header = document.querySelector('.header h2');
   
   if (match.length >= 1) {
      addPagination(match);
      header.innerText = 'STUDENTS'; 
   } else {
      const linkList = document.querySelector('.link-list');
      linkList.innerHTML = '';
      header.innerText = 'No results found.';
   }
});


search.addEventListener('keyup', () => {
   searchMatches(search, data);
   showPage(match, 1);
   
   const header = document.querySelector('.header h2');
   
   if (match.length >= 1) {
      addPagination(match);
      header.innerText = 'STUDENTS';
   } else {
      const linkList = document.querySelector('.link-list');
      linkList.innerHTML = '';
      header.innerText = 'No results found.';
   }
});
