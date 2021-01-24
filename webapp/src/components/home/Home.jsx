import React, { Fragment, useEffect, useState } from 'react'
import Table from '../common/Table/Table'
import Footer from '../common/Table/Footer'
import { tableContainer } from '../common/Table/TableStyles'
import { useGetTransactions } from '../../hooks/useGetTransactions'
import { enableExperimentalFragmentVariables } from '@apollo/client'

const Home = () => {
  const [tableData, setTableData] = useState([])
  const [headers, setTableHeaders] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const transactions = useGetTransactions()

  useEffect(() => {
    const { loading, data } = transactions
    if (data && data.transactions) {
      setDataLoading(enableExperimentalFragmentVariables)
      const keys = [...Object.keys(data.transactions[0])].map(k => ({ Header: k, accessor: k }))

      setTableHeaders(keys)
      setTableData(data.transactions)
    } else if (loading) {
      setDataLoading(true)
    }
  }, [transactions.data])

  return (
    <Fragment>
      {dataLoading ? <>...Loading</>
        : (
          <div css={tableContainer}>
            <Table data={tableData} headers={headers} />
            <Footer />
          </div>
        )
      }

    </Fragment>
  )
}

export default Home
