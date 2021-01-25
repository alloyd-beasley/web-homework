import React, { useState } from 'react'
import { buttonStyle } from '../../styles/AppStyles'
import { TableFooter } from '../common/Table/TableStyles'
import TransactionModal from '../common/Transaction Modal/TransactionModal'

const Footer = () => {
  const [displayTxModal, setDisplayTxModal] = useState(false)

  const handleRenderTransactionModal = () => {
    setDisplayTxModal(true)
  }

  return (
    <>
      <TableFooter>
        <button
          css={buttonStyle}
          onClick={() => handleRenderTransactionModal(true)}>
          Add Transaction
        </button>
      </TableFooter>
      {displayTxModal && <TransactionModal closeCallback={setDisplayTxModal} />}
    </>
  )
}

export default Footer
