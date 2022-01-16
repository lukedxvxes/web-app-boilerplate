export interface Breakpoints {
  xxl: number;
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
  xxs: number;

  /**
   * Custom breakpoints for specific purposes.
   * Note: this should be avoided unless absolutely necessary.
   */

  windowshadeMd: number;
}

export const breakpoints: Breakpoints = {
  xxl: 1560,
  xl: 1440,
  lg: 1280,
  md: 1020,
  sm: 768,
  xs: 660,
  xxs: 480,

  /**
   * Custom breakpoints for specific purposes.
   * Note: this should be avoided unless absolutely necessary.
   */

  windowshadeMd: 970,
};

export type BreakpointKeys = keyof Breakpoints;

export const availableBreakpoints: BreakpointKeys[] = Object.keys(
  breakpoints,
) as any;
