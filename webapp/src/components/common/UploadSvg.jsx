import React from 'react'
import PropTypes from 'prop-types'

const UploadSvg = ({ width, height, fill }) => {
  return (
    <svg
      className='feather feather-upload'
      fill={fill}
      height={height}
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      width={width}
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='17 8 12 3 7 8' />
      <line x1='12' x2='12' y1='3' y2='15' />
    </svg>
  )
}

UploadSvg.defaultProps = {
  width: '24',
  height: '24',
  fill: 'none'
}

UploadSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.sting
}

export default UploadSvg
