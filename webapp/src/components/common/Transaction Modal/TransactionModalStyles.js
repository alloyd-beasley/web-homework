import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const TransactionModalContainer = styled.div`
    position: fixed;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);    
    z-index: 4;
    left: 0; 
    right: 0;
    top: 0;    
`

export const TransactionModalBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin-top: -150px;
    margin-left: -150px;
    background: #546E7A;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    padding: 22px;
    color: whitesmoke;
    border-radius: 3px;
`

export const transactionModalInputContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;    
`
export const transactionModalInputContainerContent = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

export const transactionModalInput = css`
    border-radius: 3px;
    outline: none;
    border: none;
    height: 21px;
    box-shadow: inset 0px 0px 3px 0px #37474f;
    `
