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

    for(let i = 0; i < sections.length; i++) {
        const text = document.createElement("li");
        text.innerText = sections[i].dataset.nav;
        text.innerHTML = sections[i].dataset.nav;
        text.className = "menu__link"
        text.addEventListener('click', scrollTo(sections[i].id))
        {
            scrollTo(sections[i].id);
        };
        menu.appendChild(text);
    }
}

// Add class 'active' to section when near top of viewport
function makeActive()
{
    const sections = [...document.querySelectorAll("section")];
    for(const section of sections)
    {
        const box = section.getBoundingClientRect();
        if(box.top <= 150 && box.bottom >= 150)
        {
            section.className = "your-active-class";
        }
        else
        {
            section.className = "";
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollTo(sectionID)
{
    const section = document.getElementById(sectionID);
    console.log(section);
    section.scrollIntoView();
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", function() {
    makeActive();
  });

