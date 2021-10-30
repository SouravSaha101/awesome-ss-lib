// @flow
import { keyframes } from '@emotion/core'
import { mapPadding } from '../utils/stylesUtils'
import {
  CHARLIE_STD,
  CHARLIE_STD_BOLD,
  SOURCE_SANS_PRO,
  ARIAL,
  BASE_FONT_SIZE,
} from '../constants/fonts'

// import CharlieStdEOT from '../fonts/CharlieStd/CharlieStd-SemiBold.eot'
// import CharlieStdWOFF from '../fonts/CharlieStd/CharlieStd-SemiBold.woff'
// import CharlieStdWOFF2 from '../fonts/CharlieStd/CharlieStd-SemiBold.woff2'
// import CharlieStdTTF from '../fonts/CharlieStd/CharlieStd-SemiBold.ttf'
// import CharlieStdSVG from '../fonts/CharlieStd/CharlieStd-SemiBold.svg'

// import CharlieStdBoldWOFF from '../fonts/CharlieStd/CharlieStd-Bold.woff'

// export const CharlieStdFont = {
//   eot: CharlieStdEOT,
//   woff: CharlieStdWOFF,
//   woff2: CharlieStdWOFF2,
//   ttf: CharlieStdTTF,
//   svg: CharlieStdSVG,
// }

// export const CharlieStdFontBold = {
//   woff: CharlieStdBoldWOFF,
// }

export const fontFamily = {
  sourceSans: `${SOURCE_SANS_PRO}, sans-serif`,
  charlie: `${CHARLIE_STD}, ${ARIAL}, serif`,
  charlieBold: `${CHARLIE_STD_BOLD}, ${ARIAL}, serif`,
  arial: ARIAL,
}

export const MAX_WIDTH = 1200

export const deviceBreakpoints = {
  xs: 320,
  sm: 550,
  md: 768,
  lg: 1024,
  tb: 1060, // tablet landscape for burger menu
  xl: 1200,
}

export const mediaQueries = {
  xs: `@media only screen and (min-width: ${deviceBreakpoints.xs}px)`,
  sm: `@media only screen and (min-width: ${deviceBreakpoints.sm}px)`,
  md: `@media only screen and (min-width: ${deviceBreakpoints.md}px)`,
  lg: `@media only screen and (min-width: ${deviceBreakpoints.lg}px)`,
  tb: `@media only screen and (min-width: ${deviceBreakpoints.tb}px)`,
  xl: `@media only screen and (min-width: ${deviceBreakpoints.xl}px)`,
}

export const iconWidth = {
  sm: 16,
  lg: 32,
}

