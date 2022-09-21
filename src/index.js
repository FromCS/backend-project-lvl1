import readlineSync from 'readline-sync';
import { printEvenRules, getEvenQuestion, getEvenCorrectAnswer } from '../games/brain-even-code.js';
import { printCalcRules, getCalcQuestion, getCalcCorrectAnswer } from '../games/brain-calc-code.js';
import { printGcdRules, getGcdQuestion, getGcdCorrectAnswer } from '../games/brain-gcd-code.js';
import {
  printProgRules, createRandomProg, getProgQuestion, getProgCorrectAnswer,
} from '../games/brain-progression-code.js';
import { printPrimeRules, getPrimeQuestion, getPrimeCorrectAnswer } from '../games/brain-prime-code.js';

const printRules = (gameName) => {
  switch (gameName) {
    case 'brainEven':
      printEvenRules();
      break;

    case 'brainCalc':
      printCalcRules();
      break;

    case 'brainGcd':
      printGcdRules();
      break;

    case 'brainProgression':
      printProgRules();
      break;

    case 'brainPrime':
      printPrimeRules();
      break;

    default:
      console.log('Unknown command');
  }
};

const getQuestion = (gameName) => {
  let task;
  const progression = createRandomProg();
  switch (gameName) {
    case 'brainEven':
      task = getEvenQuestion();
      break;

    case 'brainCalc':
      task = getCalcQuestion();
      break;

    case 'brainGcd':
      task = getGcdQuestion();
      break;

    case 'brainProgression':
      task = getProgQuestion(progression);
      break;

    case 'brainPrime':
      task = getPrimeQuestion();
      break;

    default:
      console.log('Unknown command');
  }
  return task;
};

const getCorrectAnswer = (gameName, task) => {
  let answer;
  switch (gameName) {
    case 'brainEven':
      answer = getEvenCorrectAnswer(task);
      break;

    case 'brainCalc':
      answer = getCalcCorrectAnswer(task);
      break;

    case 'brainGcd':
      answer = getGcdCorrectAnswer(task);
      break;

    case 'brainProgression':
      answer = getProgCorrectAnswer(task);
      break;

    case 'brainPrime':
      answer = getPrimeCorrectAnswer(task);
      break;

    default:
      console.log('Unknow command');
  }
  return answer;
};

const brainGames = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  printRules(gameName);

  let isWinning = true;
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion(gameName);
    const correctAnswer = getCorrectAnswer(gameName, question);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      isWinning = false;
      break;
    }
  }
  if (isWinning) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export {
  brainGames, printRules, getQuestion, getCorrectAnswer,
};
