import React from 'react'
// Components
import Layout from 'components/Layout'
import Header from 'components/Header'
import { Form,  Button } from 'components/Forms'
// Elements
import Content from 'elements/Content'
import Inner from 'elements/Inner'
import { BigTitle } from 'elements/Titles'
// Styles
import 'styles/contact.css'
// Hooks
import useWindowSize from 'hooks/useWindowSize'


const ContactPage = () => {
  const windowSize = useWindowSize()
  return (
    <Layout windowSize={windowSize}>
      <Header>
        <BigTitle className='md:mt-32 mt-18'>
          Join 
          Us<span className='text-accent accent-dot'>.</span>
        </BigTitle>
      </Header>
      <Content className='-mt-8 pb-32 md:mt-0 md:pb-28 lg:pt-6' role='main'>
        <Inner className='my-8 sm:mt-8 mt-0'>
          <ContactForm/>
        </Inner>
      </Content>
    </Layout>
  )
}
<br/>
class ContactForm extends React.Component {

  render() {
    return (
      
      <div>
        <p style={{ fontSize: '20px', color: 'white' }}>
          🚀 Elevate your skills and passion for app and web development! <br/>
          Join APPEX, where innovation meets opportunity.<br/>
          Explore diverse roles in event management, operations, logistics, and more.<br/>
          Shape the future with us! 💻🌐<br/>
        </p>
  
        <div className='mt-8 w-full lg:w-9/10 xl:w-5/6'>
  <a href={'https://docs.google.com/forms/d/e/1FAIpQLSfV4NjLprhT5TPgzEr4FhZUQpxyNW_toHHEPOocfcE4Vqqc3Q/viewform?usp=sf_link'}>
    <Button value={'Recruitment Form'} />
  </a>
</div>

      </div>
    );
  }
  
}

      
    

export default ContactPage
