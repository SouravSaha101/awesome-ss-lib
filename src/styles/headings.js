// @flow
import { fontFamily, fontSize, fontWeights, space, colours, mediaQueries } from '.'

const headings = {
  base: {
    color: colours.tertiaryOne,
    margin: 0,
  },
  h1: {
    fontFamily: fontFamily.charlieBold,
    fontSize: fontSize.xlMobile,
    lineHeight: 1.17,
    marginBottom: space(2),
    [mediaQueries.md]: {
      fontSize: fontSize.xl,
    },
  },
  h2: {
    fontFamily: fontFamily.charlie,
    fontSize: fontSize.md,
    lineHeight: 1.14,
    fontWeight: fontWeights.semiBold,
    marginBottom: space(2),
    [mediaQueries.md]: {
      fontSize: fontSize.lg,
      lineHeight: 1.25,
    },
  },
  h3: {
    fontFamily: fontFamily.sourceSans,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSize.md,
    lineHeight: 1.33,
    marginBottom: space(2),
    [mediaQueries.md]: {
      fontSize: fontSize.md,
    },
  },
  h4: {
    fontFamily: fontFamily.sourceSans,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSize.sm,
    lineHeight: 1.33,
    marginBottom: space(2),
  },
  h5: {
    fontFamily: fontFamily.sourceSans,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSize.xs,
    lineHeight: 1.33,
    marginBottom: space(2),
  },
  h6: {
    fontFamily: fontFamily.sourceSans,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSize.xxs,
    lineHeight: 1.33,
    marginBottom: space(2),
  },
}

export default headings
