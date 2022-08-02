import { helper } from '@ember/component/helper';

function trailingZeros([amount, modifier]: [number, number]) {
  let zeros = '';
  for (let i = modifier ? amount * modifier : amount; i--; ) {
    zeros += '0';
  }
  return zeros;
}

export default helper(trailingZeros);
