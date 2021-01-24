import React, { useContext, useEffect, useState } from 'react'
import Table from '../common/Table/Table'
import Footer from '../common/Table/Footer'
import { css } from '@emotion/core'
import { tableContainer } from '../common/Table/TableStyles'
import { TransactionContext } from '../../TransactionContext'

const Home = () => {
  const [headers, setTableHeaders] = useState([])

  const { dataContext } = useContext(TransactionContext)
  useEffect(() => {
    const { transactions } = dataContext
    if (transactions.length > 0) {
      const keys = [...Object.keys(transactions[0])].map(k => ({ Header: k, accessor: k }))

      setTableHeaders(keys)
    }
  }, [dataContext])

  return (
    <div css={tableContainer}>
      {dataContext.txDataLoading && (
        <div css={css`
            display: flex;
            justify-content: center;
            color: whitesmoke;
            width: 100%;
            line-height: 50px;
        `}>...Loading Table Data</div>
      )}
      {dataContext.transactions.length > 0 && !dataContext.txDataLoading
        ? <Table data={dataContext.transactions} headers={headers} />
        : (
          <div css={css`
            display: flex;
            justify-content: center;
            color: whitesmoke;
            width: 100%;
            line-height: 50px;
        `}>
          You have no transaction data to display. Please add a transaction.</div>
        )}
      <Footer />
    </div>
  )
}

export default Home
