import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const calcRules = 'What is the result of the expression?';

const getExpressionResult = (firstNumber, operation, secondNumber) => {
  switch (operation) {
    case '+':
      return Number(firstNumber) + Number(secondNumber);

    case '-':
      return Number(firstNumber) - Number(secondNumber);

    default:
      return Number(firstNumber) * Number(secondNumber);
  }
};

const generateCalcRound = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const operands = [getRandomNumber(2, 25), getRandomNumber(2, 25)];
  const expression = `${operands[0]} ${operation} ${operands[1]}`;
  const expressionResult = (getExpressionResult(operands[0], operation, operands[1]));
  const answer = String(expressionResult);
  return [expression, answer];
};

const launchBrainCalc = () => {
  runEngine(calcRules, generateCalcRound);
};

export default launchBrainCalc;
