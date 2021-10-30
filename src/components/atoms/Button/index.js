import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Loader from '../Loader'

// styles.
import styles from './button.styles'
import { themeConsumer } from '../../../styles/ThemeContext'

// utils
import { getLabelFromChildren } from '../../../utils/dataLocatorUtils'

const Spinner = styled(Loader)(styles.spinner)

const Btn = styled('button')(
  (props) => styles.base(props),
  (props) => ({
    ...(props.isBtnDisabled ? { ...styles.disabled, ...styles.base(props).disabled } : null),
    ...(props.isTransparent ? { ...styles.transparent, ...styles.base(props).transparent } : null),
    ...(props.error ? styles.error : null),
  })
)

const Button = (props: ButtonProps) => {
  const { buttonRef, btnActionType, ...reducedProps } = props
  const {
    error,
    disabled,
    children,
    dataLocator,
    isTransparent,
    isLoading,
    loaderProps,
    variant,
  } = reducedProps
  const dataLocatorValue = {
    'data-locator': dataLocator || `button-${variant}-${getLabelFromChildren(children)}`,
  }
  const isBtnDisabled = disabled || isLoading
  return (
    <Btn
      type={btnActionType}
      isBtnDisabled={isBtnDisabled}
      ref={buttonRef}
      {...dataLocatorValue}
      {...reducedProps}
    >
      {isLoading ? <Spinner {...loaderProps} /> : children}
    </Btn>
  )
}

Button.propTypes = {
  /**  Contents of button. */
  children: PropTypes.node,
  /** Set button type. */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'secondaryWithOutline', 'danger']),
  /** Set button size. */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  /** Set button size for mobile. */
  mobileButtonSize: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
  /** Set button to error state. */
  error: PropTypes.bool,
  /** Disable use of button. */
  disabled: PropTypes.bool,
  /** data-locator for automated testing */
  dataLocator: PropTypes.string,
  /** transparent backgroud */
  isTransparent: PropTypes.bool,
  /** show spinner and disabled the button */
  isLoading: PropTypes.bool,
  /** Loader props. Refer to MDLoader docs */
  loaderProps: PropTypes.shape({
    type: PropTypes.oneOf(['component', 'panel', 'tab', 'noHeight']),
    spinnerSize: PropTypes.number,
    borderSize: PropTypes.number,
  }),
  /** To handle form submit */
  btnActionType: PropTypes.oneOf(['button', 'submit']),
}

Button.defaultProps = {
  btnActionType: 'button',
  variant: 'primary',
  error: false,
  disabled: false,
  size: 'medium',
  mobileButtonSize: null,
  dataLocator: '',
  isTransparent: false,
  isLoading: false,
  loaderProps: {
    spinnerSize: 20,
    borderSize: 2,
  },
}
export default themeConsumer(Button, 'button')

export { Button, styles }
