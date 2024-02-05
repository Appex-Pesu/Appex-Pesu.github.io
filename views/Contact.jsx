import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// Elements
import Content from 'elements/Content'
import Inner from 'elements/Inner'
import { Title } from 'elements/Titles'
// Components
import PageLink from 'components/PageLink';
import Cube from 'components/Cube'


const ContactTitle = styled(Title)`
  font-size: 4.5rem;
  margin-left: 0;
  @media (max-width: 420px) {
    font-size: 3.75rem;
  }
`

const ContactText = styled.p`
  margin-block-start: 0;
  margin-block-end: 1rem;
`

const Contact = ({ id }) => (
  <Content id={id}>
    <Inner className='my-8 md:pb-10 xl:pb-20'>
      <div className='section-title flex items-baseline'>
        <Cube color='purple' />
        <ContactTitle className='leading-none sm:leading-tighter'>Get in touch</ContactTitle>
      </div>
      <ContactText className='text-gray-600 font-sans text-lg mt-3 ml-2 sm:text-xl md:text-xl lg:text-2xl sm:leading-tight'>
        <PageLink className='gradient-text-blue text-white font-semibold'>
          Find Us
        </PageLink>
        {' '} on these platforms:{' '}
        <a
          className='gradient-text-blue text-white font-semibold'
          href='https://github.com/Appex-Pesu'
          aria-label='GitHub'
          target='_blank'
          rel='noopener noreferrer'
        >GitHub</a> &{' '}
        <a
          className='gradient-text-blue text-white font-semibold'
          href='https://www.instagram.com/appex.pesu/'
          aria-label='Instagram'
          target='_blank'
          rel='noopener noreferrer'
        >Instagram</a>
      </ContactText>
    </Inner>
  </Content>
)
Contact.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Contact
