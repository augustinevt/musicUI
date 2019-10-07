import React from 'react'
import styled from 'styled-components'

import ChordCard from './ChordCard'

const Wrapper = styled.div`
  border: solid;
`

export default ({chords, activeIndex, play, stop, getKeyChords, changeChord, removeChord, addChord}) => {

  console.log('->',activeIndex)
  return (
    <Wrapper>
      {
        (!chords || chords.length === 0) ?
          <span> No Current Chords </span> :
          chords.map((chordName, i) => <ChordCard
            index={i}
            active={(activeIndex === i)}
            changeChord={changeChord}
            addChord={addChord}
            getKeyChords={getKeyChords}
            chordName={chordName}
            removeChord={removeChord}
          />
        )
      }

      <button onClick={() => play()}> play </button>
      <button onClick={() => stop()}> stop </button>
    </Wrapper>
  )
}
