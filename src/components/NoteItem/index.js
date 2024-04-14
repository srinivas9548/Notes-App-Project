import {NoteItemList, NoteItemTitle, NoteItemNote} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, note} = notesDetails

  return (
    <NoteItemList>
      <NoteItemTitle>{title}</NoteItemTitle>
      <NoteItemNote>{note}</NoteItemNote>
    </NoteItemList>
  )
}

export default NoteItem
