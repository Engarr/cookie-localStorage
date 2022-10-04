const cookieBox = document.querySelector('.cookie__box');
const cookieBtn = document.querySelector('.cookie__btn');

const showCookie = () => {
	const newCookie = localStorage.getItem('cookie');
	if (newCookie) {
		cookieBox.classList.add('hide');
	}
};
const hanldeCookieBox = () => {
	localStorage.setItem('cookie', 'true');
	cookieBox.classList.add('hide');
};

cookieBtn.addEventListener('click', hanldeCookieBox);
showCookie();
