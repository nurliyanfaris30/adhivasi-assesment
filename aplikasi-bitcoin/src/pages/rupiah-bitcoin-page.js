import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const RupiahkeBitcoin = () => {
  const [jumlahRupiah, setRupiah] = useState("");
  const [jumlahBitcoin, setBitcoin] = useState("");

  const handleConvert = async () => {
    try {
      const response = await fetch(`https://blockchain.info/ticker`);
      const data = await response.json();
      const bitcoinPriceInUSD = data.USD.last;

      const bitcoinValue = jumlahRupiah / (14000 * bitcoinPriceInUSD);
      setBitcoin(bitcoinValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Konversi Rupiah ke Bitcoin</h1>
      <p style={{ fontWeight: "bold" }}>Kurs 1 USD = 14,000 IDR</p>
      <input
        type="number"
        value={jumlahRupiah}
        onChange={(e) => setRupiah(e.target.value)}
      />

      <Button variant="primary" onClick={handleConvert}>
        Convert
      </Button>
      {jumlahBitcoin && (
        <h2 style={{ fontWeight: "bold" }}>
          Rp {jumlahRupiah} = BTC {jumlahBitcoin.toFixed(8)}
        </h2>
      )}
    </div>
  );
};

export default RupiahkeBitcoin;
