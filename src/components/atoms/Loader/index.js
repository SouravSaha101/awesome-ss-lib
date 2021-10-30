// @flow
import React, { type Node } from 'react'
import MDSpinner from 'react-md-spinner'
import styled from '@emotion/styled'

// styles.
import styles from './loader.styles'
import { colours, space } from '../../../styles'

type LoaderProps = {
  /* defines use case, either at a component level, within a tab, or across a sidebar panel. */
  type?: 'component' | 'panel' | 'tab' | 'noHeight',
  spinnerSize?: number,
  borderSize?: number,
}

const Container = styled('div')(({ type }) => styles.container(type))

const Loader = ({ type, spinnerSize, borderSize, ...rest }: LoaderProps): Node => (
  // the inner circumference of the spinners border.

  <Container data-testid="loader" type={type} {...rest}>
    <MDSpinner
      color1={colours.mlcGreenCustomer}
      color2={colours.functionalWarningDark}
      color3={colours.mlcPinkAccessible}
      size={spinnerSize}
      borderSize={borderSize}
    />
  </Container>
)

Loader.defaultProps = {
  type: 'component',
  spinnerSize: space(5),
  borderSize: 3,
}

export default Loader
