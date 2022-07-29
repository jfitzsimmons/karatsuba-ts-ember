import { helper } from '@ember/component/helper';

function getClassColor([num1, num2]: [number, number]) {
  return num1 < 10 || num2 < 10 ? 'red' : 'gray';
}

export default helper(getClassColor);
