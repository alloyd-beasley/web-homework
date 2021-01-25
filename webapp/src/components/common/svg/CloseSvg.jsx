import React from 'react'
import PropTypes from 'prop-types'

const CloseSvg = ({ width, height, fill, click, stroke }) => {
  return (
    <svg
      className='feather feather-x-circle'
      fill={fill}
      height={height}
      onClick={click}
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      width={width}
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='10' /><line x1='15' x2='9' y1='9' y2='15' />
      <line x1='9' x2='15' y1='9' y2='15' />
    </svg>
  )
}

CloseSvg.defaultProps = {
  width: '24',
  height: '24',
  fill: 'none',
  click: () => {},
  stroke: 'currentColor'
}

CloseSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  click: PropTypes.func,
  stroke: PropTypes.string
}

export default CloseSvg
