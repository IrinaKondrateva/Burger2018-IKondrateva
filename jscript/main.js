// One Page Scroll and sending form

$(document).ready(function() {
	
	$('#fullpage').fullpage({
		scrollingSpeed: 800,
		menu: "#fixed_menu"
	});

	$(".order__container").append("<div class='order__overlay'></div>");
	var orderOverlay = $(".order__overlay").html( $("#serverMsgOlayTempl").html() ).css( "display", "none" );;
	orderOverlay.find(".overlay-container").addClass("overlay-container--order");
	orderOverlay.find(".overlay__content").addClass("overlay__content--order");
	orderOverlay.find(".overlay__text").addClass("overlay__text--order");

	orderOverlay.find(".button-msg").on("click", function() {
		orderOverlay.css( "display", "none" );
	});

	$("#order_form").on("submit", submitForm);
    
	function submitForm(event) {
        event.preventDefault();
        
        var form = $(event.target);
        
        ajaxForm(form).done(function(msg) {
	    	$(".overlay__text--order").text(msg.mes);
	    	orderOverlay.css( "display", "flex" );
        }).fail(function(jqXHR, textStatus) {
        	$(".overlay__text--order").text("Запрос не удался: " + textStatus);
	    	orderOverlay.css( "display", "flex" );
        });
	};

	var ajaxForm = function(form) {
		var data = form.serialize(),
    		url = form.attr("action"),
    		method = form.attr("method");

    	return $.ajax({
	        url: url,
	        type: method,
	        data: data,
	        dataType: 'JSON'   
        })
	};  
});

// hamgurger menu

const navMobileOpen = document.querySelector(".hamburger-menu");
const navMobile = document.querySelector(".nav-mobile");
const navMobileClose = document.querySelector(".nav-mobile__close");
const navMobileLink = document.querySelectorAll(".nav-mobile__link");

navMobileOpen.addEventListener("click", function(e) {
	e.preventDefault();
	navMobile.classList.add("nav-mobile_active");
});

navMobileClose.addEventListener("click", function(e) {
	e.preventDefault();
	navMobile.classList.remove("nav-mobile_active");
});

for(let i = 0; i < navMobileLink.length; i++) {
	navMobileLink[i].addEventListener("click", function(e) {
		navMobile.classList.remove("nav-mobile_active");
	});
};

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
	
	sliderList.style.transition = "right 0.5s ease";
	if (currentRight == minRight) {
		sliderList.style.transition = "right 0s ease 0.2s";
	};
	
	sliderList.style.right = currentRight + "%";
});

arrowLeft.addEventListener("click", function(e) {
	e.preventDefault();

	currentRight > minRight ? currentRight -= step : currentRight = maxRight;
	sliderList.style.transition = "right 0.5s ease";
	if (currentRight == maxRight) {
		sliderList.style.transition = "right 0s ease 0.2s";
	};

	sliderList.style.right = currentRight + "%"; 
});

var itemNumber;
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

const menuAccoClose = document.querySelector(".overlay__close");

var menuAcco = document.querySelector(".menu__accordion");
let menuAccoClone = menuAcco.cloneNode(true);

for (let i = 0; i < menuAccoTrigger.length; i++) {
	menuAccoClone.children[i].removeChild(menuAccoClone.children[i].children[1]);

	menuAccoTrigger[i].addEventListener("click", function(e) {
		e.preventDefault();

		for (var j = 0; j < menuAccoItem.length; j++) {
			if (j !== i) {
				menuAccoItem[j].classList.remove("menu__accordion-item--active");
				
				//menu for phones
				if ( parseFloat(getComputedStyle(document.body).width) < 480 ) {
					menuAccoItem[j].style.position = "absolute";
					menuAccoItem[j].style.zIndex = "-400";
				};

			};
		};

		this.closest(".menu__accordion-item").classList.toggle("menu__accordion-item--active");

		if ( parseFloat(getComputedStyle(document.body).width) < 480 ) {
			/*menuAccoItem[i].children[1].children[1].appendChild(menuAccoClose);*/
			menuAccoClose.addEventListener("click", function(e) {
				e.preventDefault();
				menuAccoItem[i].classList.remove("menu__accordion-item--active");
			});
		};
	});
};

menuAccoClone.classList.add("menu__accordion-clone");
menuAcco.appendChild(menuAccoClone);

// overlay opinions

var overlayTemplate = document.querySelector("#opinionOlayTemplate");
var opinionItem = document.querySelectorAll(".opinions__item");
const opinionTitle = document.querySelectorAll(".opinions__title");
const opinionText = document.querySelectorAll(".opinions__text");
const openOpinionOLay = document.querySelectorAll(".openOpinOverlay");

function createOpinOlay(title, text) {
	const opinionOverlay = newElement("div", "opnions__overlay");
	opinionOverlay.innerHTML = overlayTemplate.innerHTML;

	const opinOverlayClose = opinionOverlay.querySelector(".overlay__close");
	opinOverlayClose.addEventListener("click", function(e) {
		e.preventDefault();
		opinionOverlay.remove();
	});

	const opinOverlayTitle = opinionOverlay.querySelector(".overlay__title");
	opinOverlayTitle.classList.add("overlay__title--opinions");
	opinOverlayTitle.textContent = title;

	const opinOverlayText = opinionOverlay.querySelector(".overlay__text");
	opinOverlayText.classList.add("overlay__text--opinions");
	opinOverlayText.textContent = text + text;

	return opinionOverlay;
};

for (let i = 0; i < opinionItem.length; i++) {
	openOpinionOLay[i].addEventListener("click", function(e) {
		e.preventDefault();

		var sliderOverlay = createOpinOlay(opinionTitle[i].textContent, opinionText[i].textContent);
		opinionItem[i].appendChild(sliderOverlay);
	});
};

function newElement() {
	var element = document.createElement(arguments[0]);
	element.classList.add(arguments[1]);
	return element;
};



