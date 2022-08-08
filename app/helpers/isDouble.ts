import { helper } from '@ember/component/helper';
import { isSingle } from '../utils/base';

function isDouble([num1, num2]: [number, number]) {
  return !isSingle(num1, num2);
}

export default helper(isDouble);
