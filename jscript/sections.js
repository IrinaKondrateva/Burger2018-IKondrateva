// hamgurger menu

var navMobileOpen = document.querySelector(".hamburger-menu");
var navMobile = document.querySelector(".nav-mobile");
var navMobileClose = document.querySelector(".nav-mobile__close");

navMobileOpen.addEventListener("click", function(e) {
	e.preventDefault();
	navMobile.classList.add("nav-mobile_active");
});

navMobileClose.addEventListener("click", function(e) {
	e.preventDefault();
	navMobile.classList.remove("nav-mobile_active");
});

// slider
const arrowLeft = document.querySelector(".slider__scroll_left");
const arrowRight = document.querySelector(".slider__scroll_right");
var sliderList = document.querySelector(".slider__list");
var sliderItemFirst = document.querySelector(".slider__item");
/*$(".slider__item").clone().appendTo(".slider__list");  не сработало)) */

for (let i = 0; i < 4; i++) {
	let sliderItemFirstClone = sliderItemFirst.cloneNode(true);
	sliderList.appendChild(sliderItemFirstClone);
};

var sliderItemsTitle = document.querySelectorAll(".section__title--slider");
var sliderItemsCost = document.querySelectorAll(".slider-span");
var sliderItemsPic = document.querySelectorAll(".slider__pic");

var itemNumber;
changeSliderItem(1, "url('images/content/Chiken_burger.png')", "Chicken burger", "120");
changeSliderItem(2, "url('images/content/burger_sandwich.png')", "Burger-sandwich", "910");
changeSliderItem(3, "url('images/content/Shrimp_Burger.png')", "Spicy Shrimp Burger", "427");
changeSliderItem(4, "url('images/content/Cheeseburger.png')", "Cheeseburger", "203");

var currentRight = 0;
var maxRight = 400;
var minRight = 0;
var step = 100;

arrowRight.addEventListener("click", function(e) {
	e.preventDefault();

	currentRight < maxRight ? currentRight += step : currentRight = minRight;
	
	sliderList.style.right = currentRight + "%"; 
});

arrowLeft.addEventListener("click", function(e) {
	e.preventDefault();

	currentRight > minRight ? currentRight -= step : currentRight = maxRight;
	
	sliderList.style.right = currentRight + "%"; 
});

function changeSliderItem(itemNumber, pic, title, cost) {
		sliderItemsPic[itemNumber].style.backgroundImage = pic;
		sliderItemsTitle[itemNumber].textContent = title;
		sliderItemsCost[itemNumber].textContent = cost;
};

// accordion team

var teamAccoTrigger = document.querySelectorAll(".team__accordion-trigger");
var teamAccoItem = document.querySelectorAll(".team__accordion-item");

for (let i = 0; i < teamAccoTrigger.length; i++) {
	teamAccoTrigger[i].addEventListener("click", function(e) {
		e.preventDefault();

		teamAccoItem[i].classList.toggle("team__accordion-item--active");

		for (var j = 0; j < teamAccoItem.length; j++) {
			if (j !== i) {
				teamAccoItem[j].classList.remove("team__accordion-item--active");
			};
		};
	});
};

// accordion menu

var menuAccoTrigger = document.querySelectorAll(".menu__accordion-trigger__text");
var menuAccoItem = document.querySelectorAll(".menu__accordion-item");

for (let i = 0; i < menuAccoTrigger.length; i++) {
	menuAccoTrigger[i].addEventListener("click", function(e) {
		e.preventDefault();

		for (var j = 0; j < menuAccoItem.length; j++) {
			if (j !== i) {
				menuAccoItem[j].classList.remove("menu__accordion-item--active");
			};
		};

		this.closest(".menu__accordion-item").classList.toggle("menu__accordion-item--active");
	});
};

// overlay opinions

var opinionItem = document.querySelectorAll(".opinions__item");
const opinionTitle = document.querySelectorAll(".opinions__title");
const opinionText = document.querySelectorAll(".opinions__text");
const openOpinionOLay = document.querySelectorAll(".openOpinOverlay");

function createOpinOlay(title, text) {
	const opinOverlay = newElement("div", "opnions__overlay");
	const opinOverlayContainer = newElement("div", "opnions__overlay-container");
	const opinOverlayClose = newElement("a", "opnions__overlay__close");
	opinOverlayClose.addEventListener("click", function(e) {
		e.preventDefault();
		opinOverlay.remove();
	});

	var opinOverlayCloseImg = newElement("img", "opnions__overlay__close-img");
	opinOverlayCloseImg.src = "images/content/closered.svg";

	const opinOverlayContent = newElement("div", "opnions__overlay__content");

	var opinOverlayTitle = newElement("div", "opinions__title");
	opinOverlayTitle.classList.add("opinions__title--overlay");
	opinOverlayTitle.textContent = title;

	var opinOverlayText = newElement("div", "opinions__text");
	opinOverlayText.classList.add("opinions__text--overlay");
	opinOverlayText.textContent = text + text;

	opinOverlay.appendChild(opinOverlayContainer);
	opinOverlayContainer.appendChild(opinOverlayClose);
	opinOverlayClose.appendChild(opinOverlayCloseImg);
	opinOverlayContainer.appendChild(opinOverlayContent);
	opinOverlayContent.appendChild(opinOverlayTitle);
	opinOverlayContent.appendChild(opinOverlayText);
	
	return opinOverlay;
};

for (let i = 0; i < opinionItem.length; i++) {
	openOpinionOLay[i].addEventListener("click", function(e) {
		e.preventDefault();
		var overlay = createOpinOlay(opinionTitle[i].textContent, opinionText[i].textContent);
		
		opinionItem[i].appendChild(overlay);


		for (let j = 0; j < opinionItem.length; j++) {
			if ( j !== i && opinionItem[j].lastElementChild.matches(".opnions__overlay") ) {
				opinionItem[j].lastElementChild.remove();
			};
		};
	});
};

function newElement() {
	var element = document.createElement(arguments[0]);
	element.classList.add(arguments[1]);
	return element;
};
