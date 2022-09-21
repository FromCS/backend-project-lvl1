const printPrimeRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getPrimeQuestion = () => {
  const randomNumber = Math.round(Math.random() * 100) + 1;
  return randomNumber;
};

const getPrimeCorrectAnswer = (task) => {
  const primeNumberDivisors = `${task}, 1`;
  const divisors = [];
  for (let i = task; i >= 1; i -= 1) {
    if (task % i === 0) {
      divisors.push(i);
    }
  }
  const isPrime = divisors.join(', ') === primeNumberDivisors ? 'yes' : 'no';
  return isPrime;
};

export { printPrimeRules, getPrimeQuestion, getPrimeCorrectAnswer };
