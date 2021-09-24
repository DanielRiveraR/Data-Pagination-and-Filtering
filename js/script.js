/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const numStudentsDisplay = 9;

function showPage(list, page) {
   const startIndex = (page * numStudentsDisplay) - numStudentsDisplay;
   const endIndex = page * numStudentsDisplay;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for ( let i = 0; i < list.lenght; i++) {
      const studentItem = `
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

      if (i >= startIndex && i < endIndex) {
         
         studentList.insertAdjacentHTML(beforeend, studentItem);
      }
   }
}
showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
