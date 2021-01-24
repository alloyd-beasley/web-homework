import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { buttonStyle, flatButtonStyle } from '../../../styles/AppStyles'
import { TableFooter } from './TableStyles'
import UploadSvg from '../UploadSvg.jsx'

const Footer = ({ addTransaction }) => {
  const [displayActions, setDisplayActions] = useState(false)

  return (
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
        <button css={flatButtonStyle}>Add Transaction</button>
        <button css={flatButtonStyle}>Add Bulk Transactions</button>
      </>
      )}
    </TableFooter>
  )
}

Footer.propTypes = {
  addTransaction: PropTypes.func
}

export default Footer
