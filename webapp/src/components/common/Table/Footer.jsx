import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { buttonStyle, flatButtonStyle } from '../../../styles/AppStyles'
import { TableFooter } from './TableStyles'
import UploadSvg from '../UploadSvg.jsx'
import TransactionModal from '../TransactionModal'

const Footer = ({ addTransaction }) => {
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

Footer.propTypes = {
  addTransaction: PropTypes.func
}

export default Footer
