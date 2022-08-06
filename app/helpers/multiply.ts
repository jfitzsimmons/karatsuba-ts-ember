import { helper } from '@ember/component/helper';

function multiply([num1, num2]: [number, number]) {
  return num1 * num2 > 3602879702092599
    ? 'Congrats! You broke this too!'
    : num1 * num2;
}

export default helper(multiply);
