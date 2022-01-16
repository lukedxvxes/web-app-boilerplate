export const metrics = {
  baseFontSize: 16, // TODO Remove and reference theme fontsize

  // TODO Clarify "The West" metrics
  globalPadding: 20,
  globalMargin: 20,

  lunchtalks: {
    baseFontSize: 16,
    textMargin: 32,
    mainContentWidth: 1250 as const,

    margins: {
      /** Extra Small: 4 */
      xs: 4,
      /** Small: 8 */
      sm: 8,
      /** Medium: 16 */
      md: 16,
      /** Large: 32 */
      lg: 32,
      /** Extra Large: 36 */
      xl: 36,
      /** Extra Extra Large: 40 */
      xxl: 40,
      /** Reset the value: useful for breakpoints */
      unset: 0,
      /** Mobile Small: 6 */
      mobSm: 6,
      /** Outer Margin: 15 */
      outerMargin: 15,
      gridGap: 12,
    },
  },
};

export interface ThemeMargins {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  unset: number;
  mobSm: number;
  outerMargin: number;
  gridGap: number;
}

export interface SiteMetrics {
  mainContentWidth: number;
}

export type ContainerWidth = '100%' | 1250;

export type Metrics = typeof metrics;
