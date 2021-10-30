import { getLabelFromChildren } from './dataLocatorUtils'

describe('data Locator Fieldset ', () => {
  test('is give locator correctly', async () => {
    expect(getLabelFromChildren('some text')).toBe('some-text')
  })
})
