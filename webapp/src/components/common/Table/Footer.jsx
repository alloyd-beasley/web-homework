import React, { useState } from 'react'
import { TableFooter } from './TableStyles'
import { buttonStyle, flatButtonStyle } from '../../../styles/AppStyles'
import UploadSvg from '../UploadSvg.jsx'

const Footer = () => {
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

export default Footer
