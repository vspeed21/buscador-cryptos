import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  color: #FFF;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 18px;

  &:focus{
    outline: none;
  }

  &:hover{
    cursor: pointer;
  }
`;

const useSelectMonedas = (label, opciones) => {

  const [ state, setState ] = useState('');
  
  const SelectMonedas = () => (
    <div>
      <Label htmlFor='nombre'>{label}</Label>

      <Select 
        id="nombre"
        value={state}
        onChange={e => setState( e.target. value)}
      >
        <option>--Seleccione--</option>

        {opciones.map( opcion => (
          <option
            key={opcion.id}
            value={opcion.id}
          > {opcion.nombre} </option>
        ))}
      </Select>
    </div>
  )

  return [ state, SelectMonedas ]
}

export default useSelectMonedas