export const animations = {
  bounce: keyframes({
    'from, 20%, 53%, 80%, to': {
      transform: 'translate3d(0,0,0)',
    },
    '40%, 43%': {
      transform: 'translate3d(0, -30px, 0)',
    },
    '70%': {
      transform: 'translate3d(0, -15px, 0)',
    },
    '90%': {
      transform: 'translate3d(0,-4px,0)',
    },
  }),
  slidein: keyframes({
    from: {
      transform: 'translate3d(-100%, 0, 0)',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  }),
  slideOut: keyframes({
    from: {
      transform: 'translate3d(0, 0, 0)',
    },
    to: {
      transform: 'translate3d(-100%, 0, 0)',
    },
  }),
  fadeIn: keyframes({
    from: {
      opacity: 0.7,
      transform: 'translate(-50%, -50%) scale(0.8)',
    },
    to: {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
  }),
  fadeOut: keyframes({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  }),
}

export const shadows = {
  low: '0px 3px 5px rgba(0, 0, 0, .05)',
  mid: '0px 5px 10px rgba(0, 0, 0, .15)',
  high: '0px 10px 15px rgba(0, 0, 0, .1)',
}

export const pxToRem = (pixelValue: number): string => `${pixelValue / BASE_FONT_SIZE}rem`

export const fontSize = {
  xl: pxToRem(48),
  xlMobile: pxToRem(32),
  lg: pxToRem(28), 
  md: pxToRem(24),
  sm: pxToRem(18), 
  xs: pxToRem(16),
  xxs: pxToRem(12),
}

export const fontWeights = {
  light: '400',
  normal: '500',
  semiBold: '600',
  bold: '700',
}

export const colours = {
  lightBlue: 'rgb(235, 245, 245)', // #EBF5F5
  offWhite: 'rgb(247, 248, 248)', // #F7F8F8
  whiteGrey: 'rgb(229,229,229)', // #E5E5E5, used as default background of group
  overlayWhite: 'rgba(255, 255, 255, 0.8)',
  lightestGrey: 'rgb(225, 224, 224)', // #E1E0E0
  lightGrey: 'rgb(196, 195, 195)', // #C4C3C3
  mediumGrey: 'rgb(138, 132, 132)', // #8A8484
  darkGrey: 'rgb(51, 51, 51)', // #333333
  mediumDarkGrey: 'rgb(44, 42, 41)', // #2C2A29
  darkestGrey: 'rgb(39, 37, 37)', // #272525
  lightRed: 'rgb(255, 187, 191)', // #FFBBBF functionalDangerLight
  pink: 'rgb(206, 0, 88)', // #CE0058
  red: 'rgb(241, 52, 40)', // #F13428
  merlin: 'rgb(71, 63, 58)', // #473F3A
  vividPink: 'rgb(228, 5, 113)', // #E40571
  lightBlack: 'rgb(71, 63, 58)', // #473F3A
  lighterBlack: 'rgb(26, 26, 26)', // #1A1A1A
  
  // Design system colours
  // Tertiary
  tertiaryOne: '#272525',
  tertiaryTwo: '#585353',
  tertiaryThree: '#BDBDBD',
  tertiaryFour: '#F7F8F8',
  tertiaryFive: '#FFFFFF',

  // Functional Danger
  functionalDangerDark: '#A8140B',
  functionalDanger: '#F13428',
  functionalDangerMedium: '#CF2E2E',
  functionalDangerLight: '#FCD6D4',

  // Functional Warning
  functionalWarningDark: '#A16803',
  functionalWarning: '#FBA70F',
  functionalWarningLight: '#FEEDCF',

  // Functional Accept
  functionalAcceptDark: '#016A45',
  functionalAccept: '#02CD86',
  functionalAcceptLight: '#CCF5E7',

  // Functional Info
  functionalInfoDark: '#0A5E99',
  functionalInfo: '#1A97F0',
  functionalInfoLight: '#D1EAFC',
}

export const coloursWithOpacity = (color, opacity) => {
  const splitedColor = color.split(')')
  return `${splitedColor[0]}, ${opacity})`
}

// Pading
export const buttonPadding = {
  xs: {
    vertical: 8,
    horizontal: 16,
  },
  sm: {
    vertical: 8,
    horizontal: 16,
  },
  md: {
    vertical: 12,
    horizontal: 24,
  },
  lg: {
    vertical: 16,
    horizontal: 24,
  },
  tabs: 16,
}

export const inputPadding = {
  sm: {
    vertical: 12,
    horizontal: 16,
  },
}

// Stacking traceability
// e.g. anything higher than -- mainNavigation + 1
export const zIndex = {
  mainNavigation: 3,
}

export const SPACING_MULTIPLIER: number = 8
export const space = (num: number = 1, suffix: boolean = false): number | string =>
  suffix ? `${num * SPACING_MULTIPLIER}px` : num * SPACING_MULTIPLIER

export const containerUtils = {
  pageWrapper: { maxWidth: MAX_WIDTH, margin: '0 auto' },
  innerPaddingHorizontal: {
    padding: `0 ${space(3, true)}`,
    [mediaQueries.lg]: {
      padding: `0 ${space(3, true)}`,
    },
  },
  innerPaddingVertical: { padding: `${space(3, true)} 0` },
}

export const makeColumn = (column: number = 1, gutter: number = 0) => ({
  flex: `0 1 calc(${100 / column}% - ${gutter}px)`,
  width: `calc(${100 / column}% - ${gutter}px)`,
})

const GUTTERS = {
  none: 0,
  sm: space(2) / 2,
  lg: space(3) / 2,
  xl: space(4) / 2,
}

const columnWrapper = {
  justifyContent: 'space-between',
  display: 'flex',
  flexWrap: 'wrap',
}

export const setColumns = (columns: '' | Array, gutterSize = 'sm') => {
  const gutter = GUTTERS[gutterSize]
  let columnsStyle = {
    ...columnWrapper,
    '& > *': makeColumn(columns, gutter),
  }

  if (Array.isArray(columns)) {
    const widths = {}
    columns.forEach((column, i) => {
      widths[`& > *:nth-child(${i + 1})`] = makeColumn(column, gutter)
    })
    columnsStyle = {
      ...columnWrapper,
      ...widths,
    }
  }

  return columnsStyle
}

export const fullColumn = {
  flex: '0 1 100%',
  width: '100%',
  '&&': {
    flex: '0 1 100%',
    width: '100%',
  },
}


export const getButtonVariant = (variant, theme) => {
  const variants = {
    primary: {
      color: theme.primary.color,
      backgroundColor: theme.primary.bg,
      '&:hover, &:focus': {
        backgroundColor: theme.primary.hover.bg,
      },
      '&:active': {
        backgroundColor: theme.primary.active.bg,
      },
    },
    secondary: {
      color: theme.secondary.color,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: theme.secondary.color,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      background: 'none',
      '&:hover, &:focus': {
        color: theme.secondary.hover.color,
        borderColor: theme.secondary.hover.color,
      },
      '&:active': {
        color: theme.secondary.active.bg,
        borderColor: theme.secondary.active.bg,
      },
      disabled: {
        backgroundColor: colours.tertiaryFive,
        borderColor: colours.tertiaryThree,
      },
    },
    secondaryWithOutline: {
      color: colours.tertiaryFive,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: colours.tertiaryFive,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      background: 'none',
      '&:hover, &:focus': {
        color: theme.secondary.hover.color,
        borderColor: colours.tertiaryFive,
        background: colours.tertiaryFive,
      },
      '&:active': {
        color: theme.secondary.active.bg,
        background: colours.tertiaryFive,
        borderColor: colours.tertiaryFive,
      },
      disabled: {
        backgroundColor: colours.tertiaryFive,
        borderColor: colours.mediumGrey,
      },
    },
    tertiary: {
      color: theme.tertiary.color,
      backgroundColor: 'transparent',
      fontFamily: fontFamily.sourceSans,
      fontWeight: fontWeights.bold,
      '&:hover, &:focus': {
        color: theme.tertiary.hover.color,
      },
      '&:active': {
        color: theme.tertiary.active.bg,
      },
      disabled: {
        backgroundColor: 'transparent',
      },
    },
    danger: {
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: colours.functionalDangerDark,
      color: colours.functionalDangerDark,
      backgroundColor: 'transparent',
      '&:hover, &:focus': {
        backgroundColor: colours.functionalDangerDark,
        color: colours.functionalDangerLight,
        borderColor: colours.tertiaryFive,
      },
    },
    link: {
      color: theme.primary.bg,
      backgroundColor: 'transparent',
      fontFamily: fontFamily.sourceSans,
      fontWeight: fontWeights.bold,
      '&:hover, &:focus': {
        color: theme.tertiary.hover.color,
      },
      '&:active': {
        color: theme.tertiary.active.bg,
      },
      disabled: {
        backgroundColor: 'transparent',
      },
    },
  }
  return variants[variant]
}

export const buttonSizes = {
  xsmall: {
    fontSize: fontSize.xxs,
    padding: mapPadding(buttonPadding.xs),
  },
  small: {
    fontSize: fontSize.xs,
    padding: mapPadding(buttonPadding.sm),
  },
  medium: {
    fontSize: fontSize.sm,
    padding: mapPadding(buttonPadding.md),
  },
  large: {
    fontSize: fontSize.md,
    padding: mapPadding(buttonPadding.lg),
  },
}
