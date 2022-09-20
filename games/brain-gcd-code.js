const printGcdRules = () => console.log('Find the greatest common divisor of given numbers.');

const getGcdQuestion = () => {
    const firstNumber = (Math.round(Math.random()*100) + 1);
    const secondNumber = (Math.round(Math.random()*100) + 1);
    const question = `${firstNumber} ${secondNumber}`;
    return question;
};

const getGcdCorrectAnswer = (task) => {
    const numbers = task.split(' ');
    const [firstNumber, secondNumber] = numbers;
    let firstNumberDivisors = [];
    for (let i = Number(firstNumber); i >= 1; i -= 1) {
        if (firstNumber % i === 0) {
            firstNumberDivisors.push(i);
        }
    }
    
    for (let j = Number(secondNumber); j >= 1; j -= 1) {
        if ((Number(secondNumber) % j === 0) && firstNumberDivisors.includes(j)) {
            return String(j);
        }
    }
};

export {printGcdRules, getGcdQuestion, getGcdCorrectAnswer};