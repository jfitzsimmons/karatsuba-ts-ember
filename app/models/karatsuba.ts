export interface Steps {
  b: [number, number];
  c: [number, number];
  e: [number, number] | null;
}
export interface Figure {
  level: string;
  steps: Steps;
  stepsR: [number, number, number];
  divider: number;
  stepSavings: [number, number];
  numsInput: [number, number];
}
