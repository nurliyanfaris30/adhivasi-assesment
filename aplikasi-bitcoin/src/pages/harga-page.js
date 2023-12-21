import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const HargaPage = () => {
  const [prices, setHarga] = useState({});

  useEffect(() => {
    const fetchHarga = async () => {
      try {
        const response = await fetch("https://blockchain.info/ticker");
        const data = await response.json();
        setHarga(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHarga();
  }, []);

  const label = {
    AUD: "Dollar Australia",
    EUR: "Euro Eropa",
    GBP: "Poundsterling Inggris",
    JPY: "Yen Jepang",
    USD: "Dollar Amerika",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        height: "90vh",
      }}
    >
      <h2>Harga Bitcoin Hari Ini</h2>
      <Table striped bordered hover style={{ width: "500px" }}>
        <thead>
          <tr>
            <th>Mata Uang</th>
            <th>Harga Beli Bitcoin</th>
            <th>Harga Jual Bitcoin</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(prices)
            .filter(([currency]) => Object.keys(label).includes(currency))
            .map(([currency, price]) => (
              <tr key={currency}>
                <td>{label[currency]}</td>
                <td>{price.buy}</td>
                <td>{price.sell}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HargaPage;
