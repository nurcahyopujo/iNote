import expect from 'expect'
import * as actions from '../actions/index'
// import * as types from '../../constants/ActionTypes'

describe('notes actions', () => {
  it('should create an action to add a note', () => {
    const id = 0
    const title = 'Finish docs'
    const content = 'Lorem ipsum dolor sir amet'
    const expectedAction = {
      type: 'NEW_NOTE',
      id,
      title,
      content
    }
    expect(actions.newNote(title, content)).toEqual(expectedAction)
  })

  it('should create an action to update a note', () => {
    const id = 0
    const title = 'Finish docs'
    const content = 'Lorem ipsum dolor sir amet'
    const title2 = 'Title'
    const content2 = 'Content'
    const expectedAction = {
      type: 'EDIT_NOTE',
      id,
      title: title2,
      content: content2
    }
    actions.newNote(title, content);
    expect(actions.editNote(id, title2, content2)).toEqual(expectedAction)
  })

  it('should create an action to delete a note', () => {
    const id = 0
    const title = 'Finish docs'
    const content = 'Lorem ipsum dolor sir amet'
    actions.newNote(title, content);

    const expectedAction = {
      type: 'DELETE_NOTE',
      id
    }
    expect(actions.deleteNote(id)).toEqual(expectedAction)
  })

});
