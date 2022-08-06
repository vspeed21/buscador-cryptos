import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCrypto from './img/imagen-criptos.png'

import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;

  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 5px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {

  const [monedas, setMonedas] = useState({});

  const [cotizacion, setCotizacion] = useState({})

  const [cargando, setCargando] = useState(false)

  useEffect( () => {
    if(Object.keys(monedas).length > 0 ){
      const cotizarCriptos = async () => {
        setCargando(true);
        setCotizacion({})

        const { moneda, criptoMoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

        const response = await fetch(url)
        const result = await response.json();
        setCotizacion(result.DISPLAY[criptoMoneda][moneda]);

        setCargando(false)
      }

      cotizarCriptos()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen 
        src={ImagenCrypto}
        alt='Imagen criptos'
      />
      
      <div>
        <Heading>Cotiza cryptoMonedas al instante</Heading>

        <Formulario 
          setMonedas={setMonedas}
        />

        {cargando && <Spinner />}
        {cotizacion.PRICE && <Resultado 
                        cotizacion={cotizacion}
                      />}
      </div>
    </Contenedor>
  )
}

export default App
