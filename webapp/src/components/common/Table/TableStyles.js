import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const tableContainer = css`    
    background: #37474F;
    box-shadow: 0px 0px 5px 1px #455a64;
    border-radius: 3px;
`

export const TableWrapper = styled.table`
    display: block;
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    color: whitesmoke;
`

export const TableBody = styled.tbody`
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 600px;
    &::-webkit-scrollbar {
        width: 12px;
        background-color: #546E7A;
        border-radius: 5px;
        border: 1px solid #37474F
      }
    &::-webkit-scrollbar-thumb {        
        background-color: #37474F;
        border-radius: 5px;
        border: 1px solid #546E7A
    }
`

export const TableHeaderWrapper = styled.thead`
    display: block;
    text-align: left;
    overflow-y: auto;
    overflow-x: hidden;
    border-bottom: 1px solid rgba(255, 138, 101, 1);
`

export const TableRow = styled.tr`
    :last-child {
        .td {
            border-bottom: 0;
        }
    }
    border-bottom: 1px solid rgba(255, 138, 101, 0.2);
`
export const TableHeaderCell = styled.th`
    min-width: 50px;
    position: relative;
    margin: 0;    
    padding: 8px;
`

export const TableDataCell = styled.td`
    min-width: 50px;
    position: relative;
    padding: 8px;
    margin: 0;
    word-wrap: break-word;
`

export const TableFooter = styled.div`
    display: flex; 
    width: 100%; 
    justifyContent: flex-start; 
    border-top: 1px solid rgba(255, 138, 101, 1);
`
