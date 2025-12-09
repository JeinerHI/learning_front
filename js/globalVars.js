const productContainer = document.getElementById("product-container");
const cardPopUp = document.querySelector(".product-detail-popup");
const cardPopUpOverlay = document.querySelector(".popup-overlay");
const filterButtons = document.querySelectorAll('.filters button[data-brand]');
const discountButton = document.getElementById("discounted");
const filtersContainer = document.querySelector('.filters');
const searchInput = document.getElementById('search');
const qCart = document.querySelector(".q-cart");
const cart = new Array();

// Mobile nav toggle
const mobileToggle = document.getElementById('mobile-toggle');
const headerEl = document.querySelector('.main-header');