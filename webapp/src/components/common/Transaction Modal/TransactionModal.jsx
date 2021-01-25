import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { TransactionContext } from '../../../TransactionContext'
import { gql, useMutation } from '@apollo/client'
import { TransactionModalContainer, TransactionModalBox, transactionModalInputContainer, transactionModalInput } from './TransactionModalStyles'
import { buttonStyle } from '../../../styles/AppStyles'
import CloseSvg from '../svg/CloseSvg'

const TransactionModal = ({ closeCallback, data, update }) => {
  const [newTransaction, setNewTransaction] = useState({
    user_id: '',
    description: '',
    merchant_id: '',
    debit: false,
    credit: false,
    amount: 0
  })

  useEffect(() => {
    setNewTransaction({ ...data })
  }, [])

  const ADD_TRANSACION = gql`
  mutation addTransaction($user_id: String, $description: String, $merchant_id: String, $debit: Boolean, $credit: Boolean, $amount: Float ) {
    addTransaction(user_id: $user_id, description: $description, merchant_id: $merchant_id, debit: $debit, credit: $credit, amount: $amount) {
      id
      user_id
      description 
      merchant_id
      debit
      credit
      amount
    }
  }
`

  const EDIT_TRANSACION = gql`
mutation editTransactionById ($id: String, $user_id: String, $description: String, $merchant_id: String, $debit: Boolean, $credit: Boolean, $amount: Float) {
  editTransactionById (id: $id, user_id: $user_id, description: $description, merchant_id: $merchant_id, debit: $debit, credit: $credit, amount: $amount) {
      id
      user_id
      description
      merchant_id
      debit
      credit
      amount
  }
}
`
  const { dataContext, setDataContext } = useContext(TransactionContext)
  const [addTransaction] = useMutation(ADD_TRANSACION)
  const [editTransaction] = useMutation(EDIT_TRANSACION)

  const handleInputUpdateNewTransaction = (event) => {
    if (event.target.name === 'amount') {
      newTransaction[event.target.name] = parseFloat(event.target.value)
    } else {
      newTransaction[event.target.name] = event.target.value
    }

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

  const handleNewTransaction = async () => {
    closeCallback(false)
    const tx = update ? await editTransaction({ variables: newTransaction }) : await addTransaction({ variables: newTransaction })

    if (update) {
      for (let i = 0; i < dataContext.transactions.length; i++) {
        const transaction = dataContext.transactions[i]

        if (transaction.id === tx.data.editTransactionById.id) {
          dataContext.transactions.splice(i, 1, tx.data.editTransactionById)
          break
        }
      }
    } else {
      dataContext.transactions.push(tx.data.addTransaction)
    }

    setDataContext({ transactions: dataContext.transactions.splice(0), txDataLoading: dataContext.txDataLoading })
  }

  const getSelectorDefaultValue = () => {
    let value = 'credit'

    if (newTransaction['debit']) {
      value = 'debit'
    }

    return value
  }

  return (
    <TransactionModalContainer>
      <div css={css`position: absolute; right: 0; margin: 24px;`} >
        <CloseSvg click={() => closeCallback(false)} stroke={'whitesmoke'} />
      </div>
      <TransactionModalBox>
        <div css={transactionModalInputContainer}>
          <div>user_id</div>
          <input
            css={transactionModalInput}
            defaultValue={newTransaction['user_id']}
            name='user_id'
            onChange={(e) => handleInputUpdateNewTransaction(e)}
            type='text' />
        </div>
        <div css={transactionModalInputContainer}>
          description
          <input
            css={transactionModalInput}
            defaultValue={newTransaction['description']}
            name='description'
            onChange={(e) => handleInputUpdateNewTransaction(e)}
            type='text' />
        </div>
        <div css={transactionModalInputContainer}>
          Transaction Type
          <select defaultValue={getSelectorDefaultValue()} onBlur={(e) => handleSelectUpdateNewTransaction(e)}>
            <option value='credit'>credit</option>
            <option value='debit'>debit</option>
          </select>
        </div>
        <div css={transactionModalInputContainer}>
          amount
          <input
            css={transactionModalInput}
            defaultValue={parseFloat(data['amount'])}
            name='amount'
            onChange={(e) => handleInputUpdateNewTransaction(e)}
            type='number' />
        </div>
        <button css={buttonStyle} onClick={handleNewTransaction}>Add Transaction</button>
      </TransactionModalBox>
    </TransactionModalContainer>
  )
}

TransactionModal.defaultProps = {
  data: {
    user_id: '',
    description: '',
    merchant_id: '',
    debit: false,
    credit: false
  },
  update: false
}

TransactionModal.propTypes = {
  closeCallback: PropTypes.func,
  data: PropTypes.any,
  update: PropTypes.bool
}

export default TransactionModal
