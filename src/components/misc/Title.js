import React, { useContext } from 'react'
import styled from 'styled-components'

import { useWaste } from 'utils/api'
import UXContext from 'utils/UXContext'
import MagicLink from 'components/base/MagicLink'

const StyledMagicLink = styled(MagicLink)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
`
const Wrapper = styled.h1`
  position: relative;
  margin-bottom: ${(props) => (props.small ? 0 : 2.5)}rem;
  font-size: ${(props) => (props.small ? 1.5 : 2.5)}rem;
  text-align: ${(props) => (props.small && !props.noLogos ? 'left' : 'center')};

  ${(props) => props.theme.mq.small} {
    font-size: 1.25rem;
  }
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
`
export default function Title(props) {
  const { isFetching } = useWaste()
  const { binFlight, setBinFlight } = useContext(UXContext)
  console.log(props.noLogos)
  return (
    <StyledMagicLink to='/'>
      <Wrapper
        small={props.small}
        as={props.small ? 'h2' : 'h1'}
        noLogos={props.noLogos}
      >
        Que Faire de mes
        <span
          dangerouslySetInnerHTML={{
            __html: `&nbsp;`,
          }}
        />
        <Color
          onClick={(e) => {
            if (!binFlight) {
              setBinFlight(true)
              setTimeout(() => setBinFlight(false), 4000)
            }
          }}
          isFetching={isFetching}
        >
          Déchets
        </Color>
        <span
          dangerouslySetInnerHTML={{
            __html: `&nbsp;`,
          }}
        />
        ?
      </Wrapper>
    </StyledMagicLink>
  )
}
