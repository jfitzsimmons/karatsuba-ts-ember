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
    const b = stepsR[0].toString() + trailingZeros(divider * 2);
    const c = stepsR[1].toString();
    const stepF =
      (stepsR[2] - stepsR[1] - stepsR[0]).toString() + trailingZeros(divider);
    const remainder1 = c.substring(c.length - diff, c.length);
    const remainder2 = stepF.substring(stepF.length - diff, stepF.length);
    const remainder3 = b.substring(b.length - diff, b.length);

    const numberCarrier = (
      parseInt(remainder1) +
      parseInt(remainder2) +
      parseInt(remainder3)
    ).toString();

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
