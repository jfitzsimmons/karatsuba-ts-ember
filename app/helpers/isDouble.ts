import { helper } from '@ember/component/helper';

function isDouble([num1, num2]: [number, number]) {
  return num1 < 10 || num2 < 10 ? false : true;
}

export default helper(isDouble);
