import readlineSync from 'readline-sync';
import { printEvenRules, getEvenQuestion, getEvenCorrectAnswer } from '../games/brain-even-code.js';
import { printCalcRules, getCalcQuestion, getCalcCorrectAnswer } from '../games/brain-calc-code.js';
import { printGcdRules, getGcdQuestion, getGcdCorrectAnswer } from '../games/brain-gcd-code.js';
import { printProgressionRules, createRandomProgression, getProgressionQuestion, getProgressionCorrectAnswer } from '../games/brain-progression-code.js';
import { printPrimeRules, getPrimeQuestion, getPrimeCorrectAnswer } from '../games/brain-prime-code.js'

const printRules = (gameName) => {
    switch (gameName) {
        case 'brainEven':
            printEvenRules();
            break;
        
        case 'brainCalc':
            printCalcRules();
            break;

        case 'brainGcd':
            printGcdRules();
            break;

        case 'brainProgression':
            printProgressionRules();
            break;

        case 'brainPrime':
            printPrimeRules();
            break;
    }
};

const getQuestion = (gameName) => {
    switch (gameName) {
        case 'brainEven':
            return getEvenQuestion();
            
        case 'brainCalc':
            return getCalcQuestion();
           
        case 'brainGcd':
            return getGcdQuestion();
            
        case 'brainProgression':
            const progression = createRandomProgression();
            return getProgressionQuestion(progression);
            
        case 'brainPrime':
            return getPrimeQuestion();            
    }
};

const getCorrectAnswer = (gameName, task) => {
    switch (gameName) {
        case 'brainEven':
            return getEvenCorrectAnswer(task);           
        
        case 'brainCalc':
            return getCalcCorrectAnswer(task);
            
        case 'brainGcd':
            return getGcdCorrectAnswer(task).toString();
            
        case 'brainProgression':
            return String(getProgressionCorrectAnswer(task));
            
        case 'brainPrime':
            return getPrimeCorrectAnswer(task);
    }
};

const brainGames = (gameName) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    
    printRules(gameName);
    
    let isWinning = true;
    for (let i = 0; i < 3; i += 1) {
        let question = getQuestion(gameName);
        let correctAnswer = getCorrectAnswer(gameName, question);
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (correctAnswer === userAnswer) {
            console.log('Correct!');
        } else {
            console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            console.log(`Let's try again, ${userName}!`);
            isWinning = false;
            break;
        }
    }
    if (isWinning) {
        console.log(`Congratulations, ${userName}!`);
    }    
};

export {brainGames, printRules, getQuestion, getCorrectAnswer};