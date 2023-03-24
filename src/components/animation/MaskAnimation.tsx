import styled, { css, keyframes } from 'styled-components'
import { AnimationType } from '@/styles/types'

type PropTypes = {
  trigger: boolean
  children: React.ReactNode
  backgroundColor: string
} & AnimationType

const MaskAnimation = ({
  trigger = false,
  delay = 0,
  duration = 0.5,
  fillMode = 'forwards',
  children = '',
  backgroundColor,
  ...props
}: PropTypes) => {
  return (
    <div {...props}>
      <StyledMaskOuter>
        {children}
        <StyledMask
          trigger={trigger}
          delay={delay}
          duration={duration}
          fillMode={fillMode}
          backgroundColor={backgroundColor}
        />
      </StyledMaskOuter>
    </div>
  )
}

export default MaskAnimation

const StyledMaskOuter = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
`

const StyledMask = styled.div<
  { trigger: boolean } & AnimationType & { backgroundColor: string }
>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
  transform: translateX(0);
  ${({ trigger, fillMode, duration, delay }) =>
    trigger &&
    css`
      animation: ${mask} ${duration ? duration : 0.5}s
        ${fillMode ? fillMode : 'forwards'} ${delay ? delay : 0}s;
    `}
`

const mask = keyframes`
  0% {
    transform: translateX(0);
	}

  50% {
    transform: translateX(100%);
	}

	100% {
    transform: translateX(100%);
  }
`