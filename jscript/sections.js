/*section burger*/
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


/*section menu*/
var menuAccoTrigger = document.querySelectorAll(".menu__accordion-trigger__text");
var menuAccoItem = document.querySelectorAll(".menu__accordion-item");

for (let i = 0; i < menuAccoTrigger.length; i++) {
	menuAccoTrigger[i].addEventListener("click", function(e) {
		e.preventDefault();

		menuAccoItem[i].classList.toggle("menu__accordion-item--active");

		for (var j = 0; j < menuAccoItem.length; j++) {
			if (j !== i) {
				menuAccoItem[j].classList.remove("menu__accordion-item--active");
			};
		};

		for (j = menuAccoItem.length - 1; j > 0; j--) {
			if (j !== i) {
				menuAccoItem[j].classList.remove("menu__accordion-item--active");
			};
		};
	});
};

