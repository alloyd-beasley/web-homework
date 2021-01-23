import React, { Fragment, useEffect, useState } from 'react'
import Table from '../common/Table/Table'
import { tableContainer } from '../common/Table/TableStyles'
import { buttonStyle } from '../../styles/AppStyles'
import { useGetTransactions } from "../../hooks/useGetTransactions"


const Home = () => {
  const [tableData, setTableData] = useState([]);
  const [headers, setTableHeaders] = useState([]);
  const { data, loading, error } = useGetTransactions();


  useEffect(() => {
    if (data && data.transactions) {
      const keys = [...Object.keys(data.transactions[0])];
      setTableHeaders(keys.filter(k => k !== "__typename"));
      setTableData(data.transactions);
    }
  }, [data])


  return (
    <Fragment>
      {data == 'loading' && "loading"}
      <div css={tableContainer}>
        <Table headers={headers} data={tableData} />
        <div style={{ display: "flex", width: "100%", justifyContent: "flex-start" }}>
          <button css={buttonStyle}>
            Add Transaction
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Home