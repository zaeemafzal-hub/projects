const tab2btn = document.querySelector('#tab2-btn');
const tab2content = document.querySelector('#tab2-content');
const tab3btn = document.querySelector('#tab3-btn');
const tab3content = document.querySelector('#tab3-content');
const tab4btn = document.querySelector('#tab4-btn');
const tab4content = document.querySelector('#tab4-content');
// Tab2 show
tab2btn.addEventListener('mouseenter', () => {
  tab2content.classList.remove('invisible');
});
tab2btn.addEventListener('mouseleave', () => {
  tab2content.classList.add('invisible');
});


// Tab3 show


tab3btn.addEventListener('mouseenter', () => {
  tab3content.classList.remove('invisible');
});
tab3btn.addEventListener('mouseleave', () => {
  tab3content.classList.add('invisible');
});

// Tab4 show

tab4btn.addEventListener('mouseenter', () => {
  tab4content.classList.remove('invisible');
});
tab4btn.addEventListener('mouseleave', () => {
  tab4content.classList.add('invisible');
});
