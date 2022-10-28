/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/** 
 * Help Credits:
 * Websites that helped me when I got stuck or could not understand what I was doing wrong:
 * https://stackoverflow.com/questions/66734872/i-cant-create-a-dynamic-navigation-menu-using-pure-javascript
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    const menu = document.querySelector("#navbar__list");
    console.log(menu);
    const sections = [...document.querySelectorAll("section")];
    console.log(sections);

    let nav_menu_container = '';

    for(let i = 0; i < sections.length; i++) {
        const text = document.createElement("nav");
        console.log(text);
        text.innerText = sections[i].dataset.nav("data-nav");
        console.log(text.innerText);
        menu.appendChild(text);
        const sectionID = sections[i].id;
        const sectionAtrribute = sections[i].dataset.nav;
        nav_menu_container += '<li> <a class="menu_item_link" href="#${sectionID}">${sectionAtrribute}</a></li>'
    }
    menu.innerHTML = nav_menu_container;
}
buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


