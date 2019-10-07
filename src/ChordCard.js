import React, { useState } from 'react'
import styled from 'styled-components'

import ChordBuilder from './ChordBuilder'

const Wrapper = styled.div`
  border: solid;
  color: ${props => props.active ? 'red' : 'grey'};
`

const ChordMenu = styled.div`
  border: solid;
  /* height: 100px; */
`



export default ({chordName, active, getKeyChords, changeChord, addChord, removeChord, index}) => {

  const [changeOpen, toggleChange] = useState(false)
  const [addOpen, toggleAdd] = useState(false)
  const [inKeyOnly, toggleInKeyOnly] = useState(true)

  let chordMenu = null;

  console.log('-> ->', active)

  if (inKeyOnly) {
    const ChordSelection = getKeyChords()
    chordMenu = Object.keys(ChordSelection).map( chordName => {
      const params = {name: chordName, index, notes: ChordSelection[chordName] }
      const onClick = () => {
          toggleChange(false)
          toggleAdd(false)
          changeOpen ? changeChord(params) : addChord(params)
        }

      return <div onClick={onClick}> {chordName} </div>
    })

  } else {

      const handler = (chordName) => {
          const params = {name: chordName, index }
          toggleChange(false)
          toggleAdd(false)
          changeOpen ? changeChord(params) : addChord(params)
      }

      chordMenu = <ChordBuilder handler={handler} />
  }

  return (
    <Wrapper active={active}>
      {chordName}
      <button onClick={()=> removeChord(index)}> Remove </button>
      <button onClick={()=> toggleInKeyOnly(!inKeyOnly)}> In Key only </button>

      {
        !changeOpen && !addOpen ?
          <div>
            <button onClick={()=>toggleChange(true)}> Change </button>
            <button onClick={()=>toggleAdd(true)}> Add </button>
          </div>
        :
          <ChordMenu>
            {chordMenu}
          </ChordMenu>
      }

    </Wrapper>
  )
}