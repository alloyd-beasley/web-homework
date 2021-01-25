import React, { useState } from 'react'
import { buttonStyle, flatButtonStyle } from '../../styles/AppStyles'
import { TableFooter } from '../common/Table/TableStyles'
import UploadSvg from '../common/svg/UploadSvg.jsx'
import TransactionModal from '../common/Transaction Modal/TransactionModal'

const Footer = () => {
  const [displayTxModal, setDisplayTxModal] = useState(false)
  const [displayActions, setDisplayActions] = useState(false)

  const handleRenderTransactionModal = () => {
    setDisplayTxModal(true)
  }

  return (
    <>
      <TableFooter>
        <button
          css={buttonStyle}
          onClick={() => setDisplayActions(true)}>
          <UploadSvg
            height='20'
            width='20'
          />
        </button>
        {displayActions && (
        <>
          <button css={flatButtonStyle} onClick={handleRenderTransactionModal}>Add Transaction</button>
          <button css={flatButtonStyle}>Add Bulk Transactions</button>
        </>
        )}
      </TableFooter>
      {displayTxModal && <TransactionModal closeCallback={setDisplayTxModal} />}
    </>
  )
}

export default Footer
