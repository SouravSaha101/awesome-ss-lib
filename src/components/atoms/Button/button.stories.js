/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, max-len */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { addParameters } from '../../../utils/storybookUtils'
// components.
import Button, { Button as ButtonComponent } from '.'

const fields = {
  clicked: action('clicked'),
}

export default {
  title: 'Button',
  subcomponents: { ButtonComponent },
  parameters: addParameters({
    figmaUrl:
      'https://www.figma.com/file/QRh3NrdKqmyhb6MEqjsunS/LifeStyle---Adviser?node-id=635%3A64878',
  }),
}

export const Primary = () => (
  <>
    <Button
      variant="primary"
      size="large"
      disabled={boolean('Disabled state', false)}
      error={boolean('Error state', false)}
      onClick={fields.clicked}
    >
      Primary Large
    </Button>
    <br />
    <br />
    <Button
      variant="primary"
      size="medium"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Primary Medium
    </Button>
    <br /> <br />
    <Button
      variant="primary"
      size="small"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Primary Small
    </Button>
    <br /> <br />
    <Button
      variant="primary"
      size="xsmall"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Primary Xsmall
    </Button>
  </>
)
export const Secondary = () => (
  <>
    <Button
      variant="secondary"
      size="large"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Secondary Large
    </Button>
    <br />
    <br />
    <Button
      variant="secondary"
      size="medium"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Secondary Medium
    </Button>
    <br /> <br />
    <Button
      variant="secondary"
      size="small"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Secondary Small
    </Button>
    <br /> <br />
    <Button
      variant="secondary"
      size="xsmall"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Secondary Xsmall
    </Button>
  </>
)

export const Tertiary = () => (
  <>
    <Button
      variant="tertiary"
      size="large"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Tertiary Large
    </Button>
    <br />
    <br />
    <Button
      variant="tertiary"
      size="medium"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Tertiary Medium
    </Button>
    <br /> <br />
    <Button
      variant="tertiary"
      size="small"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Tertiary Small
    </Button>
    <br /> <br />
    <Button
      variant="tertiary"
      size="xsmall"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Tertiary Xsmall
    </Button>
  </>
)

export const Danger = () => (
  <>
    <Button
      variant="danger"
      size="large"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Danger Large
    </Button>
    <br />
    <br />
    <Button
      variant="danger"
      size="medium"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Danger Medium
    </Button>
    <br /> <br />
    <Button
      variant="danger"
      size="small"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Danger Small
    </Button>
    <br /> <br />
    <Button
      variant="danger"
      size="xsmall"
      disabled={boolean('Disabled state', false)}
      onClick={fields.clicked}
      error={boolean('Error state', false)}
    >
      Danger Xsmall
    </Button>
  </>
)

export const ForMobile = () => (
  <Button
    variant="primary"
    size="large"
    mobileButtonSize="small"
    disabled={boolean('Disabled state', false)}
    error={boolean('Error state', false)}
    onClick={fields.clicked}
  >
    Small size on mobile
  </Button>
)
