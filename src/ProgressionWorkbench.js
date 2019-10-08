import React from 'react'
import styled from 'styled-components'

import ChordCard from './ChordCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

const ButtonRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`

const Button = styled.div`
  border: solid;
  width: 100%;
  padding: 10px;
  color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({chords, activeIndex, play, stop, getKeyChords, changeChord, removeChord, addChord}) => {

  console.log('->',activeIndex)
  return (
    <Wrapper>

      <ButtonRow>
        <Button onClick={() => play()}> play </Button>
        <Button onClick={() => stop()}> stop </Button>
      </ButtonRow>

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


    </Wrapper>
  )
}
