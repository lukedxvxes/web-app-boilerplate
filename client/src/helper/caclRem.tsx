import { metrics } from '../__styling/metrics';

/**
 * Converts pixels to rems,
 * `calcRem(10) -> '0.625rem'`,
 * `calcRem(10, 20) -> '0.625rem 1.25rem'`
 */
export interface CalcRem {
  /**
   * Converts pixels to rems,
   * `calcRem(10) -> '0.625rem'`,
   */
  (no1: number): string;
  /**
   * Converts pixels to rems,
   * `calcRem(10, 20) -> '0.625rem 1.25rem'`
   */
  (no1: number, no2: number): string;
  /**
   * Converts pixels to rems,
   * `calcRem(10, 0, 20) -> '0.625rem 0 1.25rem'`
   */
  (no1: number, no2: number, no3: number): string;
  /**
   * Converts pixels to rems,
   * `calcRem(10, 0, 0, 20) -> '0.625rem 0 0 1.25rem'`
   */
  (no1: number, no2: number, no3: number, no4: number): string;
}

export const calcRem: CalcRem = (...vals: number[]) =>
  vals
    .map((val) => (val !== 0 ? `${val / metrics.baseFontSize}rem` : '0'))
    .join(' ');
