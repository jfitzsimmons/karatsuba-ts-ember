import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { Figure } from '../models/karatsuba';
import { isSingle } from '../helpers/base';

/** testjpf
 *
 * todos
 *
 * removve stimulus
\ * plus whatever else need onload
 * add testing back
 * more abstractin is needed / templates / css
 * commas for large nums
 */

const bce: [number, number][] = [];
const singles: [number, number][] = [];
const steps: [number, number, number][] = [];
const dividers: number[] = [];
const stepMax = 3602879702092599;
let standardSteps = 0;
export default class WelcomePageComponent extends Component {
  @tracked figures: Figure[] = [];
  @tracked num01: number = 2531;
  @tracked num02: number = 1467;

  Figure(level: string) {
    const stepE = bce[2] ? bce[2]! : singles[2]!;
    if (stepE && stepE[0] * stepE[1] > stepMax) return null;
    const stepB = bce[0] ? bce[0]! : singles[0]!;
    const stepC = bce[1] ? bce[1]! : singles[1]!;
    const stepsR = steps.reverse();

    //TESTJPF
    //come up with a better model?  Arrays not cool with ember.
    //controllers seem like the way:
    //https://guides.emberjs.com/v3.14.0/controllers/
    console.log(`top level LEVVEL : ${level}`);
    const figure: Figure = {
      level,
      bce,
      stepB,
      stepC,
      stepE,
      stepsR,
      dividers,
    };

    this.figures.pushObject(figure);
  }

  createFigure(level: string, nums: [number, number]) {
    const levelNumber: number = parseInt(level.slice(-1));

    if (this.figures.length > levelNumber) {
      console.log(
        `levelNumber: ${levelNumber}, this.figures.length - levelNumber: ${
          this.figures.length - levelNumber
        }`
      );
      this.figures.removeAt(levelNumber, this.figures.length - levelNumber);
    }
    const _nums = nums ? nums : [this.num01, this.num02];

    this.Figure(level);
    console.log('this.figures');
    console.log(this.figures);
  }

  @action calculate(
    e: MouseEvent | null,
    nums: [number, number] | null,
    level: string,
    button: HTMLElement | null
  ) {
    if (e) e.preventDefault;
    console.log('button!!!');
    console.log(button);
    (bce.length = 0),
      (steps.length = 0),
      (singles.length = 0),
      (dividers.length = 0);
    //testjpf move logic /abstract it
    if (!nums) {
      document.getElementById('rowExample')!.classList.add('inactive');
      document.getElementById('calculator')!.classList.add('active');
      document.getElementById('steps')!.classList.remove('inactive');
    }
    console.log(nums);
    const _nums: [number, number] = nums ? nums : [this.num01, this.num02];

    this.karatsuba(_nums);
    // make return result so you can use for testing??
    //TEST JPF changed to _nums and is untested!!!
    let test: number = parseInt(level) + 1;
    console.log(`level: ${level} | level + 1: ${level + 1} | test: ${test}`);
    this.createFigure(level ? 'l' + test : 'l0', _nums);

    /** 
    console.log('bce');
    console.dir(bce);
    console.log('steps');
    console.dir(steps);
    console.log('singles');
    console.dir(singles);
    console.log('dividers');
    console.dir(dividers);
    */
  }

  splitter = (whole: string, divider: number) => {
    const half1: number = parseInt(whole.substring(0, whole.length - divider));
    const half2: number = parseInt(whole.substring(whole.length - divider));
    const arr: [number, number] = [half1, half2];
    dividers.push(divider);

    return arr;
  };

  karatsuba(nums: [number, number]) {
    if (isSingle(nums[0], nums[1])) {
      //Testjpf still necessary?
      singles.push([nums[0], nums[1]]);
      return nums[0] * nums[1];
    }

    const short = Math.min(
      nums[0].toString().length,
      nums[1].toString().length
    );
    const mid = Math.floor(short / 2);
    const [n1h1, n1h2]: [n1h1: number, n1h2: number] = this.splitter(
      nums[0].toString(),
      mid
    );
    const [n2h1, n2h2] = this.splitter(nums[1].toString(), mid);

    bce.push([n1h1, n2h1], [n1h2, n2h2], [n1h2 + n1h1, n2h2 + n2h1]);

    const stepB: number = this.karatsuba([n1h1, n2h1]);
    const stepC: number = this.karatsuba([n1h2, n2h2]);
    const stepE: number = this.karatsuba([n1h2 + n1h1, n2h2 + n2h1]);

    steps.push([stepB, stepC, stepE]);

    return (
      stepB * 10 ** (2 * mid) + (stepE - stepB - stepC) * 10 ** mid + stepC
    );
  }
}
