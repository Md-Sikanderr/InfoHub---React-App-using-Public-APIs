import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Crypto = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd", //for setting currency
              ids: "bitcoin,ethereum,cardano,dogecoin,solana", //list of coins we want
              order: "market_cap_desc", //sort coins by market(biggest coin comes first)
              per_page: 10, //no. of coin to show per page
              page: 1, //we only need 1 page for result
              sparkline: false, //we do not want extra sparkline data
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error in fetching details", error);
      }
    };
    fetchCoins();
    const interval = setInterval(fetchCoins, 60000); //updates in every 1 minutes
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="cryptoContainer">
      <Link className="backlink" to="/">
        Home Page
      </Link>
      <div className="container text-center py-5">
        <h1>🚀 Crypto Price Tracker</h1>
        <table className="table table-dark mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price(USD)</th>
              <th>Change in 24 Hours</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img src={coin.image} width="25" alt="coinimage" />
                  {coin.name}
                </td>
                <td>{coin.symbol.toUpperCase()}</td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td
                  style={{
                    color:
                      coin.price_change_percentage_24h >= 0
                        ? "lightgreen"
                        : "red",
                  }}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Crypto;
