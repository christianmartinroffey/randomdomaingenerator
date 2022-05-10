
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let tld = [".com", ".net"];

//let randomDomainName = [];

window.onload = () => {
  document
    .getElementById("click_for_new_domain")
    .addEventListener("click", () => {
      document.getElementById("domain_name").innerHTML = generateRandomDomain();
    });
};

// const getRandomNumber = max => Math.floor(Math.random() * max);

// let generateRandomDomain = () => {
//   let randomDomain = `${pronoun[getRandomNumber * pronoun.length]}; ${
//     adj[getRandomNumber * adj.length]
//   }`;
//   return randomDomain;
// }

const generateRandomDomain = () => {
  let randomDomain = [];
  // randomDomain = randomDomain.toString;
  // randomDomain = randomDomain.split(" ");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < tld.length; l++) {
          randomDomain.push(pronoun[i] + adj[j] + noun[k] + tld[l]);
        }
      }
    }
  }
  return randomDomain;
};
