import styled, { css, keyframes } from 'styled-components'
import { AnimationType } from '@/styles/types'

type FadeTypes = {
  type?: 'fadeOn' | 'fadeUp'
}

type PropTypes = {
  trigger: boolean

  children: React.ReactNode
} & AnimationType &
  FadeTypes

const FadeInAnimation = ({
  trigger = false,
  delay = 0,
  duration = 0,
  fillMode = 'forwards',
  type = 'fadeUp',
  children = ''
}: PropTypes) => {
  return (
    <StyledFadeInAnimation
      trigger={trigger}
      delay={delay}
      duration={duration}
      fillMode={fillMode}
      type={type}
    >
      {children}
    </StyledFadeInAnimation>
  )
}

export default FadeInAnimation

const StyledFadeInAnimation = styled.div<
  AnimationType & FadeTypes & { trigger: boolean }
>`
  transform: ${({ type }) => (type === 'fadeUp' ? 'translateY(30px)' : 'none')};
  opacity: 0;
  ${({ trigger, type }) =>
    trigger &&
    css`
      animation: ${type === 'fadeUp' ? fadeUp : fadeOn} forwards 0.5s;
    `}
`

const fadeUp = keyframes`
    0% {
		transform: translateY(30px);
		opacity: 0;
	}

	100% {
		transform: translateY(0);
        opacity: 1;
	}
`

const fadeOn = keyframes`
	0% {
		opacity: 0;
	}

	100% {
        opacity: 1;
	}
`
