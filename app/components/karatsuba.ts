import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { Figure } from '../models/karatsuba';
import { isSingle } from '../helpers/base';

export default class K extends Component {
  static bce: [number, number][] = [];
  static singles: [number, number][] = [];
  static stepMax = 3602879702092599;

  @tracked num01: number = 2531;
  @tracked num02: number = 1467;
  @tracked figures: Figure[] = [
    {
      level: 'l0',
      steps: {
        b: [25, 14],
        c: [31, 67],
        e: [56, 81],
      },
      divider: 2,
      stepSavings: [9, 16],
      numsInput: [2531, 1467],
    },
  ];

  @action calculate(
    e: MouseEvent | null,
    nums: [number, number] | null,
    level: string,
    button: string | null
  ) {
    const _nums: [number, number] = nums ? nums : [this.num01, this.num02];

    (K.bce.length = 0), (K.singles.length = 0);

    if (e) e.preventDefault;

    if (level === '0' || !level) {
      document.getElementById('rowExample')!.classList.add('inactive');
      document.getElementById('calculator')!.classList.add('active');
      document.getElementById('steps')!.classList.remove('inactive');
    }

    if (button) this.setActiveButtons(level, button);

    this.karatsuba(_nums);

    const newLevel: string = level ? `l${parseInt(level.slice(-1)) + 1}` : 'l0';

    this.createFigure(newLevel, _nums);
  }

  createFigure(level: string, nums: [number, number]) {
    const levelNumber: number = parseInt(level.slice(-1));
    const e: [number, number] | null = K.bce[2]! ? K.bce[2]! : K.singles[2]!;
    const b: [number, number] = K.bce[0]! ? K.bce[0]! : K.singles[0]!;
    const c: [number, number] = K.bce[1]! ? K.bce[1]! : K.singles[1]!;
    const standardSteps = nums[0].toString().length * nums[1].toString().length;

    const figure: Figure = {
      level,
      steps: {
        b,
        c,
        e,
      },
      divider: this.createDivider(nums),
      stepSavings: [K.singles.length, standardSteps],
      numsInput: nums,
    };

    if (this.figures.length > levelNumber)
      this.figures.removeAt(levelNumber, this.figures.length - levelNumber);

    this.figures.pushObject(figure);
  }

  setActiveButtons(level: string, button: string) {
    const _button = document.getElementById(button);
    const row = document.getElementsByClassName(
      `steps__rowl${level.slice(-1)}`
    );
    const actives = row[0]!.querySelectorAll('.active');
    actives.forEach((a) => {
      a.classList.remove('active');
    });
    _button!.classList.add('active');
    _button!.parentElement!.classList.add('active');
  }

  splitter = (whole: string, divider: number) => {
    const half1: number = parseInt(whole.substring(0, whole.length - divider));
    const half2: number = parseInt(whole.substring(whole.length - divider));
    const arr: [number, number] = [half1, half2];

    return arr;
  };

  createDivider = (nums: [number, number]) => {
    const short = Math.min(
      nums[0].toString().length,
      nums[1].toString().length
    );
    return Math.floor(short / 2);
  };

  karatsuba(nums: [number, number]) {
    if (isSingle(nums[0], nums[1])) {
      K.singles.push([nums[0], nums[1]]);
      return nums[0] * nums[1];
    }
    const divider = this.createDivider(nums);
    const [n1h1, n1h2]: [n1h1: number, n1h2: number] = this.splitter(
      nums[0].toString(),
      divider
    );
    const [n2h1, n2h2] = this.splitter(nums[1].toString(), divider);

    K.bce.push([n1h1, n2h1], [n1h2, n2h2], [n1h2 + n1h1, n2h2 + n2h1]);

    const stepsb: number = this.karatsuba([n1h1, n2h1]);
    const stepsc: number = this.karatsuba([n1h2, n2h2]);
    const stepse: number = this.karatsuba([n1h2 + n1h1, n2h2 + n2h1]);

    return (
      stepsb * 10 ** (2 * divider) +
      (stepse - stepsb - stepsc) * 10 ** divider +
      stepsc
    );
  }
}
