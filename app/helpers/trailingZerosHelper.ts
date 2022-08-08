import { helper } from '@ember/component/helper';
import { trailingZeros } from '../utils/base';

function trailingZerosHelper([amount, modifier]: [number, number]) {
  return trailingZeros(amount * modifier);
}

export default helper(trailingZerosHelper);
