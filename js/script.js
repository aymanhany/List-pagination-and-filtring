/*jshint esversion: 6 */

/******************************************
List Filter and Pagination
******************************************/

// Declaring global variables to access it at any scoop 

// geting list of elements
const list = document.querySelector('.student-list').children;

// maximum numbers for elements per page 
const studentsPerPage = 10;

// number of pages based on the total number of the students
const pages = list.length / studentsPerPage;

// main container witch will hold all of the content
const container = document.querySelector('.page');



// this function show only ten students per page 
const showPage = (list, page) => {
   // the starting point for every page
   const start = (page * studentsPerPage) - studentsPerPage;

   // the ending point for every page
   const end = page * studentsPerPage;

   // looping throw the elements to display only ten per page and hide the remainig elements
   for (let i = 0; i <= list.length; i++) {

      if (i >= start && i < end) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }

   }
};


// this function creates the pagination links and appending them to the dom
const appendPageLinks = (list) => {
   const dev = document.createElement('div');
   dev.className = 'pagination';
   const ul = document.createElement('ul');

   // making dynamic count for links based on the number of pages we will need and appending them to the ul
   for (let i = 0; i <= pages; i++) {

      const a = document.createElement('a');
      const li = document.createElement('li');
      a.textContent = i + 1;
      li.appendChild(a);
      ul.appendChild(li);

      if (i === 0) {
         a.className = 'active';
      }

      // triggring the showPage function we declared above while passing to paramaters it needs ( number of elements, page number )
      a.addEventListener('click', (e) => {
         e.preventDefault();

         // removing the "active" class for any element have it the adding it to the clicked element
         const current = document.getElementsByClassName('active');

         current[0].className = current[0].className.replace("active", "");
         e.target.className = 'active';
         showPage(list, e.target.textContent);
      });

   }


   dev.appendChild(ul);
   container.appendChild(dev);




};





appendPageLinks(list);
showPage(list, 1);

