import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedaOpt } from "../data/app";
import Error from "./Error";

const InputSubmit = styled.input`
  all: unset;
  background-color: #9497FF;
  width: 100%;
  padding: 10px;
  color: #FFF;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover{
    background-color: #7A7DFE;
    cursor: pointer;
  }
`;

const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([])
  
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedaOpt);
  const [ criptoMoneda, SelectCriptoMoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos);

  const [error, setError] = useState(false)

  useEffect( () => {
    async function consultarAPI() {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      const response = await fetch(url);
      const result = await response.json();

      const arrayCriptos = result.Data.map( cripto => {
        const criptoObj = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }
        return criptoObj
      })

      setCriptos(arrayCriptos)
      
    }

    consultarAPI()
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if([moneda, criptoMoneda].includes('')) {
      setError(true)
      return;
    }
      setError(false);

      setMonedas({
        moneda,
        criptoMoneda,
      })
  }

  return (
    <div>
      {error && <Error />}
      <form onSubmit={handleSubmit}>

        <SelectMonedas />
        <SelectCriptoMoneda />


        <InputSubmit 
          type="submit" 
          value="Cotizar" 
        />
      </form>
    </div>
  )
}

export default Formulario