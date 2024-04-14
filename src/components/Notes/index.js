import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesAppContainer,
  NotesAppContent,
  NotesAppHeading,
  NotesAppFormContainer,
  NotesAppInput,
  NotesAppTextArea,
  AddButton,
  NotesAppListContainer,
  EmptyNotesAppContainer,
  EmptyNotesImage,
  EmptyNotesHeading,
  EmptyNotedDescription,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNote = event => setNote(event.target.value)

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <NotesAppContainer>
      <NotesAppContent>
        <NotesAppHeading>Notes</NotesAppHeading>
        <NotesAppFormContainer onSubmit={onAddNote}>
          <NotesAppInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <NotesAppTextArea
            rows="5"
            placeholder="Take a Note..."
            value={note}
            onChange={onChangeNote}
          >
            {note}
          </NotesAppTextArea>
          <AddButton type="submit">Add</AddButton>
        </NotesAppFormContainer>
        {notesList.length > 0 ? (
          <NotesAppListContainer>
            {notesList.map(eachNote => (
              <NoteItem key={eachNote.id} notesDetails={eachNote} />
            ))}
          </NotesAppListContainer>
        ) : (
          <EmptyNotesAppContainer>
            <EmptyNotesImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
            <EmptyNotedDescription>
              Notes you add will appear here
            </EmptyNotedDescription>
          </EmptyNotesAppContainer>
        )}
      </NotesAppContent>
    </NotesAppContainer>
  )
}

export default Notes
