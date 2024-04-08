// const articles = $('article');
// for (const article of articles) {
//  console.log(article);
// }

// Javascript
const articles = document.getElementsByTagName("article");
console.log(articles);
for (const article of articles) {
    article.innerHTML = "Hola mundo";
} 