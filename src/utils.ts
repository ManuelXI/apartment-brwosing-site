import { loyalty, permissions } from "./enum";
import { Review } from "./interfaces";

const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewContainer = document.querySelector(".reviews");
const container = document.querySelector(".container");
const reviewTotalDisplay = document.querySelector("#reviews");

const button = document.querySelector("button");

export function showDetails(
  authorityStatus: boolean | permissions,
  element: HTMLDivElement,
  price: number
) {
  if (authorityStatus) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

export function addReviews(array: any[]): void {
  let count = 0;
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      reviewContainer.appendChild(card);
    }
    container.removeChild(button);
  }
}

function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}

export function showReviewTotal(value: number, reviewer: string): void {
  const iconDisplay = loyalty.goldUser ? "⭐" : "";

  reviewTotalDisplay.innerHTML =
    value.toString() +
    " review" +
    makeMultiple(value) +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

export function makeMultiple(value: number): string {
  console.log(value);
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}
