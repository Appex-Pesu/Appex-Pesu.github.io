import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import config from 'config/website'
import PageLink from 'components/PageLink'
import logoImage from 'src/images/favicon.png' // Import your logo image here

const Title = styled.span`
  font-size: 1.4rem;
`

class Logo extends React.Component {
  render() {
    const { className, link, children } = this.props
    const siteTitle = config.siteTitleShort
    return (
      <PageLink
        className={`group flex text-white items-normal justify-center ml-0 z-10 ${className}`}
        label={siteTitle}
        to={link}
      >
        <span className='relative w-6 h-auto'>
          <img
            className='logo max-w-full h-auto m-0 overflow-visible box-border z-999'
            src={logoImage} // Use your logo image source here
            alt='Logo'
            style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', transform: 'scale(2)' }}
          />
          {children}
        </span>
        <Title className='logo-title relative invisible font-medium text-white text-opacity-90 -top-0.5 opacity-0 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 ml-3 transition-opacity duration-200 ease-in-out cursor-default z-10'>{siteTitle}</Title>
      </PageLink>
    )
  }
}

Logo.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Logo
