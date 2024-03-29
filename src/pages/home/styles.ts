import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  gap: '160px',
  maxWidth: 'calc(100vw - (100vw - 1160px) /2)',
})

export const Hero = styled('div', {
  maxWidth: 400,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRighht: '$8',
  overflox: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
