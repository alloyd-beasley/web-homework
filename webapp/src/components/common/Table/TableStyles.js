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
`

export const TableHeaderWrapper = styled.thead`
    display: block;
    text-align: left;
    overflow-y: auto;
    overflow-x: hidden;
`

export const TableRow = styled.tr`
    :last-child {
        .td {
            border-bottom: 0;
        }
    }
    border-bottom: 1px solid rgba(255, 138, 101, 0.3);
`
export const TableHeaderCell = styled.th`
    position: relative;
    margin: 0;    
    padding: 8px;
`

export const TableDataCell = styled.td`
    position: relative    ;
    padding: 8px;
    margin: 0;
`

export const TableFooter = styled.tfoot`
    height: 100px;
`
