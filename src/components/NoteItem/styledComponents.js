import styled from 'styled-components'

export const NoteItemList = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  padding: 16px;
  width: 235px;
  margin-right: 15px;
  margin-bottom: 20px;
`
export const NoteItemTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #1e293b;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const NoteItemNote = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
