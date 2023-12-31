const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

let randomWord;

let score = 0;

let time = 10;

let difficulty = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

difficultySelect.value = difficulty

text.focus()

const timeInterval = setInterval(updateTime, 1000)

function getRandomWord(){
  return words[Math.floor(Math.random() * words.length)]
}

function addWordToDom(){
  randomWord = getRandomWord();
  word.innerHTML = randomWord
}

addWordToDom()

function  updateScore(){
  score++;
  scoreEl.innerHTML = score
}

function updateTime(){
  time--;
  timeEl.innerHTML = time + 's'

  if(time === 0){
    clearInterval(timeInterval)
    
    //endGame
    gameOver()
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}
text.addEventListener('input', (e) =>{
  const currentType = e.target.value;
  if(currentType === randomWord){
    addWordToDom()

    updateScore();

    e.target.value = ''
  }
})

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});
