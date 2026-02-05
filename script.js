"use strict";
const tabsBtns = document.querySelectorAll(".tabs__nav button");

const tabsItems = document.querySelectorAll(".tabs__item");

// This Function hides tabs and removes active for button
function hideTabs() {
  tabsItems.forEach((item) => item.classList.add("hide"));
  tabsBtns.forEach((item) => item.classList.remove("active"));
}

// This Fuction shows index number of tabs and do button is active
function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

tabsBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  }),
);

// Anchors
const anchors = document.querySelectorAll(".header__nav a");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const id = anchor.getAttribute("href");
    const element = document.querySelector(id);
    window.scroll({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  });
});
