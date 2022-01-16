import { metrics } from '../__styling/metrics';

/**
 * Converts pixels to Ems,
 * `calcEm(10) -> '0.625em'`,
 * `calcEm(10, 20) -> '0.625em 1.25em'`
 */
export interface CalcEm {
  /**
   * Converts pixels to ems,
   * `calcEm(10) -> '0.625em'`,
   */
  (no1: number): string;
  /**
   * Converts pixels to ems,
   * `calcEm(10, 20) -> '0.625em 1.25em'`
   */
  (no1: number, no2: number): string;
  /**
   * Converts pixels to ems,
   * `calcEm(10, 0, 20) -> '0.625em 0 1.25em'`
   */
  (no1: number, no2: number, no3: number): string;
  /**
   * Converts pixels to ems,
   * `calcEm(10, 0, 0, 20) -> '0.625em 0 0 1.25em'`
   */
  (no1: number, no2: number, no3: number, no4: number): string;
}

export const calcEm: CalcEm = (...vals: number[]) =>
  vals
    .map((val) => (val !== 0 ? `${val / metrics.baseFontSize}em` : '0'))
    .join(' ');
