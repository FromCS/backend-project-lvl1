import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const progRules = 'What number is missing in the progression?';

const progressionLength = 10;

const createProg = (num, increaseNum, progLength) => {
  const progression = [num];
  for (let i = 1; i < progLength; i += 1) {
    progression.push(progression[i - 1] + increaseNum);
  }
  return progression;
};

const generateProgRound = () => {
  const randomNum = getRandomNumber(2, 100);
  const randomIncreaseNum = getRandomNumber(2, 20);
  const progression = createProg(randomNum, randomIncreaseNum, progressionLength);
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
