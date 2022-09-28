import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const evenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateEvenRound = () => {
  const randomNumber = getRandomNumber(2, 100);
  const question = randomNumber;
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

const launchBrainEven = () => {
  runEngine(evenRules, generateEvenRound);
};

export default launchBrainEven;
