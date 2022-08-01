import { helper } from '@ember/component/helper';

function result(stepsR: [number, number, number][]) {
  console.log('stepsR');
  console.log(stepsR);

  let _stepsR = Array.from(stepsR);
  console.log(_stepsR);
  //testjpf  need a better way to get this array than enclosing it into another
  //i should be using more objets than arrays
  // console.log(`${_stepsR![0]![2]} + ${_stepsR![0]![1]} + ${_stepsR![0]![0]}`);
  //console.log(_stepsR![0]![2] + _stepsR![0]![1] + _stepsR![0]![0]);
  return _stepsR![0]![2] - _stepsR![0]![1] - _stepsR![0]![0];
}

export default helper(result);
