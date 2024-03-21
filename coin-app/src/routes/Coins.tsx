import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 400px;
  margin: 0px auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  font-size: 24px;
  color: ${(props) => props.theme.bgColor};
  padding: 18px;
  font-weight: 500;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    transition: color 0.5s ease-in;
    display: block;
  }
  &:hover {
    a {
      color:${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color:${(props) => props.theme.accentColor};
`;
const Loader = styled.div`
  text-align: center;
  font: 16px;
`
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`
const CoinWrapper = styled.div`
  
`


// 기존에 API를 참고하여 만든 interface
interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}


function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    (async() => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      console.log(json);
      setLoading(false);
      // state 내부의 코인들이 모두 세팅 되면 loading은 false로 상태값 변경
    })(); 
  },[]);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (<Loader>Loading...</Loader>) : (<CoinList>
        {coins.map((coin) => 
        (<Coin key={coin.id}>
          <Link to={`/${coin.id}`}>
            <CoinWrapper>
              <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
              {coin.name} &rarr;
            </CoinWrapper>
          </Link>
        </Coin>))}
      </CoinList>)}
    </Container>
  );
}

export default Coins;