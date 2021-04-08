
/**
 * Define Global Variables
 * 
*/
// get all section
// get element ul 
const section =document.querySelectorAll('section');
const ul =document.getElementById("navbar__list");

section.forEach(function (link){
  // loop for Each to all element in section
  // link it means one element section
  var data=link.getAttribute('data-nav');
  // get data from element section
  var id = link.getAttribute('id');
  // get id from element section
  var li =document.createElement('li');
  // creat li
  var a=document.createElement('a');
  // creat a element
  a.setAttribute('href',id);
  li.setAttribute('class',"menu__link");
  li.textContent=data;
  // console.log(li); test
  a.appendChild(li);
  // add element li in element a
  ul.appendChild(a);
  //add element a in ul 
  a.addEventListener('click',function(e){
    e.preventDefault();
    // stop event istener
    removActiv();
    // remove activ class
    link.scrollIntoView({behavior:'smooth'});
    //scorll in to view section have same attribute
    removAct();
    // function to remove class activ from all element li
    li.classList.add('activ-li');
    // event add class activ to element li
   });
});

//function to remov all active class
function removActiv(){
  for (element of section) {
    element.classList.remove('your-active-class');
  }
}

// get all element li 
const allLi =document.querySelectorAll('li');

//function always make when scroll in document
onscroll= function (){ 
  section.forEach(function (elem){
    allLi.forEach(function (li){
      // if hade element section btwen -50 , 100 add class active 
      // else remove class active 
      if (elem.getBoundingClientRect().top > -50 && elem.getBoundingClientRect().top <= 100){
        elem.getAttribute('data-nav');
        elem.classList.add('your-active-class');
        // add activ class to li element when scroll  
        if(elem.getAttribute('data-nav')==li.textContent){
          li.classList.add('activ-li');
        }else {
          li.classList.remove('activ-li');
        }
      } else {
        elem.classList.remove('your-active-class');
      }
    }); 
  });
}

// function to remove activ class from li
function removAct(){
  allLi.forEach(function(li){
    li.classList.remove('activ-li')
  });
}