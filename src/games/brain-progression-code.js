import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const progRules = 'What number is missing in the progression?';

const createRandomProg = () => {
  const progressionLength = 10;
  const firstNumber = getRandomNumber(2, 100);
  const progression = [firstNumber];
  const randomIncreaseNumber = getRandomNumber(2, 20);
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + randomIncreaseNumber);
  }

  return progression;
};

const generateProgRound = () => {
  const progression = createRandomProg();
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const launchBrainProg = () => {
  runEngine(progRules, generateProgRound);
};

export default launchBrainProg;
