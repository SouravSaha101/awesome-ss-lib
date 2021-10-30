// @flow
import styled from '@emotion/styled'
import { fullColumn } from '../styles'

export const lineHeightMultiplier = (pxValue: number, lineHeightInPx: number): number =>
  pxValue / lineHeightInPx

// returns className from passed props of a component if available.
export const getClassnameProp = ({ className }) =>
  className && Object.keys(className).length ? { className } : null

// used to get components to ignore columns layouts styles.
export const ignoreColumns = (WrappedComponent = 'div') => styled(WrappedComponent)(fullColumn)

export const setErrorColor = (error, errorColor, defaultColor) =>
  error ? errorColor : defaultColor

export const mapPadding = (size) => `${size.vertical}px ${size.horizontal}px`
