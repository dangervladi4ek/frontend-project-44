import readlineSync from 'readline-sync';

export const name = '';

export const getName = () => {
  // eslint-disable-next-line no-const-assign
  name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};
