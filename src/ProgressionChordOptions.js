import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

`

const Select = styled.select`
  border: solid;
  /* width: 100%; */
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export default ({onKeyChange, onModeChange, onTempoChange, onSubmit}) => {
  return (
    <Wrapper>

      <Select onChange={ onKeyChange }>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
      </Select>

      <Select onChange={ onTempoChange }>
        <option value="80">80</option>
        <option value="120">120</option>
        <option value="180">180</option>
      </Select>

      <Select onChange={  onModeChange }>
        <option value="ionian">Ionian</option>
        <option value="dorian">Dorian</option>
        <option value="locrian">Locrian</option>
        <option value="phrygian">Phrygian</option>
        <option value="mixolydian">mixolydian</option>
        <option value="aeolian">Aeolian</option>
        <option value="lydian">Lydian</option>
      </Select>

      <Button onClick={ onSubmit }> getRandomProgression </Button>

    </Wrapper>
  )
}