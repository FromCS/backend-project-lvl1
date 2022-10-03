import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gcdRules = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (firstNum, secondNum) => {
  let greatestDivisor;
  for (let i = firstNum; i >= 1; i -= 1) {
    if ((firstNum % i === 0) && (secondNum % i === 0)) {
      greatestDivisor = i;
      break;
    }
  }
  return greatestDivisor;
};

const generateGcdRound = () => {
  const firstNum = getRandomNumber(2, 100);
  const secondNum = getRandomNumber(2, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = findGreatestDivisor(firstNum, secondNum);
  return [question, String(answer)];
};

const launchBrainGcd = () => {
  runEngine(gcdRules, generateGcdRound);
};

export default launchBrainGcd;
