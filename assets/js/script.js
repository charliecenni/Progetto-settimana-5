

window.onscroll = function() {
  const header = document.getElementById("header");
  const button1 = document.getElementById("button1");
  const title = document.getElementById("title");
  if (window.scrollY > 400) {
    header.classList.add("scrolled");
    button1.classList.add("scrolledBtn");
    title.classList.add("scrolledTitle");
  } else {
    header.classList.remove("scrolled");
    button1.classList.remove("scrolledBtn");
    title.classList.remove("scrolledTitle");
  }
};

const overlay = document.querySelector('.overlay');
const openForm = document.querySelector('#openForm');
const closeForm= document.querySelector('.closeForm');

openForm.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'block';
    document.body.classList.add('modal-open');
});

closeForm.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'none';
    document.body.classList.remove('modal-open');
});

overlay.addEventListener('click', (e) => {
	if(e.target === overlay) {
		overlay.style.display = 'none';
        document.body.classList.remove('modal-open');
	}
});