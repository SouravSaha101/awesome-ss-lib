/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react'
import { MemoryRouter } from 'react-router'

export const addDecorators = ({ styleOverride = null, memoryRouter = false }) => {
  let decorators = []
  if (styleOverride) {
    const { fullWidth = false, backgroundColor = 'white' } = styleOverride ?? {}
    decorators.push((getStory) => (
      <>
        <style>
          {`#story-root {
          padding: ${fullWidth ? '0' : '40px'};
          background: ${backgroundColor};
      }`}
        </style>
        {getStory()}
      </>
    ))
  }
  if (memoryRouter) {
    decorators.push((getStory) => <MemoryRouter initialEntries={['/']}>{getStory()}</MemoryRouter>)
  }
  return decorators
}

export const addParameters = (options = {}) => {
  const { theme = 'advisor-portal', figmaUrl, moveInfo } = options
  return {
    ...(figmaUrl && {
      design: {
        type: 'figma',
        url: figmaUrl,
      },
    }),
    ...(moveInfo && {
      info: {
        inline: false,
      },
    }),
  }
}
