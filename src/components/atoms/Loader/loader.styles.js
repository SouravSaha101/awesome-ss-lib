// @flow
import { colours, space } from '../../../styles'

const getMinHeight = (type) => {
  if (type === 'tab') return space(35)
  if (type === 'noHeight') return 0
  return space(10)
}

const styles = {
  container: (type: string): Object => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: type === 'panel' ? '100%' : null,
    minHeight: getMinHeight(type),
    backgroundColor: type === 'tab' ? colours.tertiaryFive : 'transparent',
  }),
}

export default styles
