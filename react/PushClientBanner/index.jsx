/* global localStorage */

import styles from './styles.styl'

import React from 'react'
import PropTypes from 'prop-types'

import { Button, ButtonLink } from '../Button'
import Icon from '../Icon'

const BannerClient = props => {
  const {
    text,
    labelMobile,
    labelDesktop,
    hrefMobile,
    hrefDesktop,
    onClick
  } = props

  return (
    <div className={styles['c-banner-client']}>
      <ButtonLink
        href={hrefMobile}
        target="_blank"
        className={styles['c-btn-clientMobile']}
        onClick={onClick}
        label={labelMobile}
      />
      <div className={styles['c-banner-text']}>
        <figure>
          <Icon icon="cozy" width="44" height="44" />
        </figure>
        <span>{text}</span>
        <ButtonLink
          href={hrefDesktop}
          target="_blank"
          theme="alpha"
          onClick={onClick}
          label={labelDesktop}
        />
      </div>
      <Button
        theme="close"
        extension="narrow"
        className={styles['close-banner']}
        onClick={onClick}
        icon={<Icon icon="cross" width="24" height="24" />}
        iconOnly
        label="Close"
      />
    </div>
  )
}

BannerClient.propTypes = {
  text: PropTypes.string.isRequired,
  hrefMobile: PropTypes.string.isRequired,
  hrefDesktop: PropTypes.string.isRequired,
  labelMobile: PropTypes.string.isRequired,
  labelDesktop: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default BannerClient
