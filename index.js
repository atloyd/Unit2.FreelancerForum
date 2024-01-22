// Freelancer Array

// const list = [
//   { name: "Grant", price: 70, title: "Carpenter" },
//   { name: "John", price: 90, title: "Plumber" },
//   { name: "Will", price: 20, title: "Coach" },
//   { name: "Patrick", price: 110, title: "Electrician" },
//   { name: "Travis", price: 15, title: "Notary" },
//   { name: "Isiah", price: 35, title: "Copywriter" },
// ];

const randNames = ["Grant", "John", "Will", "Patrick", "Travis", "Isiah"];

const randPrice = [70, 90, 20, 110, 15, 35, 23, 49, 50, 66, 98];

const randTitle = [
  "Capenter",
  "Plumber",
  "Coach",
  "Electrician",
  "Notary",
  "Copywriter",
  "Programmer",
  "Data Analyst",
];

const freelancers = [
  {
    name: "Bob",
    title: "Teacher",
    price: 70,
  },

  {
    name: "Alice",
    title: "Writer",
    price: 30,
  },
];

const maxListings = 10;

// Freelancer Forum Title

const title = document.querySelector("h1");
title.textContent = "Feelancer Forum";
title.style.fontSize = "75px";

// Availale Freelancers

const h2 = document.querySelector("h2");
h2.textContent = "Available Freelancers";
h2.style.fontSize = "50px";

// Set interval

const addFreelancerIntervalID = setInterval(addFreelancer, 2000);

render();

function render() {
  // Render the freelancer listings

  const listings = document.querySelector("ul");
  const body = document.querySelector("body");
  body.style.textAlign = "center"
  listings.style.fontSize = "40px";
  const listedElements = freelancers.map((post) => {
    const element = document.createElement("li");
    element.style.listStyle = "none"
    element.append(post.name, post.title, post.price);
    return element;
  });
  listings.replaceChildren(...listedElements);

  let average = 0;
  freelancers.forEach((post) => {
    average += post.price / freelancers.length;
    roundedAverage = Math.floor(average);
  });
  const p = document.querySelector("p");
  p.textContent = `Average price is $${roundedAverage}.`;
  p.style.fontSize = "40px";
}

function addFreelancer() {
  const name = randNames[Math.floor(Math.random() * randNames.length)];
  const price = randPrice[Math.floor(Math.random() * randPrice.length)];
  const title = randTitle[Math.floor(Math.random() * randTitle.length)];
  freelancers.push({ name, title, price });

  render();

  if (freelancers.length >= maxListings) {
    clearInterval(addFreelancerIntervalID);
  }
}

console.log(freelancers);
