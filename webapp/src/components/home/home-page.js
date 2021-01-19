import React, { Fragment } from 'react'
import Table from '../common/Table/Table'

export const Home = () => {

  const tableData = [{
    test: "test",
    foo: "foo",
    bar: "bar"
  }, {
    test: "test",
    foo: "foo",
    bar: "bar"
  }]
  return (
    <Fragment>
      {/* <Link to='/another'>Another route</Link> */}
      <div>
        <Table headers={["test", "foo", "bar"]} data={tableData} />
      </div>
    </Fragment>
  )
}
