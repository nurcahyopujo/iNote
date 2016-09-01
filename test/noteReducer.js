import expect from 'expect'
import reducer from '../reducers/notes'
// import * as types from '../../constants/ActionTypes'

describe('notes reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([

    ])
  })

  it('should handle NEW_NOTE', () => {
    expect(
      reducer([], {
        type: 'NEW_NOTE ',
        id: 0,
        title: 'Coba',
        content: 'Content'
      })
    ).toEqual(
      [
        {
          title: 'Coba',
          content: 'Content',
          id: 0
        }
      ]
    )

    expect(
      reducer(
        [
          {
            title: 'Coba',
            content: 'Content',
            id: 0
          }
        ],
        {
          type: 'NEW_NOTE ',
          title: 'Test2',
          content: 'Content2'
        }
      )
    ).toEqual(
      [
        {
          title: 'Test2',
          content: 'Content2',
          id: 1
        },
        {
          title: 'Coba',
          content: 'Content',
          id: 0
        }
      ]
    )
  })
})
