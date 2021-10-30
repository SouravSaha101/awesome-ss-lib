import {
  colours,
  fontFamily,
  fontWeights,
  getButtonVariant,
  buttonSizes,
  mediaQueries,
} from "../../../styles";

import themes from "../../../styles/themes";

const theme = themes.group.button;

const styles = {
  base: ({ variant, size, disabled, transparent, mobileButtonSize }) => ({
    textAlign: "center",
    border: "none",
    textDecoration: "none",
    justifyContent: "center",
    display: "inline-flex",
    letterSpacing: 1,
    alignItems: "center",
    lineHeight: 1.33,
    fontWeight: fontWeights.semiBold,
    fontFamily: theme.fontFamily || fontFamily.sourceSans,
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },
    borderRadius: theme.borderRadius,
    ...buttonSizes[mobileButtonSize || size],
    ...getButtonVariant(variant, theme),
    ...(mobileButtonSize && {
      [mediaQueries.md]: buttonSizes[size],
    }),
  }),
  error: {
    backgroundColor: colours.functionalDangerLight,
    color: colours.functionalDanger,
    "&:hover, &:focus": {
      backgroundColor: colours.functionalDanger,
      color: colours.functionalDangerLight,
    },
  },
  disabled: {
    cursor: "default",
    pointerEvents: "none",
    color: colours.tertiaryThree,
    backgroundColor: colours.tertiaryFour,
  },
  transparent: {
    background: "transparent",
  },
  spinner: {
    minHeight: 0,
  },
};

export default styles;
