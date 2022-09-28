import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gcdRules = 'Find the greatest common divisor of given numbers.';

const generateGcdRound = () => {
  const questionNumbers = [getRandomNumber(2, 100), getRandomNumber(2, 100)];
  const question = `${questionNumbers[0]} ${questionNumbers[1]}`;
  let answer;
  for (let i = questionNumbers[0]; i >= 1; i -= 1) {
    if ((questionNumbers[0] % i === 0) && (questionNumbers[1] % i === 0)) {
      answer = i;
      break;
    }
  }
  return [question, String(answer)];
};

const launchBrainGcd = () => {
  runEngine(gcdRules, generateGcdRound);
};

export default launchBrainGcd;
