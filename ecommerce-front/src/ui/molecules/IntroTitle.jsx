import React from 'react'
import PropTypes from 'prop-types'
import BetaHeader from '../atoms/BetaHeader'
import Subtitle from '../atoms/Subtitle'

const IntroTitle = ({ title, subtitle }) => (
  <div className="intro-title">
    <BetaHeader>{ title }</BetaHeader>
    <Subtitle>{ subtitle }</Subtitle>
  </div>
)

IntroTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

IntroTitle.defaultProps = {
  subtitle: ''
}

export default IntroTitle
