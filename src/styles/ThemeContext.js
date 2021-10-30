// @flow
import React from 'react'
import themes from './themes'

// takes a theme and get returns the matching themes styles.
export const setTheme = (theme) => themes[theme]

// create react context theme and set it to the macthing theme
const ThemeContext = React.createContext({
  theme: setTheme('default'),
})

// returns theme from passed props of a component if available.
export const getThemeProp = ({ theme }) => (theme && Object.keys(theme).length ? { theme } : null)

type ThemeProviderProps = {
  theme: string,
}

// used for setting the theme of the application.
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { theme } = props
  return <ThemeContext.Provider {...props} value={setTheme(theme)} />
}

// used to apply a theme consumer to the given component so that it can consume the theme.
export function themeConsumer(WrappedComponent, themeComponentKey = null) {
  function consumer(props) {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          const styles = themeComponentKey ? theme[themeComponentKey] : theme
          return <WrappedComponent {...props} theme={styles} />
        }}
      </ThemeContext.Consumer>
    )
  }
  consumer.displayName = `themeConsumer(${WrappedComponent.displayName || WrappedComponent.name})`
  return consumer
}

export default ThemeContext
