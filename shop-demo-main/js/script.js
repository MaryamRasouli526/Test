const firstH2 = document.querySelector('h2');
console.log(firstH2)

const allH2 = document.querySelectorAll('h2')
console.log(allH2);
console.log(allH2[2]);

const firstArticle = document.querySelector('article');
console.log(firstArticle);

const firstArticleButton = firstArticle.querySelectorAll('button');
console.log(firstArticleButton)

const navBarLink = document.querySelector('#header-navigation a');
console.log(navBarLink)

//Ändra på innehållet
firstH2.innerText = "Ändra på innehållet!"

//innerHTML, string med html-element läggs till i domen och tar bort de element som fannas där från DOM:en
firstArticle.innerHTML = "<h1> ett h1-element</h1>"
//firstArticle.innerText = "<h1> ett h1-element</h1>"

const img = document.querySelector(' .art-2 img')
img.src = "/img/hoodie-ocean.png";

const links = document.querySelectorAll('a');
console.log(links)

//links.classList.add('pink');

for(const link of links){
    link.classList.add('pink');
}

const para = document.querySelectorAll('p');

for(const blueBackground of para  ){
    blueBackground.classList.add('blue');// Avänd classList helst
    //blueBackground.style.background = 'blue';
}


