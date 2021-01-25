import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { buttonStyle } from '../../../styles/AppStyles'
import { gql, useMutation } from '@apollo/client'
import { TransactionContext } from '../../../TransactionContext'
import TransactionModal from '../Transaction Modal/TransactionModal'

const TableMutationColumn = ({ data }) => {
  const REMOVE_TRANSACTION = gql`
  mutation removeTransactionById($id: String) {
    removeTransactionById(id: $id) {
      id
    }
  }
`
  const [displayTxModal, setDisplayTxModal] = useState(false)
  const { dataContext, setDataContext } = useContext(TransactionContext)
  const [removeTransaction] = useMutation(REMOVE_TRANSACTION)

  const handleRemoveTransaction = async () => {
    const removed = await removeTransaction({ variables: { id: data.original.id } })

    if (removed.data.removeTransactionById.id != null) {
      for (let i = 0; i < dataContext.transactions.length; i++) {
        const tx = dataContext.transactions[i]

        if (tx.id === data.original.id) {
          dataContext.transactions.splice(i, 1)
          break
        }
      }

      setDataContext({ transactions: dataContext.transactions.splice(0), txDataLoading: dataContext.txDataLoading })
    }
  }

  const handleEditTransaction = async () => {
    setDisplayTxModal(true)
  }

  return (
    <>
      <button css={buttonStyle} onClick={handleEditTransaction}>edit</button>
      <button css={buttonStyle} onClick={handleRemoveTransaction}>remove</button>
      {displayTxModal && <TransactionModal closeCallback={setDisplayTxModal} data={data.original} update />}
    </>
  )
}

TableMutationColumn.propTypes = {
  data: PropTypes.object
}

export default TableMutationColumn
