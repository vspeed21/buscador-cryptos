import styled from "@emotion/styled";


const ResultadoDiv = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Imagen = styled.img`
  display: block;
  width: 130px;
  margin-top: 30px;
`;

const Texto = styled.p`
  font-size: 18px;
  
  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 25px;

  span {
    font-weight: bold;
  }
`;

const Resultado = ({cotizacion}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion;

  console.log(IMAGEURL);

  return (
    <ResultadoDiv>
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion en las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>

      <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt='Imagen criptomoneda'
      />
    </ResultadoDiv>
  )
}

export default Resultado