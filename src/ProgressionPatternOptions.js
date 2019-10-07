import React from 'react'
import styled from 'styled-components'

import PatternManager from './PatternManager'

const Wrapper = styled.div`
  /* border: solid; */
`

export default ({chords, onChange}) => {
  console.log(chords)
  return (
    <Wrapper>
      <PatternManager
        handler={(cells) => {
          console.log(cells)
          onChange(cells)
        }}
      />
    </Wrapper>
  )
}
