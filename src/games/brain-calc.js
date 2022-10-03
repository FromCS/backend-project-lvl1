import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const calcRules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const getExpressionResult = (firstNumber, operation, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;

    default:
      throw new Error(`Operation ${operation} - doesn't supported`);
  }
};

const generateCalcRound = () => {
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const firstNum = getRandomNumber(2, 25);
  const secondNum = getRandomNumber(2, 25);
  const question = `${firstNum} ${operation} ${secondNum}`;
  const expressionResult = (getExpressionResult(firstNum, operation, secondNum));
  const answer = String(expressionResult);
  return [question, answer];
};

const launchBrainCalc = () => {
  runEngine(calcRules, generateCalcRound);
};

export default launchBrainCalc;
