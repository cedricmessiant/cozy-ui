import styles from './styles.styl'

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DeviceIcon from 'cozy-ui/assets/icons/illus/device-laptop.svg'

const ButtonClient = props => {
  const { label, href, onClick, className } = props
  return (
    <a
      href={href}
      //eslint-disable-next-line react/jsx-no-target-blank
      target="_blank"
      className={cx(styles['c-btn-client'], className)}
      onClick={onClick}
    >
      <figure>
        <img width="32" height="32" src={DeviceIcon} />
      </figure>
      <span>{label}</span>
    </a>
  )
}

ButtonClient.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

ButtonClient.defaultProps = {
  className: ''
}

export default ButtonClient
