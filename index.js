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
title.style.textAlign = "center";
title.style.fontSize = "75px";

// Average price will go here

// Availale Freelancers

const h2 = document.querySelector("h2");
h2.textContent = "Available Freelancers";
h2.style.textAlign = "center";
h2.style.fontSize = "50px";

// Set interval

const addFreelancerIntervalID = setInterval(addFreelancer, 2000);

render();

function render() {
  // Render the freelancer listings

  const listings = document.querySelector("ul");
  const listedElements = freelancers.map((post) => {
    const element = document.createElement("li");
    element.textContent = (post.name, post.price, post.title);
    return element;
  });
  listings.replaceChildren(...listedElements);
}

function addFreelancer() {
  const newName = randNames[Math.floor(Math.random() * randNames.length)];
  const newPrice = randPrice[Math.floor(Math.random() * randPrice.length)];
  const newTitle = randTitle[Math.floor(Math.random() * randTitle.length)];
  freelancers.push({ newName, newPrice, newTitle });

  render();

  if (freelancers.length === maxListings) {
    clearInterval(addFreelancerIntervalID);
  }
}
