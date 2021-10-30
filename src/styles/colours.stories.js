// @flow
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react'
import styled from '@emotion/styled'

// styles.
import { colours } from '.'

const Container = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
})
const ColourBlock = styled('div')(
  {
    width: 200,
    height: 60,
    verticalAlign: 'center',
    marginRight: 20,
  },
  ({ color }) => ({ background: color })
)

export default {
  title: 'Theming/Colours',
}

export const Colours = () => (
  <Container>
    {Object.entries(colours).map(([key, color]) => (
      <div key={key}>
        <div>{key.replace(/[A-Z]/g, ([first, ...rest]) => `\n${first.toLowerCase()}${rest}`)}</div>
        <div>{color}</div>
        <ColourBlock key={key} color={color}></ColourBlock>
      </div>
    ))}
  </Container>
)
