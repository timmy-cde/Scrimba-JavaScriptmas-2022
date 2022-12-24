const player = document.getElementById("player")

function playSong(id) {
  
  const buttons = document.querySelectorAll('button')
  
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`
  
  buttons.forEach(b => b.classList.remove('activated'))
  event.target.classList.toggle('activated')
}

function showOrHidePlayer(){
  player.hidden = !player.hidden;
  event.target.innerHTML = player.hidden ? "Show Player" : "Hide Player"
}

// function openModal() {
//   const modal = document.querySelector('.modal');
//   modal.style.display = 'block';
//   document.body.classList.add('modal-open');
// }

// function closeModal() {
//   const modal = document.querySelector('.modal');
//   modal.style.display = 'none';
//   document.body.classList.remove('modal-open');
// }