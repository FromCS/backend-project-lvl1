import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatePrimeRound = () => {
  const question = getRandomNumber(2, 100);
  const divisors = [];
  for (let i = question; i >= 1; i -= 1) {
    if (question % i === 0) {
      divisors.push(i);
    }
  }
  const answer = (divisors.length === 2) ? 'yes' : 'no';
  return [question, answer];
};

const launchBrainPrime = () => {
  runEngine(primeRules, generatePrimeRound);
};

export default launchBrainPrime;
