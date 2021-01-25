import React, { useContext, useEffect, useState } from 'react'
import { css } from '@emotion/core'
import { tableContainer } from '../common/Table/TableStyles'
import { TransactionContext } from '../../TransactionContext'
import TableMutationColumn from '../common/Table/TableMutationColumn'
import Table from '../common/Table/Table'
import Footer from './Footer'

const Home = () => {
  const [headers, setTableHeaders] = useState([])

  const { dataContext } = useContext(TransactionContext)
  useEffect(() => {
    const { transactions } = dataContext
    if (transactions.length > 0) {
      const keys = [...Object.keys(transactions[0])].filter(k => k !== '__typename')
      const newHeaders = []

      for (const k of keys) {
        if (k === 'credit' || k === 'debit') {
          newHeaders.push({ Header: k.toUpperCase(), accessor: d => d[k].toString() })
        } else if (k === 'amount') {
          newHeaders.push({ Header: `${k.toUpperCase()} ($)`, accessor: k })
        } else {
          newHeaders.push({ Header: k.toUpperCase(), accessor: k })
        }
      }
      newHeaders.push({
        Header: 'Actions',
        // eslint-disable-next-line react/display-name
        Cell: data => <TableMutationColumn data={data.row} />
      })
      setTableHeaders(newHeaders)
    }
  }, [dataContext.transactions])

  return (
    <div css={tableContainer}>
      {dataContext.transactions.length > 0
        ? <Table data={dataContext.transactions} headers={headers} />
        : (
          <div css={css`
            display: flex;
            justify-content: center;
            color: whitesmoke;
            width: 100%;
            line-height: 50px;
        `}>
            {!dataContext.txDataLoading ? 'You have no transaction data to display. Please add a transaction.' : '...Loading Table Data'}</div>
        )}
      <Footer />
    </div>
  )
}

export default Home
