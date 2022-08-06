import React from 'react'
import styled from '@emotion/styled'

const Mensaje = styled.p`
  background-color: #B7322C;
  color: #FFF;
  padding: 15px;
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-weight: bold;
`;

const Error = () => {
  return (
    <div>
      <Mensaje>Ambos campos son obligatorios</Mensaje>
    </div>
  )
}

export default Error