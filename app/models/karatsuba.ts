export interface Figure {
  level: string;
  bce: [number, number][];
  stepB: [number, number];
  stepC: [number, number];
  stepE: [number, number] | null;
  stepsR: [number, number, number][];
  dividers: number[];
}
