import React, { Fragment } from 'react'
import Table from '../common/Table/Table'
import { tableContainer } from '../common/Table/TableStyles'
import { buttonStyle } from '../../styles/AppStyles'


const tableData = [{
  test: "test",
  foo: "foo",
  bar: "bar"
}, {
  test: "test",
  foo: "foo",
  bar: "bar"
}]

const Home = () => {


  return (
    <Fragment>
      <div css={tableContainer}>
        <Table headers={["test", "foo", "bar"]} data={tableData} />
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