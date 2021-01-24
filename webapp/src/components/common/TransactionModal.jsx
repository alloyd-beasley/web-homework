import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { TransactionContext } from '../../TransactionContext'
import { gql, useMutation } from '@apollo/client'
import { TransactionModalContainer, TransactionModalBox, transactionModalInputContainer, transactionModalInput } from './TransactionModalStyles'
import { buttonStyle } from '../../styles/AppStyles'

const TransactionModal = ({ closeCallback }) => {
  const [newTransaction, setNewTransaction] = useState({
    user_id: '',
    description: '',
    merchant_id: '',
    debit: false,
    credit: false,
    amount: 0
  })

  const ADD_TRANSACION = gql`
  mutation addTransaction($user_id: String, $description: String, $merchant_id: String, $debit: Boolean, $credit: Boolean, $amount: Float ) {
    addTransaction(user_id: $user_id, description: $description, merchant_id: $merchant_id, debit: $debit, credit: $credit, amount: $amount) {
      user_id
      description merchant_id
      debit
      credit
      amount
    }
  }
`
  // const { dataContext, setDataContext } = useContext(TransactionContext)
  const [addTransaction, { data }] = useMutation(ADD_TRANSACION)

  const handleInputUpdateNewTransaction = (event) => {
    newTransaction[event.target.name] = event.target.value
    setNewTransaction(newTransaction)
  }

  const handleSelectUpdateNewTransaction = (event) => {
    if (event === 'credit') {
      newTransaction[event.target.value] = true
      newTransaction['debit'] = false
    } else {
      newTransaction[event.target.value] = true
      newTransaction['credit'] = false
    }

    setNewTransaction(newTransaction)
  }

  const handleAddNewTransaction = () => {
    addTransaction({ variables: newTransaction })
    console.log(data)
    closeCallback(false)
  }

  return (
    <TransactionModalContainer>
      <TransactionModalBox>
        <div css={transactionModalInputContainer}>
          <div>user_id</div>
          <input
            css={transactionModalInput}
            name='user_id'
            onChange={(e) => handleInputUpdateNewTransaction(e)}
            type='text' />
        </div>
        <div css={transactionModalInputContainer}>
          description
          <input
            css={transactionModalInput}
            name='user_id'
            onChange={(e) => handleInputUpdateNewTransaction(e)}
            type='text' />
        </div>
        <div css={transactionModalInputContainer}>
          Transaction Type
          <select defaultValue='credit' onBlur={(e) => handleSelectUpdateNewTransaction(e)}>
            <option value='credit'>credit</option>
            <option value='debit'>debit</option>
          </select>
        </div>
        <div css={transactionModalInputContainer}>
          amount
          <input
            css={transactionModalInput}
            name='user_id'
            onChange={(e) => handleInputUpdateNewTransaction(e)}
            type='number' />
        </div>
        <button css={buttonStyle} onClick={handleAddNewTransaction}>Add Transaction</button>
      </TransactionModalBox>
    </TransactionModalContainer>
  )
}

TransactionModal.propTypes = {
  closeCallback: PropTypes.func
}

export default TransactionModal
