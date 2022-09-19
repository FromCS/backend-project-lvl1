const printEvenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getEvenQuestion = () => {
    const randomNumber = Math.round(Math.random() * 100) + 2;
    return randomNumber;
};

const getEvenCorrectAnswer = (task) => (task % 2 === 0) ? 'yes' : 'no';




export {printEvenRules, getEvenQuestion, getEvenCorrectAnswer};