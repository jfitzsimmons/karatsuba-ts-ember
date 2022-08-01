import { helper } from '@ember/component/helper';
import { trailingZeros } from './base';

function resultPrint([stepsR, divider]: [[number, number, number], number]) {
  const max = 3602879702092599;

  const result: number =
    stepsR[0] * 10 ** (divider * 2) +
    (stepsR[2] - stepsR[1] - stepsR[0]) * 10 ** divider +
    stepsR[1];
  if (result > 999999999889999900000) return null;
  let resultPrint = result.toString();

  if (result > max) {
    const resultPrint1st16 = resultPrint.substring(0, 14);
    const diff = resultPrint.length - 14; //max.length-1;
    const stepB = stepsR[0].toString() + trailingZeros(divider * 2);
    const stepC = stepsR[1].toString();
    const stepF =
      (stepsR[2] - stepsR[1] - stepsR[0]).toString() + trailingZeros(divider);
    const remainder1 = stepC.substring(stepC.length - diff, stepC.length);
    const remainder2 = stepF.substring(stepF.length - diff, stepF.length);
    const remainder3 = stepB.substring(stepB.length - diff, stepB.length);

    console.log(`resultPrint1st16: ${resultPrint1st16} | diff:  ${diff}`);
    console.log(`stepC: ${stepC} | stepF: ${stepF}`);
    console.log(`remainder1: ${remainder1} | remainder2: ${remainder2}`);

    const numberCarrier = (
      parseInt(remainder1) +
      parseInt(remainder2) +
      parseInt(remainder3)
    ).toString();

    console.log(`numberCarrier: ${numberCarrier}`);

    resultPrint =
      resultPrint1st16 +
      numberCarrier.substring(
        numberCarrier.length - diff,
        numberCarrier.length
      );
  }
  return resultPrint;
}

export default helper(resultPrint);
