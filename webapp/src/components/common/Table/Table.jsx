import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTable, useResizeColumns, useFlexLayout } from 'react-table'

import {
  TableRow,
  TableWrapper,
  TableHeaderCell,
  TableDataCell,
  TableBody,
  TableHeaderWrapper
} from './TableStyles'

const Table = (props) => {
  const { headers, data } = props

  const columns = useMemo(() => headers)
  const tableData = useMemo(() => data)

  const defaultColumn = useMemo(() => ({
    minwidth: 30,
    width: 150,
    maxWidth: 300
  }))

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data: tableData, defaultColumn }, useResizeColumns, useFlexLayout)

  return (
    <TableWrapper {...getTableProps()}>
      <TableHeaderWrapper>
        {headerGroups.map((hg, hgi) => (
          <TableRow key={`header-row-${hgi}`}
            {...hg.getHeaderGroupProps()}>
            {hg.headers.map((col, i) => (
              <TableHeaderCell
                key={`header-cell-${i}`}
                {...col.getHeaderProps()}
              >
                {col.render('Header')}
              </TableHeaderCell>
            ))}
          </TableRow>
        ))}
      </TableHeaderWrapper>
      <TableBody {...getTableBodyProps()}>
        {rows.map((r, ri) => {
          prepareRow(r)

          return (
            <TableRow key={`data-row-${ri}`} {...r.getRowProps()}>
              {r.cells.map((c, ci) => (
                <TableDataCell
                  key={`${c}-cell-${ci}`}
                  {...c.getCellProps()}>
                  {c.render('Cell')}
                </TableDataCell>
              ))
              }
            </TableRow>
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
