const printCalcRules = () => console.log('What is the result of the expression?');

const getCalcQuestion = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = Math.round(Math.random() * 25);
  const secondNumber = Math.round(Math.random() * 25);
  const operation = operations[Math.round(Math.random() * (operations.length - 1))];
  const expression = `${firstNumber} ${operation} ${secondNumber}`;
  return expression;
};

const getExpressionResult = (firstNumber, operation, secondNumber) => {
  let result;
  if (operation === '+') {
    result = Number(firstNumber) + Number(secondNumber);
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else if (operation === '*') {
    result = firstNumber * secondNumber;
  }
  return result;
};

const getCalcCorrectAnswer = (task) => {
  const taskColl = task.split(' ');
  const [firstNumber, operation, secondNumber] = taskColl;
  console.log(operation);
  const correctAnswer = getExpressionResult(firstNumber, operation, secondNumber);
  return correctAnswer.toString();
};

export { printCalcRules, getCalcQuestion, getCalcCorrectAnswer };
