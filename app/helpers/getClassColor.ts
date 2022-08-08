import { helper } from '@ember/component/helper';
import { isSingle } from '../utils/base';

function getClassColor([num1, num2]: [number, number]) {
  return isSingle(num1, num2) ? 'red' : 'gray';
}

export default helper(getClassColor);
