import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const divisors = [];
  for (let i = number; i >= 1; i -= 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length === 2;
};

const generatePrimeRound = () => {
  const question = getRandomNumber(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const launchBrainPrime = () => {
  runEngine(primeRules, generatePrimeRound);
};

export default launchBrainPrime;
