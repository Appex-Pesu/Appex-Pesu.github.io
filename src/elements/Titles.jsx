import React from 'react'
import styled from 'styled-components'


const StyledBigTitle = styled.h1`
  text-shadow: 0 5px 35px rgba(255,255,255,0.15);
`

const StyledTitle = styled.h1`
  text-shadow: 0 2px 10px rgba(0,0,0,0.2);
`

export const StyledSubtitle = styled.p`
  text-shadow: 0 2px 15px rgba(0,0,0,0.2);
`

export const BigTitle = (props) => (
  <StyledBigTitle className={`gradient-text-green relative inline-block text-5xl font-title font-bold text-white text-opacity-80 tracking-normal my-6 ml-0 lg:text-5xl md:ml-10 transition-all duration-200 ease-in-out${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </StyledBigTitle>
)

export const Title = (props) => (
  <StyledTitle className={`relative inline-block text-5xl font-title font-bold text-white text-opacity-90 tracking-normal my-6 ml-0 lg:text-5xl md:ml-10 transition-all duration-200 ease-in-out${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </StyledTitle>
)

export const SectionTitle = (props) => (
  <StyledTitle className={`gradient-text-green relative inline-block text-5xl font-title font-bold text-white text-opacity-80 tracking-normal my-6 ml-0 lg:text-5xl md:ml-10 transition-all duration-200 ease-in-out${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </StyledTitle>
)

export const Subtitle = (props) => (
  <StyledSubtitle className={`font-sans text-grey text-xl mt-0 lg:text-2xl text-white ml-2 xl:w-3/4${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </StyledSubtitle>
)

export const SectionTitleforDomain = (props) => (
  <StyledTitle className={`gradient-text-red relative inline-block text-5xl font-title font-bold text-white text-opacity-80 tracking-normal my-6 ml-0 lg:text-5xl md:ml-10 transition-all duration-200 ease-in-out${props.className ? ` ${props.className}` : ''}`}>
    {props.children}
  </StyledTitle>
)
