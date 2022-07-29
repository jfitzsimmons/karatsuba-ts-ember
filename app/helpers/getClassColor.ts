//testjpf try this again -> import { isSingle } from './base';
//TESTJPF move from this array stuff to object
import { helper } from '@ember/component/helper';

function getClassColor(nums: [number, number]) {
  let _nums: any = Array.from(nums);
  return _nums![0]![0] < 10 || _nums![0]![1] < 10 ? 'red' : 'gray';
}

export default helper(getClassColor);
