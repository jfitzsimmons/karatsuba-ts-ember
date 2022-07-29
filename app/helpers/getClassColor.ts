//testjpf try this again -> import { isSingle } from './base';
import { helper } from '@ember/component/helper';

function getClassColor(nums: [number, number]) {
  return nums[0] < 10 || nums[1] < 10 ? 'red' : 'gray';
}

export default helper(getClassColor);
