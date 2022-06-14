import { loyalty, permissions } from "./enum";
import { Review, Property } from "./interfaces";
import MainProperty from "./classes";
import {
  showReviewTotal,
  populateUser,
  addReviews,
  showDetails,
} from "./utils";

const propertyContainer = document.querySelector(".properties");

const button = document.querySelector("button");
const footer = document.querySelector(".footer");

let isLoggedIn: boolean;

const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: loyalty.goldUser,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: loyalty.bronzeUser,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: loyalty.silverUser,
    date: "27-03-2021",
  },
];

showReviewTotal(reviews.length, reviews[0].name);

const you = {
  firstName: "Manuel",
  lastName: "Brown",
  permissions: permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

const properties: Property[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 40,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+1123495082908, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 30,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1123495082908, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 25,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: [+1123495082908, "andyluger@aol.com"],
    isAvailable: true,
  },
  {
    image: "images/malia-hotel.jpg",
    title: "Malia Hotel",
    price: 35,
    location: {
      firstLine: "Room 4",
      city: "Malia",
      code: 45334,
      country: "Malaysia",
    },
    contact: [+60349822083, "lee34@gmail.com"],
    isAvailable: false,
  },
];

populateUser(you.isReturning, you.firstName);

isLoggedIn = false;

for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
  let authorityStatus = isLoggedIn ? isLoggedIn : you.permissions;
  showDetails(authorityStatus, card, properties[i].price);
}

let currentLocation: [string, string, number] = ["Accra", "11:40", 28];
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}° `;

button.addEventListener("click", () => addReviews(reviews));

let yourMainProperty = new MainProperty(
  [
    {
      name: "Olive",
      stars: 5,
      loyaltyUser: loyalty.goldUser,
      date: "12-04-2021",
    },
  ],
  "images/banner-property.jpg",
  "Main Prpoerty"
);

const mainImageContainer = document.querySelector(".main-image");
const image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
mainImageContainer.appendChild(image);
