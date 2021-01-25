import React from 'react'
import PropTypes from 'prop-types'
import { buttonStyle } from '../styles/AppStyles'
import { gql, useMutation } from '@apollo/client'

const TableMutationColumn = ({ data }) => {
  const REMOVE_TRANSACTION = gql`
  mutation removeTransactionById($id: String) {
    removeTransactionById(id: $id) {
      id
    }
  }
`
  const [removeTransaction] = useMutation(REMOVE_TRANSACTION)

  return (
    <>
      <button css={buttonStyle} onClick={() => console.log(data)}>edit</button>
      <button css={buttonStyle} onClick={() => removeTransaction({ variables: { id: data.original.id } })}>remove</button>
    </>
  )
}

TableMutationColumn.propTypes = {
  data: PropTypes.object
}

export default TableMutationColumn
