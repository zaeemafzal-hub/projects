const count = document.querySelector('#textarea');
let update = document.querySelector('#count');
countchar = (e) => {
  let charCount = e.target.value.length;
  update.textContent = charCount;
  if (charCount >= 250) {
    e.target.classList.add('focus:outline-red-800');
  } else {
    e.target.classList.remove('focus:outline-red-800');
  }
};

count.addEventListener('input', countchar);
