// // @flow
// /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
// import React from 'react'
// import { MLCAddSnapshotting, MLCTestsSetup, MLCThemes, render } from 'testUtils'

// // components.
// import Loader from '.'

// // setup.
// MLCTestsSetup()
// MLCAddSnapshotting()

// describe('Loader', () => {
//   test('is mounting and operating correctly', async () => {
//     const { getByTestId } = render(<Loader />, {
//       theme: MLCThemes[0],
//     })
//     expect(getByTestId('loader')).toMatchSnapshot(`${MLCThemes[0]}-loader`)
//   })

//   test('is displaying correctly for panel type', async () => {
//     const { getByTestId } = render(<Loader type="panel" />, {
//       theme: MLCThemes[0],
//     })
//     expect(getByTestId('loader')).toMatchSnapshot(`${MLCThemes[0]}-loader--panel`)
//   })

//   test('is displaying correctly for tab type', async () => {
//     const { getByTestId } = render(<Loader type="tab" />, {
//       theme: MLCThemes[0],
//     })
//     expect(getByTestId('loader')).toMatchSnapshot(`${MLCThemes[0]}-loader--tab`)
//   })
// })
