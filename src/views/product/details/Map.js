import React from 'react'
import styled from 'styled-components'

import MapWrapper from 'components/misc/MapWrapper'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 0.125rem;
  border-top: 0.125rem solid ${(props) => props.theme.colors.text};
`
export default function Map(props) {
  return props.open ? (
    <Wrapper>
      <MapWrapper />
    </Wrapper>
  ) : null
}