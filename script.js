let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.getElementById('main-title').innerHTML = 'DOM CHRISTIAN HOMEPAGE';

  // Part 2
document.querySelector('body').style.backgroundColor = 'lightblue'

  // Part 3
let removeLi = document.getElementById('favorite-things');
removeLi.removeChild(removeLi.lastElementChild);

  // Part 4
// let something = document.getElementsByClassName("special-title")
// something.innerHTML = "abc"
const fontSizeChange = document.querySelectorAll('.special-title');
fontSizeChange.forEach((fontSizeChange) => {
  fontSizeChange.style.fontSize = '2rem';
});

  // Part 5
  let removePR = document.getElementById('past-races');

  if (removePR.hasChildNodes()) {
    removePR.removeChild(removePR.children[3]);
  }

  // Part 6
  let newList = document.createElement("li");
  newList.innerHTML = "New York City";
  document.getElementById('past-races').appendChild(newList);

  // Part 7
  let newDiv = document.createElement("div");
  newDiv.classList.add('blog-post');
  newDiv.classList.add('purple');

  let getBody = document.querySelector('body')
  getBody.children[2].append(newDiv);

  let newH2 = document.createElement('h1');
  newH2.innerHTML = "New York City";
  newDiv.appendChild(newH2);

  let newP = document.createElement('p');
  newP.innerHTML = 'I DRAG RACED ACROSS THE BROOKLYN BRIDGE'
  newDiv.appendChild(newP);

  // Part 8
 let qotClick = document.getElementById("quote-title");
 qotClick.addEventListener('click',randomQuote);

  // Part 9
  const blogPostAll = document.querySelectorAll('.blog-post');
  blogPostAll.forEach((blogPostAll) => {
    blogPostAll.addEventListener('mouseout', mouseOut)
    blogPostAll.addEventListener('mouseenter', mouseEnter)
    function mouseOut() {
      blogPostAll.classList.remove('red');
    }
    function mouseEnter() {
      blogPostAll.classList.toggle('red');
    }
  });
});