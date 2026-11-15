const baby = document.getElementById('baby');
const blanket = document.getElementById('blanket');
const sceneCaption = document.getElementById('sceneCaption');
const moodIcon = document.getElementById('moodIcon');
const moodText = document.getElementById('moodText');
const foodMeter = document.getElementById('foodMeter');
const sleepMeter = document.getElementById('sleepMeter');
const foodValue = document.getElementById('foodValue');
const sleepValue = document.getElementById('sleepValue');
const actionArt = document.getElementById('actionArt');
const actionTitle = document.getElementById('actionTitle');
const actionDescription = document.getElementById('actionDescription');
const doAction = document.getElementById('doAction');
const toast = document.getElementById('toast');

let food = 58;
let energy = 72;
let currentAction = 'feed';
let isSleeping = false;
let toastTimer;

const actions = {
  feed: {art:'🍼', title:'Một bình sữa ấm nhé?', description:'Chạm vào nút bên dưới để Mimi uống sữa.', button:'Cho bé uống sữa'},
  nap: {art:'🌙', title:'Đến giờ nghỉ ngơi rồi', description:'Đắp chăn, làm căn phòng yên tĩnh và ru Mimi ngủ.', button:'Ru bé ngủ'},
  play: {art:'🧸', title:'Mình chơi một chút nhé?', description:'Lắc xúc xắc và làm Mimi bật cười nhé.', button:'Chơi cùng Mimi'}
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
function updateMeters() {
  foodMeter.style.width = `${food}%`;
  sleepMeter.style.width = `${energy}%`;
  foodValue.textContent = `${food}%`;
  sleepValue.textContent = `${energy}%`;
}
function setMood(icon, label, caption) {
  moodIcon.textContent = icon;
  moodText.textContent = label;
  sceneCaption.textContent = caption;
}
function chooseAction(action) {
  currentAction = action;
  document.querySelectorAll('.activity').forEach(button => {
    button.classList.toggle('active', button.dataset.action === action);
  });
  const item = actions[action];
  actionArt.textContent = item.art;
  actionTitle.textContent = item.title;
  actionDescription.textContent = item.description;
  doAction.innerHTML = `${item.button} <span>♡</span>`;
}
document.querySelectorAll('.activity').forEach(button => {
  button.addEventListener('click', () => chooseAction(button.dataset.action));
});

doAction.addEventListener('click', () => {
  baby.classList.remove('happy');
  if (currentAction === 'feed') {
    if (food >= 95) {
      showToast('Bụng Mimi đã no căng rồi. Cùng nghỉ một chút nhé!');
      return;
    }
    food = Math.min(100, food + 28);
    energy = Math.max(0, energy - 4);
    isSleeping = false;
    baby.classList.remove('sleeping');
    blanket.classList.remove('show');
    setMood('🥰', 'No bụng', 'Mimi uống sữa ngon lành và mỉm cười ♡');
    showToast('Mimi đã uống hết bình sữa. Ngoan quá!');
  } else if (currentAction === 'nap') {
    if (energy >= 96) {
      showToast('Mimi đã rất tỉnh táo rồi. Chơi một chút nhé!');
      return;
    }
    energy = Math.min(100, energy + 38);
    isSleeping = true;
    baby.classList.add('sleeping');
    blanket.classList.add('show');
    setMood('😴', 'Đang ngủ ngon', 'Suỵt... Mimi đang có một giấc mơ đẹp.');
    showToast('Chúc Mimi ngủ ngon nhé ☁️');
  } else {
    food = Math.max(0, food - 5);
    energy = Math.max(0, energy - 8);
    isSleeping = false;
    baby.classList.remove('sleeping');
    blanket.classList.remove('show');
    baby.classList.add('happy');
    setMood('😆', 'Cực kỳ vui', 'Mimi cười khúc khích khi chơi cùng bạn!');
    showToast('Mimi thích trò chơi này lắm!');
    setTimeout(() => baby.classList.remove('happy'), 1000);
  }
  updateMeters();
});

// Trạng thái thay đổi rất nhẹ theo thời gian, không có game over hay phạt người chơi.
setInterval(() => {
  if (!isSleeping && energy > 12) energy = Math.max(12, energy - 1);
  if (food > 12) food = Math.max(12, food - 1);
  updateMeters();
}, 45000);

updateMeters();
chooseAction('feed');
