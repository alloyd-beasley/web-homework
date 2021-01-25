import { css } from '@emotion/core'

export const layoutStyle = css`
  display: grid;
  height: 100vh;
  width: 100vw;
  background: #546E7A;
  grid-auto-rows: max-content;
  grid-row-gap: 10px;
  overflow-x: hidden;
`
export const contentStyle = css`
  width: 100vw;
`

export const buttonStyle = css`
  color: whitesmoke;
  background: #FF7043;
  border: none;
  padding: 8px;
  margin: 8px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
`
export const flatButtonStyle = css`
    background: none;    
    cursor: pointer;    
    padding: 7px;
    margin: 7px;
    color: #FF7043;
    border-radius: 3px;        
    outline: none;
    border: 1px solid rgba(255, 112, 67, 0);   
    transition: border-color .45s ease;         

    &:hover {         
      border-color: rgba(255, 112, 67, 1);
    }    
`
