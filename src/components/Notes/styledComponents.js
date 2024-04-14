import styled from 'styled-components'

export const NotesAppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`
export const NotesAppContent = styled.div`
  width: 85%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
export const NotesAppHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 34px;
  color: #4c63b6;
  font-weight: 500;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    font-size: 44px;
  }
`
export const NotesAppFormContainer = styled.form`
  width: 100%;
  height: 245px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 16px #aab8c8;
  @media screen and (min-width: 768px) {
    height: 270px;
  }
`
export const NotesAppInput = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
  height: 40px;
  width: 100%;
  padding-left: 12px;
  border: none;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const NotesAppTextArea = styled.textarea`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  width: 100%;
  padding-left: 12px;
  border: none;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const AddButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: #4c63b6;
  align-self: flex-end;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const NotesAppListContainer = styled.ul`
  display: flex;
  align-self: flex-start;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
`

export const EmptyNotesAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
`
export const EmptyNotesImage = styled.img`
  width: 100px;
  margin-bottom: 10px;
`
export const EmptyNotesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #334155;
  font-weight: 500;
`
export const EmptyNotedDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  margin: 0;
`
