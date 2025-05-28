
let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

// created object
server['restart']();
server["starting up"]();

// for...of loop
let a = [1,2,3,4,5,6,7,8,22,4,56];
for(let i of a){
    console.log(i)
}

const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
}

console.log(`Total scores: ${sum}`); // 14

// To access the index of the array elements inside the loop, you can use the for...of statement with the entries() method of the array.
// The array.entries() method returns a pair of [index, element] in each iteration. For example:

let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

// for..in vs for..of

let scores = [10,20,30];
scores.message = 'Hi';

console.log("for...in:");
for (let score in scores) {//iterates on array index and aded function
  console.log(score); 
}

console.log('for...of:');
for (let score of scores) {//iterates on array only.
  console.log(score);
}

//template literation in js

let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};
let {title, excerpt, body, tags} = post;

let postHtml = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
    </ul>
</footer>`;
