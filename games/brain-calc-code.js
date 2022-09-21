const printCalcRules = () => console.log('What is the result of the expression?');

const getCalcQuestion = () => {
  const operations = ['+', '-', '*'];
  const firstNumber = Math.round(Math.random() * 25);
  const secondNumber = Math.round(Math.random() * 25);
  const operation = operations[Math.round(Math.random() * (operations.length - 1))];
  const expression = `${firstNumber} ${operation} ${secondNumber}`;
  return expression;
};

const getCalcCorrectAnswer = (task) => {
  const correctAnswer = eval(task).toString();
  return correctAnswer;
};

export { printCalcRules, getCalcQuestion, getCalcCorrectAnswer };
