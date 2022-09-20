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
    const randomIndex = Math.floor(Math.random()*(coll.length - 1));
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

const getProgressionCorrectAnswer = (task) => {
    let taskColl = task.split(', ');
    let hiddenNumber;
    for (let i = 0; i < taskColl.length; i += 1) {
        if (taskColl[i] === '..') {
            if (i >= taskColl.length - 2) {
                const increaseNumber = Number(taskColl[i-1]) - Number(taskColl[i-2]);
                return hiddenNumber = Number(taskColl[i-1]) + increaseNumber;
            } else {
                const increaseNumber = Number(taskColl[i+2]) - Number(taskColl[i+1]);
                return hiddenNumber = taskColl[i+1] - increaseNumber;
            }
        }
    }
};

export {printProgressionRules, createRandomProgression, getProgressionQuestion, getProgressionCorrectAnswer};