import {
  BreakpointKeys,
  breakpoints,
  Breakpoints,
} from '../__styling/breakpoints';
import { calcEm } from './caclEm';

export const breakpoint = (
  point: keyof Breakpoints,
  includeMediaDecleration = true,
) =>
  `${includeMediaDecleration ? '@media ' : ''}(min-width: ${calcEm(
    breakpoints[point],
  )})`;

export const breakpointMax = (
  point: keyof Breakpoints,
  includeMediaDecleration = true,
) =>
  `${includeMediaDecleration ? '@media ' : ''}(max-width: ${calcEm(
    breakpoints[point] - 1,
  )})`;

export const breakpointBetween = (
  startingPoint: keyof Breakpoints,
  endingPoint: keyof Breakpoints,
  includeMediaDecleration = true,
) =>
  `${includeMediaDecleration ? '@media ' : ''}(min-width: ${calcEm(
    breakpoints[startingPoint],
  )}) and (max-width: ${calcEm(breakpoints[endingPoint] - 1)})`;

export function getSmallestBreakpointValue(
  breakpointValues?: Partial<Record<BreakpointKeys | 'initial', any>> | string,
): string | undefined {
  if (!breakpointValues || typeof breakpointValues === 'string') {
    return breakpointValues;
  }

  const breakpointKeys: Array<BreakpointKeys | 'initial'> = [
    'initial',
    'xxs',
    'xs',
    'xl',
    'sm',
    'md',
    'lg',
    'xxl',
  ];

  const smallestBreakpoint = breakpointKeys.find(
    (size) => breakpointValues[size],
  );
  return smallestBreakpoint ? breakpointValues[smallestBreakpoint] : undefined;
}
