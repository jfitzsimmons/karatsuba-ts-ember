import { helper } from '@ember/component/helper';

function resultF(steps: [number, number, number]) {
  let _steps = Array.from(steps);

  return _steps![2]! - _steps![1]! - _steps![0]!;
}

export default helper(resultF);
