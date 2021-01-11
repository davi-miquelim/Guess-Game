'use strict';
/*
document.querySelector('.message').textContent = 'Voce acertou';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 55;

document.querySelector(`.guess`).value = 55;
console.log(document.querySelector(`.guess`).value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let initialscore = document
  .querySelector('.check')
  .addEventListener(`click`, function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector(
        `.message`
      ).textContent = `Por favor insira um numero valido`;
    } else if (guess === secretNumber) {
      document.querySelector(`.message`).textContent = `Voce venceu!!!!!!`;
      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.highscore`).textContent = score;
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(`.message`).textContent = `Alto de mais`;
        score--;
        document.querySelector(`.score`).textContent = score;
      } else {
        document.querySelector(`.message`).textContent = `Voce perdeu`;
        document.querySelector(`.score`).textContent = 0;
        document.querySelector(`body`).style.backgroundColor = `#ff4c4c`;
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(`.message`).textContent = `Baixo de mais`;
        score--;
        document.querySelector(`.score`).textContent = score;
      } else {
        document.querySelector(`.message`).textContent = `Voce perdeu`;
        document.querySelector(`.score`).textContent = 0;
      }
    }
  });
document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.score`).textContent = score = 5;
  document.querySelector(`.message`).textContent = `Pode iniciar os chutes...`;
  document.querySelector(`body`).style.backgroundColor = `#333`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
