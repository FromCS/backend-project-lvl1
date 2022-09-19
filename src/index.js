import readlineSync from 'readline-sync';
import { printEvenRules, getEvenQuestion, getEvenCorrectAnswer } from '../games/brain-even-code.js';
import { printCalcRules, getCalcQuestion, getCalcCorrectAnswer } from '../games/brain-calc-code.js';
import { printGcdRules, getGcdQuestion, getGcdCorrectAnswer } from '../games/brain-gcd-code.js';
import { printProgressionRules, createRandomProgression, getProgressionQuestion, getProgressionCorrectAnswer } from '../games/brain-progression-code.js';
import { printPrimeRules, getPrimeQuestion, getPrimeCorrectAnswer } from '../games/brain-prime-code.js'

const brainGames = (gameName) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi, ${userName}!`);
    
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
    }
    
    let isWinning = true;
    for (let i = 0; i < 3; i += 1) {
        let question;
        let correctAnswer;
        switch (gameName) {
            case 'brainEven':
                question = getEvenQuestion();
                correctAnswer = getEvenCorrectAnswer(question);
                console.log(`Question: ${question}`);
                break;
            
            case 'brainCalc':
                question = getCalcQuestion();
                correctAnswer = getCalcCorrectAnswer(question);
                console.log(`Question: ${question}`);
                break;

            case 'brainGcd':
                question = getGcdQuestion();
                correctAnswer = getGcdCorrectAnswer(question).toString();
                console.log(`Question: ${question}`);
                break;

            case 'brainProgression':
                const progression = createRandomProgression();
                question = getProgressionQuestion(progression);
                correctAnswer = String(getProgressionCorrectAnswer(progression, question));
                console.log(`Question: ${question}`);
                break;

            case 'brainPrime':
                question = getPrimeQuestion();
                correctAnswer = getPrimeCorrectAnswer(question);
                console.log(`Question: ${question}`);
                break;
        }

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
}

export {brainGames};