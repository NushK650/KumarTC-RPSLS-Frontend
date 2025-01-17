const rulesBtn = document.getElementById('rulesBtn');
const rulesPopup = document.getElementById('rulesPopup');

rulesBtn.addEventListener('click', function(){
  rulesPopup.classList.remove('hidden');
});

rulesBtn.addEventListener('blur',function(){
  rulesPopup.classList.add('hidden');
});