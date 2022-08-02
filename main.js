const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu() {
	const isAsideOpenClosed = aside.classList.contains('inactive');

	if(!isAsideOpenClosed){
		aside.classList.toggle('inactive')
	}

	desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
	const isAsideOpenClosed = aside.classList.contains('inactive');
	
	if(!isAsideOpenClosed) {
		aside.classList.toggle('inactive')
	}

	mobileMenu.classList.toggle('inactive')
}

function toggleCartMenu() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
	const isDesktopMenuClosded = desktopMenu.classList.contains('inactive');

	if(!isMobileMenuClosed) {
		mobileMenu.classList.toggle('inactive')
	}

	if(!isDesktopMenuClosded){
		desktopMenu.classList.toggle('inactive')
	}

	aside.classList.toggle('inactive')
}
