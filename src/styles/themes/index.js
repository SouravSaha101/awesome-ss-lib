// @flow
import { colours, fontFamily } from '..'

const themes = {
  group: {
    button: {
      text: colours.tertiaryFive,
      bg: colours.mlcPinkAccessible,
      fontFamily: fontFamily.charlie,
      borderRadius: 0,
      hover: {
        bg: colours.mlcPinkDark,
      },
      active: {
        bg: colours.tertiaryOne,
      },
      action: {
        text: colours.mlcPinkAccessible,
        bg: colours.mlcPinkLight,
        hover: {
          text: colours.mlcPinkDark,
          bg: colours.mlcPinkAccessible,
        },
        active: {
          text: colours.tertiaryFive,
          bg: colours.mlcPinkAccessible,
        },
      },
      primary: {
        bg: colours.mlcPinkAccessible,
        color: colours.tertiaryFive,
        hover: {
          bg: colours.mlcPinkDark,
        },
        active: {
          bg: colours.tertiaryOne,
        },
      },
      secondary: {
        color: colours.mlcPinkAccessible,
        hover: {
          color: colours.mlcPinkDark,
        },
        active: {
          bg: colours.tertiaryOne,
        },
      },
      tertiary: {
        color: colours.tertiaryOne,
        hover: {
          color: colours.tertiaryTwo,
        },
        active: {
          bg: colours.tertiaryOne,
        },
      },
    },
    icon: {
      color: colours.mlcPinkAccessible,
    },
    card: {
      bg: colours.tertiaryFour,
      border: 'none',
    },
    form: {
      bg: colours.tertiaryFour,
      border: colours.tertiaryThree,
      borderRadius: 0,
      text: colours.tertiaryTwo,
      placeholder: colours.tertiaryThree,
      hover: {
        border: colours.mlcPinkAccessible,
      },
      active: {
        border: colours.tertiaryOne,
        text: colours.tertiaryOne,
      },
    },
    notification: {
      bg: colours.mlcPinkAccessible,
      text: colours.tertiaryFive,
    },
    caption: {
      text: colours.tertiaryTwo,
      link: colours.mlcPinkAccessible,
    },
    banner: {
      bg: colours.mlcPinkDark,
      text: colours.tertiaryFive,
    },
    sidebar: {
      bg: colours.mlcPinkDark,
      text: colours.tertiaryFive,
      border: colours.tertiaryOne,
      hover: {
        bg: colours.mlcPinkDark,
      },
      active: {
        bg: colours.mlcPinkDark,
      },
    },
    toggle: {
      hover: {
        border: colours.mlcPinkAccessible,
      },
      active: {
        border: colours.tertiaryOne,
      },
      selected: {
        text: colours.tertiaryFive,
        border: colours.mlcPinkDark,
        bg: colours.mlcPinkAccessible,
      },
    },
    navigation: {
      fontFamily: fontFamily.charlie,
    },
    tabBar: {
      bg: colours.tertiaryOne,
      text: colours.tertiaryThree,
      hover: {
        bg: colours.tertiaryThree,
      },
      inactive: {
        text: colours.tertiaryOne,
      },
      selected: {
        bg: colours.tertiaryFive,
        text: colours.tertiaryOne,
      },
    },
  },
}

export default themes
