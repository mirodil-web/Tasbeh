// alert("Assalomu alaykum. Sayitchamizga hush kelibsiz.  ")

const elBox = document.querySelector('.js-tbtn');
const elSelect = document.querySelector('.select');
const elText = document.querySelector('.text');
const elReset = document.querySelector('.btn');
const elNumber = document.querySelector('.number');

elSelect.addEventListener('change', function(){
    elText.textContent = elSelect.value 
    elBox.disabled = false
    elNumber.textContent = 0
})

elBox.addEventListener('click', function(){ 
    elNumber.textContent = +elNumber.textContent+1
})

elReset.addEventListener('click', function(){
    elSelect.value = 'Zikirlar'
    elBox.disabled = true
    elText.textContent = "Iltimos aytmoqchi bo'lgan zikringizni tanlang :( "
    elNumber.textContent = 0
})

const elModalBtn = document.querySelector('.js-modal')
const elModal = document.querySelector('.modal')
const elModalBtnExit = document.querySelector('.js-exit')
const elModalO = document.querySelector('.overlay')

elModalBtn.addEventListener('click', function(){
    elModal.classList.remove('hidden')
})

elModalBtn.addEventListener('click', function () {
    elModalO.classList.remove('hidden')
})

elModalBtnExit.addEventListener('click', function () {
    elModal.classList.add('hidden');
    elModalO.classList.add('hidden')
})

elModalO.addEventListener('click', function () {
    elModal.classList.add('hidden');
    elModalO.classList.add('hidden')
})
const elOver = document.querySelector('.js-overlay')

setTimeout(() => {
    elOver.classList.add('hidden')
}, 5000);
