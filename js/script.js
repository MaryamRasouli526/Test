//Ändra innehåll

//1.

const firstH3 = document.querySelector('h3');
console.log(firstH3);

firstH3.innerText = "Potato";


//2.
const firstNavbarLink = document.querySelector('#header-navigation a');
console.log(firstNavbarLink);

firstNavbarLink.innerText =  "Start";

//3. 
const navbarLinks = document.querySelectorAll('#header-navigation a');
const lastNavbarLink = navbarLinks[navbarLinks.length - 1];

console.log(lastNavbarLink);

lastNavbarLink.innerText = "Mail Us";

//4.
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

firstParagraph.innerText = "Hejsan";

//5. 
const articleLinks = document.querySelectorAll('article a');
console.log(articleLinks);

for (const link of articleLinks) {
    link.href = "https://github.com/cleivas/JAVA24-JS/blob/main/02%20-%20DOM/shop-end/script.js";
}

//6.
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.innerText = "Add to Cart";
}


console.log(buttons);

//7.
const navbar = document.querySelector('nav'); 
console.log(navbar);

navbar.innerHTML = '<a href="https://github.com/cleivas/shop-demo">HOME</a>'; // Ersätter innehållet med en länk

//8.
const art2 = document.querySelector('.art-2');
console.log(art2);

art2.innerHTML = '<img src="https://placecage.lucidinternets.com/200/300" alt="Nicolas Cage">';

//Ändra attribut

//1.
const art