import React from 'react'
import PropTypes from 'prop-types'
import { useTable } from 'react-table'

import {
  TableHeaderRow,
  TableWrapper,
  TableHeaderCell,
  TableDataCell,
  TableDataRow,
  TableBody,
  TableHeaderWrapper
} from './TableStyles'

const Table = (props) => {
  const { headers, data } = props

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ headers, data })

  return (
    <TableWrapper {...getTableProps()}>
      <TableHeaderWrapper>
        {headerGroups.map((hg, hgi) => (
          <TableHeaderRow key={`header-row-${hgi}`}
            {...hg.getHeaderGroupProps()}>
            {hg.headers.map((col, i) => (
              <TableHeaderCell
                key={`header-cell-${i}`}
                {...col.getHeaderProps()}
              >
                {col.render('Header')}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        ))}
      </TableHeaderWrapper>
      <TableBody {...getTableBodyProps()}>
        {rows.map((r, ri) => {
          prepareRow(r)

          return (
            <TableDataRow key={`data-row-${ri}`} {...r.getRowProps()}>
              {rows.cells.map((c, ci) => (
                <TableDataCell
                  key={`${c}-cell-${ci}`}
                  {...c.getCellProps()}>
                  {c.render('Cell')}
                </TableDataCell>
              ))
              }
            </TableDataRow>
          )
        })}
      </TableBody>
    </TableWrapper>
  )
}

Table.propTypes = {
  headers: PropTypes.array,
  data: PropTypes.array
}

export default Table
