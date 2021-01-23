import React, { Fragment } from 'react'
import Table from '../common/Table/Table'

const Home = () => {

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
      <Table headers={["test", "foo", "bar"]} data={tableData} />
    </Fragment>
  )
}

export default Home