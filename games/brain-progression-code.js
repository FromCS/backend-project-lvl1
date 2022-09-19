const printProgressionRules = () => console.log('What number is missing in the progression?');

const createRandomProgression = () => {
    let progressionLength = 10;
    let firstNumber = Math.round(Math.random()*100);
    let progression = [firstNumber];
    let randomIncrease = Math.round(Math.random()*20) + 1;
    for (let i = 1; i < progressionLength; i += 1) {
        progression.push(progression[i-1] + randomIncrease);
    }

    return progression;
};

const getProgressionQuestion = (coll) => {
    const randomIndex = Math.floor(Math.random()*coll.length) - 1;
    const question = [];
    for (let i = 0; i < coll.length; i += 1) {
        if (i === randomIndex) {
            question.push('..');
        } else {
            question.push(coll[i]);
        }
    }

    return question.join(', ');
};

const getProgressionCorrectAnswer = (coll, task) => {
    let taskColl = task.split(', ');
    let indexHiddenNumber;
    for (let i = 0; i < task.length; i += 1) {
        if (taskColl[i] === '..') {
            indexHiddenNumber = i;
            break;
        }
    }
    
    const hiddenNumber = coll[indexHiddenNumber];
    return hiddenNumber;
};

export {printProgressionRules, createRandomProgression, getProgressionQuestion, getProgressionCorrectAnswer};