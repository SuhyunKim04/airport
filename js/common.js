const button = document.querySelector('.openModal');
const dimm = document.querySelector('.dimm');
const view = document.querySelector('.view_detail');
button.addEventListener('click',(e)=>{
    view.classList.add('open');
    dimm.classList.add('open');
})