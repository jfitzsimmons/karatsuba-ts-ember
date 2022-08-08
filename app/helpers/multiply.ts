import { helper } from '@ember/component/helper';

function multiply([num1, num2]: [number, number]) {
  return num1 * num2 > 9999999700000000 ? 'You broke this too!' : num1 * num2;
}

export default helper(multiply);
